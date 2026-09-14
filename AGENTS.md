# AGENTS.md — nandadevi-ui

## Overview
Frontend that renders published event websites served by the `nandadevi`
backend. This is the visitor-facing view of a live event site.

## Rules
- Use only open source third-party libraries obtained from trusted, reputable sources.

## Tech stack
- React 18 SPA + TypeScript, built with Vite 5
- Styling: Tailwind CSS + PostCSS

## Run / build / test
```bash
npm install
npm run dev        # dev server on http://localhost:5174
npm run build      # tsc -b && vite build -> dist/
npm run preview    # preview a production build
```

## Local API access
Vite proxies `/api/*` to the `nandadevi` backend at `http://localhost:8081`
(configured in `vite.config.ts`).

## Conventions
- Keep it accessibility compliant.
- Call the backend through the `/api` proxy rather than hardcoding hosts.
- Runs on port 5174 (kailash-ui uses 5173), so both UIs can run together.
