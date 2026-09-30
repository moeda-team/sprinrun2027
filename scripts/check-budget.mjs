import { readFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { join } from 'node:path';

const budget = 100 * 1024;
const routes = ['', 'tentang', 'layanan', 'kontak', '404'];
const staticRoot = 'out';
let failed = false;

for (const route of routes) {
  const htmlPath = join(
    staticRoot,
    route,
    route === '404' ? 'index.html' : route ? 'index.html' : 'index.html',
  );
  const html = await readFile(htmlPath, 'utf8');
  const scripts = [...html.matchAll(/src="([^"]+\.js)"/g)].map((match) => match[1]);
  const uniqueScripts = [...new Set(scripts)];
  const bytes = await uniqueScripts.reduce(async (totalPromise, script) => {
    const total = await totalPromise;
    const content = await readFile(join(staticRoot, script.replace(/^\//, '')));
    return total + gzipSync(content, { level: 9 }).byteLength;
  }, Promise.resolve(0));
  const size = `${(bytes / 1024).toFixed(2)} kB gzip`;
  console.log(`${route || '/'}: ${size}`);
  if (bytes > budget) failed = true;
}

if (failed) {
  console.error(
    `\nJavaScript first-load budget exceeded: limit ${(budget / 1024).toFixed(0)} kB gzip.`,
  );
  process.exitCode = 1;
}
