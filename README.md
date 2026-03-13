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

## Setup

1. Clone the repo
2. Add images to `img/` (thumbnails: 400×400px, gallery: 800–1200px longest edge)
3. Deploy to Netlify via GitHub integration or drag-and-drop
4. Point your domain's A record to `75.2.60.5` and add a `www` CNAME to your Netlify subdomain

## License

© rongwrong. All rights reserved.
