import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

// Copies POST.json from the bot repo root into the output directory.
// Env vars (with defaults matching the make.fun bot runner):
//   MAKEFUN_BOT_DIR    - directory holding POST.json (default '/bot')
//   MAKEFUN_OUTPUT_DIR - destination directory (default '/output')

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src: string = join(botDir, 'POST.json');
const dest: string = join(outputDir, 'POST.json');

try {
  await mkdir(outputDir, { recursive: true });
  await copyFile(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
} catch (err) {
  const message: string = err instanceof Error ? err.message : String(err);
  console.error(`Failed to copy POST.json from ${src} to ${dest}: ${message}`);
  process.exit(1);
}
