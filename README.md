# kyrix.top

Kyrix brand site (Astro + AstroWind theme), hosted on GitHub Pages.

- Dev: `npm install && npm run dev` (Node 22+)
- Add an app privacy policy: create `src/pages/privacy/<slug>.md` (copy `kyrixpill.md`) and add it to the list in `src/pages/privacy/index.astro`, `src/pages/index.astro` and `src/navigation.ts`.
- Deploys automatically on push to `main` (see `.github/workflows/deploy.yaml`).
- Theme: AstroWind (MIT), see LICENSE.md.
