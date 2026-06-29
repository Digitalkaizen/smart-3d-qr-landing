# Smart 3D QR — Codex Handoff

Last updated: 2026-06-29

Canonical local handoff path:

```text
/Users/dmitrysergeenko/Documents/Codex/2026-06-19/railway-start-migrate-deploy-prisma/work/HANDOFF.md
```

This repo copy exists so the handoff is versioned with the landing project. If the local canonical handoff and this file differ, update both.

## What this project is

Smart 3D QR is a two-part product ecosystem:

- **Smart 3D Scan iOS app**: creates 3D models on iPhone.
- **Smart 3D QR Cloud Platform**: uploads, manages, previews, shares, and embeds 3D models through stable QR/viewer links.

Core journey:

Scan 3D → Upload → QR → Viewer → AR/Web Preview → Embed/share

Main product promise:

> One stable QR/viewer destination for every real 3D product.

## Repositories

```text
work/smart-3d-qr-platform
```

Production dashboard/app. React/Vite frontend, Express server, Prisma/PostgreSQL, Railway deployment.

```text
work/smart-3d-qr-landing
```

Marketing landing site. React/Vite static site, Vercel deployment.

## Domains and deployments

- Landing: `https://smart3dscan.net`
- Landing redirect: `https://www.smart3dscan.net` → `https://smart3dscan.net`
- App/dashboard: `https://app.smart3dscan.net`
- Landing hosting: Vercel
- App/dashboard hosting: Railway
- Database: Railway Postgres
- DNS/registrar: Squarespace Domains

Do not restore Squarespace default website records for `@` or `www`.

## Landing-specific state

- Landing is live at `https://smart3dscan.net`.
- The landing uses the approved iPhone/AR/QR hero visual.
- Smart 3D Scan iOS app is positioned as the capture tool.
- Smart 3D QR Cloud Platform is positioned as the publishing/distribution layer.
- Closed beta onboarding is available as `View User Guide` modal carousel and PDF download.
- Generated `dist/` and local `.npm-cache/` should not be committed.

## Read before landing work

```text
AGENTS.md
README.md
docs/PRODUCT_DESIGN_CONTEXT.md
docs/HANDOFF.md
```

## Safe landing commands

```bash
cd "/Users/dmitrysergeenko/Documents/Codex/2026-06-19/railway-start-migrate-deploy-prisma/work/smart-3d-qr-landing"
npm run build
git status --short
```

## Do not break

- Do not commit `dist/`, `.npm-cache/`, `.DS_Store`, or `node_modules/`.
- Do not remove User Guide assets without replacing the UX.
- Do not point landing CTAs away from `https://app.smart3dscan.net` unless the product decision changes.
- Do not change the `www` → apex domain redirect decision without asking.

