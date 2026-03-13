# rongwrong.eu

Website for **rongwrong** — a Polish experimental ambient group active since the early 1990s, rooted in Lublin's underground scene.

🔗 **[rongwrong.eu](https://rongwrong.eu)**

## About

A single-page bilingual (PL/EN) website featuring the group's event history, discography, and contact information. Built with a dark, industrial aesthetic reflecting the project's sonic identity.

## Tech Stack

- **HTML** + **Tailwind CSS** (CDN)
- **Vanilla JavaScript** — carousel, language toggle, dynamic content rendering
- **Netlify** — hosting, SSL, form handling (`data-netlify` attribute)
- **OVH** — domain DNS management
- **ImprovMX** — email forwarding

## Features

- Bilingual PL/EN toggle with `localStorage` preference
- Responsive dark UI with grain texture and crimson accents
- Project carousel with tabbed filtering (Events / Albums)
- Dynamic detail panels with image galleries
- Netlify Forms–powered contact form
- Smooth scroll navigation with scroll-reactive navbar

## Structure

```
rongwrong/
├── index.html          # Main HTML file
├── js/
│   └── main.js         # Project data, carousel, language logic
├── img/
│   ├── hero-bg.jpg
│   ├── events/         # Event thumbnails + gallery images
│   └── albums/         # Album artwork
└── README.md
```

## What It Does

The site serves as a central archive and contact point for the group. Visitors can browse through years of live performances — from the 2016 Audiopolis festival in Madrid to the 2024 Temple of Silence — and explore the discography, including releases like *Epiphany* (1993), *Krwy* (2014), and the upcoming *Homunkulus Pojawa* (2026). A language toggle switches all content between Polish and English, and a contact form allows direct inquiries.

## Setup

1. Clone the repo
2. Add images to `img/`
3. Deploy to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.)

## License

© rongwrong. All rights reserved.
