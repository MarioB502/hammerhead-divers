# Hammerhead Divers Astro Site

Static Astro website for Hammerhead Divers.

## Commands

```bash
npm install
npm run dev
npm run build
```

The production output is generated in `dist/`. Upload the contents of `dist/` to HostGator `public_html`.

## Content Model

- Tours: `src/data/tours.ts`
- Site copy and navigation: `src/data/site.ts`
- Blog posts: `src/content/blog/*.md`

## Booking Flow

Reservations and payments remain in WeTravel. Each tour has a `bookingUrl` and WhatsApp CTA.
