# Alishia Marie Allred — Landing Page

A static Next.js landing page for Alishia Marie Allred, an Investment Adviser and Broker regulated by FINRA and registered with EDWARD JONES.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Heroicons, React Icons
- **Widgets:** TradingView widgets, Mapbox (via react-map-gl)
- **Image Optimization:** sharp + next-image-export-optimizer

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_MAPBOX_TOKEN=       # Required for the location map
NEXT_PUBLIC_SITE_URL=           # Used for canonical/OG URLs
```

Without `NEXT_PUBLIC_MAPBOX_TOKEN`, the map renders a neutral placeholder.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Serve

Generate a fully static site in `./out`:

```bash
npm run build
```

Preview the exported build locally:

```bash
npm run serve
```

## Project Structure

```
app/                    # Next.js App Router pages and layout
src/components/         # React components
  landing-layout/       # Shared landing page layout
  landing-pages-main/   # Page sections (Hero, Services, Location, etc.)
public/                 # Static assets and images
out/                    # Exported static site (generated)
```

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build and optimize the static export
- `npm run start` — Start the Next.js production server
- `npm run serve` — Serve the exported `./out` directory
- `npm run lint` — Run ESLint

## Notes

- The project is configured for static export (`output: 'export'`).
- `trailingSlash: true` produces clean `/<route>/index.html` paths for static hosts.
