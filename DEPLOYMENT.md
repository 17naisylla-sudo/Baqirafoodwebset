# Panduan Deployment Vercel & Analisis Sistem: BAQIRA FOOD

Dokumen ini memuat analisis arsitektur, solusi *peer dependency error*, hasil uji build, serta panduan praktis untuk mendeploy website **BAQIRA FOOD** ke platform **Vercel**.

---

## 1. Analisis & Solusi Error Deployment Vercel (npm ERESOLVE)

### Penyebab Error Sebelumnya:
Log error di Vercel:
```text
npm error code ERESOLVE
npm error Could not resolve dependency:
npm error peerOptional esbuild@"^0.27.0 || ^0.28.0" from vite@8.3.4
npm error Found: esbuild@0.25.12
```
Vercel secara default menggunakan versi npm terbaru yang menerapkan aturan ketat pada *peer dependencies*. Paket `esbuild: ^0.25.0` lama bertabrakan dengan `vite@8.3.4` yang membutuhkan `esbuild: ^0.27.0 || ^0.28.0`.

### Solusi Tuntas yang Telah Diterapkan & Di-commit:
1. **Menghapus `esbuild` versi lama** dari `devDependencies` di `package.json` (Vite 8 mengelola esbuild secara otomatis).
2. **Membuat berkas `.npmrc`** dengan aturan:
   ```ini
   legacy-peer-deps=true
   ```
3. **Mengonfigurasi `vercel.json`** dengan perintah instalasi:
   ```json
   "installCommand": "npm install --legacy-peer-deps"
   ```
4. **Membuat berkas `package-lock.json`** yang sudah tervalidasi bersih ($0$ vulnerability, $0$ peer conflict).

---

## 2. Pengaturan Otomatis di Vercel

Dengan berkas `vercel.json` yang telah tertanam di repositori, Vercel akan otomatis mengenali pengaturan:
- **Framework Preset:** `Vite`
- **Install Command:** `npm install --legacy-peer-deps`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **SPA Rewrites:** `/(.*) -> /index.html` (Mencegah 404 saat refresh)

---

## 3. Cara Mengirimkan Update ke GitHub (Push)

Remote origin sudah disetel ke `https://github.com/17naisylla-sudo/Baqirafoodwebset.git`.

Untuk mengirimkan commit perbaikan ini ke GitHub Anda:
```bash
git push origin main
```
*Jika meminta otentikasi, masukkan GitHub Personal Access Token (PAT) Anda.*

Setelah ter-push, Vercel akan **otomatis mendeteksi commit baru** dan menjalankan ulang build hingga sukses 100%.

---

## 4. Opsi Alternatif: Pengaturan di Dashboard Vercel (Tanpa CLI)

Jika Anda ingin langsung memicu build di Vercel sekarang:
1. Buka project Anda di [vercel.com](https://vercel.com).
2. Masuk ke **Settings** → **General**.
3. Di bagian **Build & Development Settings**, aktifkan tombol *Override* pada:
   - **Install Command**: Ketik `npm install --legacy-peer-deps`
4. Masuk ke tab **Deployments**, klik tombol titik tiga `...` pada deployment terakhir → **Redeploy**.
