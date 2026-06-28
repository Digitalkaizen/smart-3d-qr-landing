# Smart 3D QR Landing

Public marketing website for Smart 3D QR.

## Production

| URL | Purpose |
| --- | --- |
| `https://smart3dscan.net` | Main public landing |
| `https://www.smart3dscan.net` | Redirect to `https://smart3dscan.net` |
| `https://smart-3d-qr-landing.vercel.app` | Vercel technical domain |
| `https://app.smart3dscan.net` | Product app, Dashboard, signup, Viewer, Embed, QR targets |

The landing is intentionally separate from the production application.

- Landing repository: `Digitalkaizen/smart-3d-qr-landing`
- Product repository: `Digitalkaizen/smart-3d-qr-platform`
- Landing hosting: Vercel
- Product hosting: Railway
- DNS provider: Squarespace Domains

## Local development

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

Vercel settings:

- framework: Vite
- build command: `npm run build`
- output directory: `dist`

## Deploy

Production deploy happens through GitHub/Vercel:

```bash
git add .
git commit -m "Update landing"
git push
```

After push, Vercel automatically deploys the latest `main` branch.

## DNS

Current important Squarespace DNS records:

| Type | Name | Value | Purpose |
| --- | --- | --- | --- |
| `A` | `@` | `216.198.79.1` | Vercel apex domain |
| `CNAME` | `www` | `611f45829396964e.vercel-dns-017.com` | Vercel www redirect |
| `CNAME` | `app` | `wigm85c2.up.railway.app` | Railway product app |
| `TXT` | `_railway-verify.app` | `railway-verify=...` | Railway app domain verification |

Do not click Squarespace `Update DNS records` without checking the records first. It can restore Squarespace defaults and route the public site back to an old expired Squarespace website.

## Design notes

- Visual style should match the Smart 3D QR dashboard: clean white/pale-blue surfaces, restrained borders, soft shadows, and the primary blue `#1f66d1`.
- Hero image: `public/assets/smart-3d-qr-hero-ar-final.png`.
- Smart 3D Scan app logo: `public/assets/smart-3d-scan-ios-logo.png`.
- App Store badge: `public/assets/download-on-the-app-store.png`.
- App Store QR: `public/assets/smart-3d-scan-app-store-qr.png`.
- Closed beta user guide pages: `public/assets/user-guide/Onboarding-*.png`.
- Closed beta downloadable PDF: `public/assets/smart-3d-qr-closed-beta-user-guide.pdf`.

## CTA policy

The landing explains the product and sends users into the product app:

- `Sign in` -> `https://app.smart3dscan.net/login`
- `Join closed beta` -> `https://app.smart3dscan.net/signup`
- `View User Guide` opens the on-page modal carousel.
- `Download guide` downloads the closed beta PDF guide.

QR codes, Viewer links, Embed links, and AR flows belong to `https://app.smart3dscan.net`, not to the landing domain.
