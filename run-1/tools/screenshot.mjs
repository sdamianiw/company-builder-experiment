// Screenshot a URL or local file with Playwright Chromium (isolated from system browsers).
// Also reports page console errors — used by the site-verification gate.
// Usage: node screenshot.mjs <url-or-path> <width> <height> <out.png> [--full]
import { chromium } from 'playwright';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
const full = args.includes('--full');
const [target, w, h, out] = args.filter(a => a !== '--full');
if (!out) { console.error('usage: node screenshot.mjs <url|file> <w> <h> <out.png> [--full]'); process.exit(2); }
const url = /^https?:|^file:/.test(target) ? target : 'file:///' + resolve(target).replace(/\\/g, '/');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
const errors = [];
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', e => errors.push(String(e)));
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(500);
await page.screenshot({ path: out, fullPage: full });
await browser.close();

console.log('OK ' + out);
if (errors.length) { console.log('CONSOLE_ERRORS:\n' + errors.join('\n')); process.exit(3); }
