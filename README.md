# OrthoMitra — Your Orthopedic Guide on WhatsApp

Landing page for OrthoMitra — an AI-powered orthopedic guide for anyone dealing with bone, joint, or muscle problems who doesn't know where to start. Available 24/7 on WhatsApp, in 10+ languages, completely free.

## Project Structure

```
├── index.html          Main landing page
├── css/
│   └── style.css       All styles, mobile-responsive
├── js/
│   └── main.js         WhatsApp links, scroll animations, counters
├── README.md           This file
└── .gitignore
```

## Setup

1. Clone the repository
2. Open `js/main.js` and update the `CONFIG` object with your WhatsApp number:
   ```js
   const CONFIG = {
       whatsappNumber: '919999999999',  // Your number: country code + number
       whatsappMessage: 'Hi! I have an orthopedic issue and need some guidance.',
   };
   ```
3. Open `index.html` in a browser — no build step required.

## Deployment

This is a static site. Deploy to any static hosting:

- **GitHub Pages**: Push to `main` and enable Pages in repo settings
- **Netlify / Vercel**: Connect the repo and deploy
- **Any web server**: Upload all files preserving the folder structure

## Features

- Mobile-responsive design with Inter font
- Scroll-reveal animations (IntersectionObserver)
- Animated number counters
- Floating WhatsApp button with tooltip
- Phone mockup with realistic chat conversation
- Testimonials section with social proof
- All WhatsApp links driven by a single config object
- No frameworks, no dependencies — pure HTML/CSS/JS
