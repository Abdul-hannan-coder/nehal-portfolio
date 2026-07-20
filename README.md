# Nehal Ahmed K — Portfolio (Next.js + TypeScript + Tailwind)

A faithful conversion of the original design-tool export into a Next.js App Router project
written in **TypeScript** and styled with **Tailwind CSS**. Every page, section, color and
piece of copy from the original is preserved, with upgraded typography, richer motion, and
optimized images.

- **Typography** — [Sora](https://fonts.google.com/specimen/Sora) for headings, [Inter](https://fonts.google.com/specimen/Inter)
  for body (true italics for the gold accent words), loaded via `next/font`.
- **Motion** — page fade-in on navigation, scroll-reveal per section (fail-safe, JS-driven),
  hover-lift cards, image zoom-on-hover, animated nav underlines, floating hero badges,
  pause-on-hover marquees. All respect `prefers-reduced-motion`.
- **Images** — served through `next/image` (`<ImageSlot>`) for automatic optimization.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production
```

## Pages

| Route              | Source design            |
| ------------------ | ------------------------ |
| `/`                | `Home.dc.html`           |
| `/services`        | `Services.dc.html`       |
| `/projects`        | `Projects.dc.html`       |
| `/project-details` | `Project Details.dc.html`|
| `/testimonials`    | `Testimonials.dc.html`   |

## Structure

- `app/` — one route per page, plus `layout.tsx` (fonts), `template.tsx` (route transition)
  and `globals.css`.
- `components/` — shared building blocks (`Header`, `Footer`, `Marquee`, `ContactSection`,
  `CreateProject`, `LetsConnect`, `Copyright`, `PageTitle`, `ImageSlot`, `ClientEnhance`).
- `lib/data.ts` — all content (services, projects, pricing, testimonials, FAQs, …), typed,
  lifted verbatim from the original `renderVals()` blocks.
- `public/portrait.webp` — the real hero/about portrait (the only image the original had
  customized). All other images use the same `picsum.photos` placeholders as the design.

## Notes on fidelity

- **Scroll reveal + card hover** — the original's `_omEnhance()` behaviour is reproduced in
  `components/ClientEnhance.tsx` (IntersectionObserver reveal + `.om-card` lift), rewritten
  to be fail-safe so content can never get stuck invisible.
- **Marquees** — the keyword ribbon is `components/Marquee.tsx`.
- **`<image-slot>`** — replaced by `components/ImageSlot.tsx` (`next/image`, cover-fit).
