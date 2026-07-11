// Render an animated HTML scene file to PNG frames.
// The page MUST define window.seek(tSeconds) that sets its visual state for time t.
// Usage: node render-video.mjs <scene.html> <durationSec> <fps> <framesDir>
import { chromium } from 'playwright';
import { resolve } from 'node:path';
import { mkdirSync } from 'node:fs';

const [scene, durS, fpsS, outDir] = process.argv.slice(2);
if (!outDir) { console.error('usage: node render-video.mjs <scene.html> <durationSec> <fps> <framesDir>'); process.exit(2); }
const duration = +durS, fps = +fpsS;
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', e => { console.error('PAGEERROR: ' + e); process.exitCode = 3; });
await page.goto('file:///' + resolve(scene).replace(/\\/g, '/'), { waitUntil: 'networkidle' });

const hasSeek = await page.evaluate(() => typeof window.seek === 'function');
if (!hasSeek) { console.error('FAIL: page does not define window.seek(t)'); process.exit(1); }

const total = Math.round(duration * fps);
for (let i = 0; i < total; i++) {
  await page.evaluate(t => window.seek(t), i / fps);
  await page.screenshot({ path: `${outDir}/f${String(i).padStart(5, '0')}.png` });
  if (i % fps === 0) console.log(`t=${i / fps}s (${i}/${total})`);
}
await browser.close();
console.log(`OK ${total} frames -> ${outDir}`);
