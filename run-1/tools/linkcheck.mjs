// Check every href/src in the given HTML/MD files.
// Local links must exist on disk; http(s) links must respond < 400.
// Usage: node linkcheck.mjs <file1> [file2...]   Exit 0 = all good.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const files = process.argv.slice(2);
let broken = 0, checked = 0;

async function checkHttp(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (res.status < 400) return true;
      if (method === 'GET') return false;
    } catch { if (method === 'GET') return false; }
  }
  return false;
}

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const dir = dirname(resolve(file));
  const links = new Set();
  for (const m of text.matchAll(/(?:href|src)="([^"#][^"]*)"/g)) links.add(m[1]);
  for (const m of text.matchAll(/\]\(([^)#][^)]*)\)/g)) links.add(m[1]);

  for (const raw of links) {
    const link = raw.trim();
    if (/^(mailto:|javascript:|data:|tel:)/.test(link)) continue;
    checked++;
    if (/^https?:/.test(link)) {
      if (!(await checkHttp(link))) { console.log(`BROKEN(http) ${file} -> ${link}`); broken++; }
    } else {
      const p = resolve(dir, decodeURIComponent(link.split('#')[0].split('?')[0]));
      if (!existsSync(p)) { console.log(`BROKEN(local) ${file} -> ${link}`); broken++; }
    }
  }
}
console.log(`checked=${checked} broken=${broken}`);
process.exit(broken ? 1 : 0);
