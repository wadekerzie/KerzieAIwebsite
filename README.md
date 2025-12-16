# Kerzie AI — Landing Page

High-end, single-page landing site for **Kerzie AI** (Applied AI + intelligent automation).

## Run locally

### Option A: open directly

- Open `index.html` in your browser.

### Option B: serve locally (recommended)

Some browsers restrict certain features when opening files directly. A tiny local server avoids that.

**PowerShell (Python installed):**

```powershell
python -m http.server 5173
```

Then visit `http://localhost:5173`.

## Deploy to Vercel

This is a static site (HTML/CSS/JS). You can deploy it on Vercel without a build step.

- Import the repo in Vercel
- Framework preset: **Other**
- Build command: **none**
- Output directory: **.** (project root)

Config lives in `vercel.json`.

## Customize

- **Brand email**: update `hello@kerzie.ai` in `index.html` and `main.js`
- **Social preview image**: `assets/og.svg` (1200×630)
- **Colors / theme**: `styles.css` (`:root` variables at the top)

## Files

- `index.html` — page structure + copy
- `styles.css` — styling + responsive layout
- `main.js` — scroll reveal, mobile menu, form UX
- `assets/` — favicon + textures + OG image


