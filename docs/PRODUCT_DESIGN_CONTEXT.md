# Smart 3D QR — Product Design Context

Last updated: 2026-06-29

This document is the shared Product Design context for Smart 3D QR Cloud Platform, the public landing site, and the related Smart 3D Scan iOS app journey.

Use it as the starting point for future UX/UI, product, onboarding, landing-page, dashboard, and beta-testing decisions.

## Product in one sentence

Smart 3D QR turns real-world products into shareable 3D experiences: scan on iPhone, upload the model, generate a permanent QR/viewer link, and let customers open AR, web preview, or embed the model on a website.

## Product ecosystem

- **Smart 3D Scan iOS app**: primary tool for creating 3D models on iPhone.
- **Smart 3D QR Cloud Platform**: dashboard for uploading, managing, previewing, sharing, and embedding 3D scans.
- **Public Viewer**: customer-facing page opened from QR/link/embed; must not require login.
- **Landing site**: public marketing and education entry point at `https://smart3dscan.net`.
- **Dashboard**: product app at `https://app.smart3dscan.net`.

## Core user journey

Scan 3D → Upload → QR → Viewer → AR/Web Preview → Embed/share

The product should make this path feel simple, stable, and trustworthy.

## Primary users

### Early closed-beta users

- Small businesses exploring 3D/AR product presentation.
- Retail/e-commerce operators.
- 3D creators and agencies.
- Internal/friendly testers who can provide detailed feedback.

### Future production users

- Teams that need reusable 3D product assets.
- Companies that want one permanent QR/viewer link per product.
- Operators who are not necessarily technical and should not need to understand infrastructure.

## Main value proposition

One stable destination for every 3D product:

- Permanent QR code.
- Public Viewer link.
- iOS AR via USDZ.
- Browser-based 3D preview via GLB.
- Website embed.
- Ability to update/add formats without changing the QR.

## UX principles

1. **Clarity before feature depth**
   Explain what happens next at every step. Avoid assuming users understand 3D file formats.

2. **One path, many outputs**
   The interface should reinforce the same journey: upload once, then use QR, viewer, AR, web preview, and embed.

3. **Viewer is public**
   Make it clear that customers do not need a dashboard account to open the Viewer.

4. **Format language must be friendly**
   Always explain:
   - USDZ = iPhone/iPad AR
   - GLB = browser/web preview

5. **Stable QR is the product promise**
   Avoid interactions that make users worry their QR will change. Updating files should feel safe.

6. **Beta should feel guided**
   Closed-beta users need a short path, visible help, and a downloadable/viewable guide.

7. **Responsive by default**
   The dashboard and landing site should work cleanly on 13-inch laptops and phones.

## Current landing-site positioning

Primary headline:

> Turn real products into shareable 3D experiences.

Supporting text:

> Scan with the Smart 3D Scan iOS app. Publish once. Let anyone open the product in AR, explore it on the web, or embed it on a store page.

Primary CTA:

> Join closed beta

Secondary CTA:

> See the workflow

User education CTA:

> View User Guide

## Current onboarding assets

Closed beta onboarding visuals are available as a modal carousel on the landing site, with a downloadable PDF.

Landing repo asset locations:

- Individual pages: `public/assets/user-guide/Onboarding-1.png` … `Onboarding-8.png`
- PDF: `public/assets/smart-3d-qr-closed-beta-user-guide.pdf`

UX rule:

- The landing page should offer “View User Guide” for quick browsing.
- The modal should include “Download guide” for offline sharing.

## Current dashboard decisions

- Admin navigation starts with **Users**, then **Scans**, then **Branding**.
- Admin Users page includes basic KPI cards:
  - total users
  - active
  - pending
  - without scans
  - total scans
- Admin can delete users.
- User registration uses email confirmation.
- Dashboard default tab for admin should be Users.
- Upload flow supports USDZ and GLB.
- Public Viewer should work without login.

## Closed beta testing approach

Run beta in controlled waves:

1. **Wave 1: 3–5 friendly testers**
   Focus on obvious UX issues, registration, upload, Viewer, AR, QR, and wording.

2. **Wave 2: 8–15 target users**
   Reduce manual help. Test whether the product explains itself.

3. **Wave 3: 20–30 users**
   Watch repeat usage, sharing behavior, and real-world business fit.

Primary beta success criterion:

> A user can create a real 3D scan, upload it, get a QR/viewer, open AR/web preview, and understand how to use it in their business without direct help.

## What to watch during beta

- Did the user understand the relationship between Smart 3D Scan iOS app and Smart 3D QR Cloud Platform?
- Did the user understand USDZ vs GLB?
- Did the user know what to do after upload?
- Did the Viewer feel like a public/customer-facing page?
- Did the QR concept feel stable and trustworthy?
- Did the user try to share, embed, or send the Viewer link?
- Where did the user hesitate?

## Recommended beta feedback questions

- What did you expect to happen after uploading the model?
- Was it clear why USDZ and GLB both exist?
- Was it clear that the Viewer can be opened without login?
- Where did you stop or feel uncertain?
- Would you send the QR/link/embed to a customer?
- What real product or business scenario would you use this for?
- What would need to improve before you use this regularly?

## Visual direction

The product should feel:

- clean
- trustworthy
- practical
- light
- modern
- Apple-friendly
- useful for real product workflows, not just technical demos

Preferred visual language:

- soft blue/white palette
- clear cards
- product workflow diagrams
- iPhone/AR visuals
- QR as a stable connector
- minimal visual noise

Avoid:

- over-technical 3D jargon
- dark or heavy crypto/Web3-like aesthetics
- unclear abstract 3D visuals that do not explain the product
- hiding important actions behind icons only

## Domain and deployment context

- Marketing site: `https://smart3dscan.net`
- App/dashboard: `https://app.smart3dscan.net`
- Landing hosting: Vercel
- Dashboard hosting: Railway
- Domain registrar/DNS management: Squarespace

## Future product-design work should start here

Before changing major UX, landing sections, dashboard flows, onboarding, or beta messaging:

1. Read this document.
2. Check whether the change supports the core journey.
3. Preserve the product promise: stable QR/viewer from a real 3D scan.
4. Prefer small clear improvements over adding complexity.

