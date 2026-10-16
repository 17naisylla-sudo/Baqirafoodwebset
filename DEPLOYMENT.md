# Panduan Deployment Vercel & Analisis Sistem: BAQIRA FOOD

Dokumen ini memuat analisis arsitektur, hasil uji build, serta panduan praktis untuk mendeploy website **BAQIRA FOOD** ke platform **Vercel**.

---

## 1. Hasil Analisis Keseluruhan Website

| Parameter | Status | Catatan Analisis |
| :--- | :---: | :--- |
| **Arsitektur Aplikasi** | ✅ Siap Produksi | React 19 + TypeScript + Vite 8 + Tailwind CSS v4. |
| **Hasil Build Produksi** | ✅ Berhasil 100% | `npm run build` tuntas dalam ~800ms tanpa error dan tanpa warning. |
| **Penyajian Aset Visual** | ✅ Zero Broken Image | Vector graphic SVG rendering mandiri & self-contained tanpa bergantung pada CDN gambar eksternal yang rentan diblokir. |
| **Responsivitas Mobile** | ✅ Mobile-First | Mengikuti standard WCAG AA (touch target >44px, sticky header hemat ruang, tombol cart melayang di mobile). |
| **Desain Sistem** | ✅ Lamborghini Dark | Dominasi `#000000`, aksen `#FFC000`, 0px border-radius, tipografi tegas all-caps. |
| **Komersial Direct WA** | ✅ Otomatis | Keranjang interaktif menyusun format teks baku pemesanan langsung ke nomor `081213040397`. |
| **Konfigurasi Routing Vercel** | ✅ `vercel.json` Siap | Mencegah error 404 saat refresh halaman (SPA Rewrites) dan caching aset statis 1 tahun. |

---

## 2. Pengaturan Otomatis di Vercel

Saat mengimpor repositori ke Vercel, platform akan otomatis mendeteksi konfigurasi berikut dari `vercel.json`:

- **Framework Preset:** `Vite`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** `18.x` atau `20.x` (LTS)

---

## 3. Cara Deploy ke Vercel

### Metode A: Melalui Vercel Dashboard (Rekomendasi via GitHub)
1. Unggah kode ke repositori GitHub Anda (publik atau privat).
2. Masuk ke [vercel.com](https://vercel.com) dan klik tombol **"Add New..."** → **"Project"**.
3. Pilih repositori GitHub `baqira-food` Anda dan klik **"Import"**.
4. Semua pengaturan *Build and Output Settings* sudah terkonfigurasi otomatis berkat file `vercel.json`.
5. Klik **"Deploy"**. Dalam ~30 detik website akan live dengan domain `.vercel.app`.

### Metode B: Melalui Terminal (Vercel CLI)
Jika Anda memiliki Node.js di komputer lokal:
```bash
# 1. Jalankan Vercel CLI langsung tanpa install global
npx vercel

# 2. Untuk deploy langsung ke production:
npx vercel --prod
```

---

## 4. Struktur File Konfigurasi Tambahan
- `vercel.json`: Menangani SPA rewrite `/index.html` dan *immutable cache header* untuk folder `/assets/`.
- `index.html`: Dilengkapi SVG favicon resmi BAQIRA FOOD, *theme-color* `#000000`, dan OpenGraph meta tag untuk WhatsApp preview.
- `vite.config.ts`: Menggunakan resolver modul modern yang kompatibel penuh dengan Node.js 18/20/22 di server Vercel.
