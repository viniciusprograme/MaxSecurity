# MaxSecurity Portal de Segurança Digital

> **Production‑ready MVP** for SEST SENAT internal security awareness.

## Overview
A modern, responsive web portal built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, **Shadcn UI**, and **Firebase** (Auth, Firestore, Cloud Functions, Hosting). Features include:
- Educational articles (20+ real security topics)
- Interactive security tools (30+ client‑side utilities)
- FAQ & security tips
- User authentication & admin area
- Dashboard with usage statistics
- Quiz & mini‑courses
- Search, SEO, accessibility, PWA support
- CI/CD via GitHub Actions and one‑click Firebase deploy

## Getting Started
```bash
# Clone the repo (already added as remote)
npm install
npm run dev   # Local dev server at http://localhost:3000
```

## Deployment
```bash
# Deploy to Firebase Hosting (default sub‑domain portal‑sestsenat.web.app)
firebase deploy
```

## Scripts
- `dev` – Run dev server
- `build` – Build for production
- `lint` – ESLint + Prettier
- `test` – (placeholder) unit tests

## Contributing
Please follow the guidelines in `CONTRIBUTING.md`. Use the pre‑commit hooks (Husky) for linting and formatting.

## License
MIT © 2024‑2026 MaxSecurity Team
