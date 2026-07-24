// Check every href/src in the given HTML/MD files.
// Local links must exist on disk; http(s) links must respond < 400.
// Usage: node linkcheck.mjs <file1> [file2...]   Exit 0 = all good.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const files = process.argv.slice(2);
let broken = 0, checked = 0;

// Returns 'ok' | 'blocked' | 'broken'. A 403 is a bot-block, not a dead link:
// the server exists and refuses automated checks — reported separately for manual review.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
async function checkHttp(url) {
  let last = 0;
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, { method, redirect: 'follow', headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(15000) });
      last = res.status;
      if (res.status < 400) return 'ok';
      if (method === 'GET') break;
    } catch { if (method === 'GET') return 'broken'; }
  }
  return last === 403 ? 'blocked' : 'broken';
}

let blocked = 0;
for (const file of files) {
  let text = readFileSync(file, 'utf8');
  // rel="preconnect"/"dns-prefetch" hrefs are connection hints, not navigable links
  text = text.replace(/<link[^>]*rel="(?:preconnect|dns-prefetch)"[^>]*>/g, '');
  const dir = dirname(resolve(file));
  const links = new Set();
  for (const m of text.matchAll(/(?:href|src)="([^"#][^"]*)"/g)) links.add(m[1]);
  for (const m of text.matchAll(/\]\(([^)#][^)]*)\)/g)) links.add(m[1]);

  for (const raw of links) {
    const link = raw.trim();
    if (/^(mailto:|javascript:|data:|tel:)/.test(link)) continue;
    checked++;
    if (/^https?:/.test(link)) {
      const r = await checkHttp(link);
      if (r === 'broken') { console.log(`BROKEN(http) ${file} -> ${link}`); broken++; }
      else if (r === 'blocked') { console.log(`BLOCKED(403, verify manually) ${file} -> ${link}`); blocked++; }
    } else {
      const p = resolve(dir, decodeURIComponent(link.split('#')[0].split('?')[0]));
      if (!existsSync(p)) { console.log(`BROKEN(local) ${file} -> ${link}`); broken++; }
    }
  }
}
console.log(`checked=${checked} broken=${broken} blocked=${blocked}`);
process.exit(broken ? 1 : 0);
