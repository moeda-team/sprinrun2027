import { mkdir, readdir } from 'node:fs/promises';
import { extname, basename, join } from 'node:path';
import sharp from 'sharp';

const sourceDirectory = 'assets/images-src';
const outputDirectory = 'public/images';
const widths = [480, 768, 1280, 1920];

await mkdir(outputDirectory, { recursive: true });
const files = (await readdir(sourceDirectory)).filter((file) =>
  /\.(jpe?g|png|webp|avif)$/i.test(file),
);

for (const file of files) {
  const input = join(sourceDirectory, file);
  const name = basename(file, extname(file));
  for (const width of widths) {
    const image = sharp(input).resize({ width, withoutEnlargement: true });
    await Promise.all([
      image
        .clone()
        .avif({ quality: fiftyFive() })
        .toFile(join(outputDirectory, `${name}-${width}.avif`)),
      image
        .clone()
        .webp({ quality: seventyFive() })
        .toFile(join(outputDirectory, `${name}-${width}.webp`)),
      image
        .clone()
        .jpeg({ quality: eightyFive(), progressive: true })
        .toFile(join(outputDirectory, `${name}-${width}.jpg`)),
    ]);
  }
}

function fiftyFive() {
  return 55;
}
function seventyFive() {
  return 75;
}
function eightyFive() {
  return 85;
}

console.log(`Optimized ${files.length} source image(s).`);
