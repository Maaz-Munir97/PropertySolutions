# Click&Get Solution — Concept Website

A multi-page marketing site for a fictional Australian property management agency. It features cinematic scroll-driven animation, a filterable portfolio of case studies and a clean, typed component architecture.

> **Note:** Click&Get Solution is a fictional business made for this portfolio project. The company name, phone number, email address, statistics, case studies and testimonials are all invented. Photos come from [Unsplash](https://unsplash.com/license).

## Highlights

- **Next.js App Router** with statically generated case-study pages (`/portfolio/[slug]` via `generateStaticParams`).
- **Scroll-driven motion** built with [Motion](https://motion.dev):
  - A parallax hero
  - A pinned horizontal gallery driven by vertical scroll, with a progress bar
  - A process timeline that draws itself as you scroll
  - Word-by-word headline reveals
- **Interactive sections:**
  - A services list with hover-linked image previews
  - A testimonial carousel that plays automatically and pauses on hover
  - Shared-layout filter pills on the portfolio
- **Custom image loader** that sends photos straight to the Unsplash CDN at the right size, skipping the Next.js image optimiser.
- **Enquiry form** with floating labels and loading, success and error states. Set an environment variable to send real submissions to any form endpoint, such as Formspree; without it, the form runs in demo mode.
- **Accessibility:** respects `prefers-reduced-motion`, uses semantic landmarks, ARIA tabs and live regions, and shows visible focus styles.
- **Content kept apart from the UI:** all copy and data live in typed modules under `src/data`.

## Tech stack

| Area      | Tools                                                   |
| --------- | ------------------------------------------------------- |
| Framework | Next.js 16 (App Router), React 19                       |
| Language  | TypeScript (strict)                                     |
| Styling   | Tailwind CSS v4 with a custom `@theme` design token set |
| Animation | Motion, Lenis (smooth scrolling)                        |
| Icons     | Lucide                                                  |

## Project structure

```
src/
├── app/                  # Routes, root layout, global styles, favicon
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   │   └── [slug]/       # Statically generated case studies
│   └── services/
├── components/
│   ├── about/            # Story and values sections
│   ├── contact/          # Enquiry form, form fields, contact details
│   ├── home/             # Home page sections (hero, services, featured work…)
│   ├── layout/           # Header, desktop & mobile navigation, footer, logo
│   ├── portfolio/        # Grid, filters, project card and case-study sections
│   ├── providers/        # Smooth scrolling
│   ├── services/         # Service detail section
│   └── ui/               # Reusable primitives (Button, Reveal, SplitText…)
├── data/                 # Site content: company info, services, projects…
├── hooks/                # Reusable React hooks
├── lib/                  # Motion presets, image loader, form submission
└── types/                # Shared content types
```

## Getting started

```bash
npm install
cp .env.example .env.local   # optional
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start the development server      |
| `npm run build`     | Create a production build         |
| `npm run start`     | Serve the production build        |
| `npm run typecheck` | Run the TypeScript compiler check |

### Environment variables

| Variable                    | Required | Description                                                                    |
| --------------------------- | -------- | ------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`      | No       | The site's public URL, used for metadata and social sharing previews.           |
| `NEXT_PUBLIC_FORM_ENDPOINT` | No       | A form endpoint (e.g. Formspree) for enquiries. If unset, the form runs in demo mode. |

## Deployment

The site works on Vercel without any configuration. Import the repository, add the optional environment variables, and deploy.
