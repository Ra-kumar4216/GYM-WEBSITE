# HEX Gym — Fitness Landing Page

A responsive landing page for a fitness gym, built with plain HTML, CSS, and JavaScript. No frameworks, no build tools — just a single page designed to look and feel like a real gym's website.

🔗 **Live site:** [hex-gym-website.vercel.app](https://hex-gym-website.vercel.app/)

## What's on the page

- A full-screen hero section with a background image and a clear call-to-action button
- A stats bar right under the hero showing member count, years running, number of trainers, and gym hours
- A facilities section with photos and short descriptions of the equipment and training spaces
- Trainer profile cards with names, specialties, and short bios
- Three membership plans (Starter, FitPro, Elite), with the middle plan visually highlighted as "Most Popular"
- Member testimonials with names and join dates
- An opening hours table and a location/address block
- An FAQ section that expands and collapses one answer at a time
- A contact form and a separate login modal for existing members

## Functions in script.js

- **Sticky navbar on scroll** — the header background gets darker and gets a shadow once the user scrolls past 50px, so it stands out from the page content
- **Smooth scroll navigation** — clicking any of the nav links scrolls smoothly to that section instead of jumping instantly, with an offset so the sticky header doesn't cover the section title
- **Scroll-triggered animations** — facility cards, trainer cards, and testimonial cards start hidden and slide up into view as the user scrolls down to them, using an `IntersectionObserver`
- **`toggleModal()`** — opens and closes the member login popup when the "Log In" button is clicked
- **Contact form handler** — captures the name, email, phone, and message from the form, saves it to `localStorage` so the submission isn't lost, logs it to the console, and shows a confirmation alert before clearing the form
- **FAQ accordion** — clicking a question opens its answer and closes any other one that was open, so only one answer is visible at a time

## How it's built

- **`index.html`** — page structure: navbar, hero, stats, facilities, trainers, plans, testimonials, hours/location, FAQ, contact form, and login modal
- **`style.css`** — dark theme with a red accent color, card-based layouts for facilities/trainers/plans/testimonials, and responsive breakpoints for mobile
- **`script.js`** — all the interactive behavior described above

## Tech Stack

`HTML5` `CSS3` `JavaScript (Vanilla)` `IntersectionObserver API` `localStorage API`

## Running it locally

```bash
git clone https://github.com/Ra-kumar4216/GYM-WEBSITE.git
cd "GYM-WEBSITE/Gym Website"
```

Open `index.html` in your browser. No dependencies, no setup needed.


---

Built by [Ratan Kumar](https://github.com/Ra-kumar4216) · [Portfolio](https://ratankumar-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/ratan-kumar-metha/)
