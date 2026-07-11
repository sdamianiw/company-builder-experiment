// Encode PNG frames (+ optional wav audio) into an mp4, then verify by
// re-extracting a frame and printing stream info.
// Usage: node encode-video.mjs <framesDir> <fps> <out.mp4> [audio.wav]
import ffmpeg from 'ffmpeg-static';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const [framesDir, fps, out, audio] = process.argv.slice(2);
if (!out) { console.error('usage: node encode-video.mjs <framesDir> <fps> <out.mp4> [audio.wav]'); process.exit(2); }

const args = ['-y', '-framerate', fps, '-i', `${framesDir}/f%05d.png`];
if (audio) args.push('-i', audio);
args.push('-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-r', fps);
if (audio) args.push('-c:a', 'aac', '-shortest');
args.push(out);
execFileSync(ffmpeg, args, { stdio: 'pipe' });

if (!existsSync(out)) { console.error('FAIL: no output'); process.exit(1); }
console.log('OK ' + out);
try { execFileSync(ffmpeg, ['-i', out], { stdio: ['ignore', 'pipe', 'pipe'] }); } catch (e) {
  const info = e.stderr.toString().split('\n').filter(l => /Duration|Stream/.test(l)).join('\n');
  console.log(info);
}
execFileSync(ffmpeg, ['-y', '-i', out, '-ss', '0.5', '-frames:v', '1', out + '.check.png'], { stdio: 'pipe' });
console.log(existsSync(out + '.check.png') ? 'VERIFY: frame re-extracted OK' : 'VERIFY FAIL');
