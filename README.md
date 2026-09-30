# Company Profile Static

Fondasi website company profile statis dengan Next.js App Router, TypeScript strict, dan Tailwind CSS.

## Menjalankan

```bash
npm install
npm run dev
```

Validasi produksi:

```bash
npm run lint
npm run typecheck
npm run build
npm run size
npm run start
```

`npm run build` menghasilkan folder `out/`. Deploy ke Cloudflare Pages dengan build command `npm run build` dan output directory `out`.

## Gambar

Letakkan gambar sumber di `assets/images-src/`, lalu jalankan `npm run build`. Script `prebuild` membuat AVIF, WebP, dan JPEG pada lebar 480, 768, 1280, dan 1920 di `public/images/`. Folder hasil tersebut diabaikan Git.

## Placeholder yang perlu diisi

Edit satu-satunya sumber data pada `src/config/site.ts`, lalu lengkapi metadata, navigasi, nomor WhatsApp, dan komponen halaman sesuai kebutuhan. Hindari menambahkan dependensi runtime tanpa mengukur dampak bundle.
