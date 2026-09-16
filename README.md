# Simply Scalable Inc. public website

A small, static React + TypeScript website for Simply Scalable Inc. It is built with Vite and can be deployed without a backend, database, or API.

## Local development

Requirements: Node.js 24 or newer and npm.

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite. For a production-like local check:

```powershell
npm run build
npm run preview
```

Other available checks:

```powershell
npm run lint
```

## Project structure

- `src/App.tsx` — semantic page structure and content
- `src/index.css` — responsive visual system and component styling
- `public/favicon.svg` — site favicon
- `.github/workflows/deploy.yml` — GitHub Pages build and deployment workflow
- `vite.config.ts` — Vite configuration; the site is built with a root-relative base for custom-domain readiness

## GitHub Pages deployment

1. Create a new GitHub repository for this project. A repository name such as `simply-scalable-site` works well.
2. Push the contents of this directory to the repository's `main` branch.
3. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main` (or run the **Deploy Simply Scalable site** workflow manually). The workflow installs dependencies, runs the production build, and publishes `dist` to GitHub Pages.
5. Visit the Pages URL shown in the repository's Pages settings and verify the site before changing the company's domain.

The Vite `base` is `/`, which is correct when using the eventual custom domain `https://simplyscalableinc.com`. If you first publish only as a repository/project Pages site without a custom domain, either enable a custom domain in Pages or change `base` in `vite.config.ts` to `/<repository-name>/` for that interim URL.

When ready to use `https://simplyscalableinc.com`, add a `public/CNAME` file containing exactly:

```text
simplyscalableinc.com
```

Then configure the custom domain in GitHub Pages and update DNS separately. This project does not make any DNS changes and does not modify the existing domain.
