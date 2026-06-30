# HEX Gym — Fitness Landing Page

A responsive gym landing page built during my web development internship at HexSoftwares. Started as a basic facilities-and-pricing page and grew into something closer to a real business site — trainer profiles, member testimonials, an FAQ section, and a working contact form that actually stores the leads instead of just showing an alert and forgetting about it.

🔗 **Live site:** [hex-gym-website.vercel.app](https://hex-gym-website.vercel.app/)

## What's on the page

- A hero section with a clear call-to-action and a dark, high-contrast look that fits a fitness brand better than a generic light theme would
- A quick stats bar (members, years running, trainers, hours) right under the hero, because numbers build trust faster than paragraphs do
- Facilities grid with real gym photography
- Trainer cards with names, specialties, and short bios instead of just a stock "our coaches" blurb
- Three membership tiers with the middle one visually highlighted, since that's the one most gyms actually want you to pick
- Member testimonials with names and join dates
- Opening hours and a location block
- An FAQ accordion that only keeps one answer open at a time
- A contact form and a login modal — the form submission gets logged to the console and saved to `localStorage`, so there's something to actually inspect if you open dev tools

## Why I built it this way

I didn't want this to be a single hero-plus-three-cards template, which is what most beginner gym site tutorials end up looking like. Adding the trainers and testimonials sections specifically was about making the page feel like it belonged to an actual gym with actual people, not a placeholder. The FAQ accordion was also a deliberate choice to add a bit of interactivity beyond scroll animations — felt like a more honest test of vanilla JS than another fade-in effect.

## Tech Stack

`HTML5` `CSS3` `JavaScript` — no frameworks, no build tools. Three files: `index.html`, `style.css`, `script.js`, all inside the `Gym Website` folder.

## Running it locally

```bash
git clone https://github.com/Ra-kumar4216/GYM-WEBSITE.git
cd "GYM-WEBSITE/Gym Website"
```

Open `index.html` in your browser. No npm install, no dependencies to wait on.

Built by [Ratan Kumar](https://github.com/Ra-kumar4216) · [Portfolio](https://ratankumar-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/ratan-kumar-metha/)
