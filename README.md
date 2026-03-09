# Starter - Modern Landing Page for React Developers

> The easiest way to build a React landing page in seconds. Perfect for developers who want to ship faster.

## 🚀 Live Demo

[Starter Demo](https://starter.dev) - Coming soon!

## 📸 Screenshots

Add your screenshots here:

- `public/images/screenshot-home.png` - Homepage
- `public/images/screenshot-about.png` - About page
- `public/images/screenshot-pricing.png` - Pricing page

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **AOS** (Animate On Scroll)
- **JavaScript**

## 📁 File Structure

```
first-next/
├── app/
│   ├── layout.js                 # Root layout with Navbar & Footer
│   ├── page.js                  # Home/Landing page
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.js              # About page with team, timeline, values
│   ├── blog/
│   │   └── page.js              # Blog page with posts & categories
│   ├── contact/
│   │   └── page.js              # Contact form with validation
│   ├── docs/
│   │   ├── page.js              # Documentation main page
│   │   └── [slug]/
│   │       └── page.js          # Dynamic doc pages
│   ├── features/
│   │   └── page.js              # Features showcase
│   └── pricing/
│       └── page.js              # Pricing plans & FAQ
├── components/
│   ├── AOSProvider.js           # AOS animation provider
│   ├── layout/
│   │   ├── Footer.js            # Site footer
│   │   └── Navbar.js            # Responsive navigation
│   ├── ui/
│   │   ├── Button.js            # Reusable button component
│   │   ├── Card.js              # Reusable card component
│   │   └── SectionHeading.js    # Section heading with AOS
│   └── ...                      # Original components
│       ├── CTA.js
│       ├── Footer.js
│       ├── hero.js
│       ├── navbar.js
│       └── Title.js
├── lib/
│   └── aos-init.ts              # AOS initialization helper
├── public/
│   ├── images/                   # Image assets
│   ├── Icons/                   # Social media icons
│   ├── Feature1.svg
│   ├── Feature2.svg
│   ├── Feature3.svg
│   └── main-logo.svg
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

## 📄 Pages

| Page     | Route       | Description                               |
| -------- | ----------- | ----------------------------------------- |
| Home     | `/`         | Landing page with hero, features, and CTA |
| About    | `/about`    | Team section, company timeline, values    |
| Docs     | `/docs`     | Documentation with sidebar navigation     |
| Pricing  | `/pricing`  | 3-tier pricing, comparison table, FAQ     |
| Contact  | `/contact`  | Contact form with validation              |
| Blog     | `/blog`     | Blog posts with category filter           |
| Features | `/features` | Feature grid, how it works, comparison    |

## ⚡ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo
cd your-repo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 AOS Animations

This project uses [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) library for scroll animations.

### Configuration

AOS is configured in [`components/AOSProvider.js`](components/AOSProvider.js):

```javascript
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});
```

### Animation Types

| Element           | Animation            | Attributes                                |
| ----------------- | -------------------- | ----------------------------------------- |
| Section headings  | fade-up              | `data-aos="fade-up"`                      |
| Cards (staggered) | fade-up              | `data-aos="fade-up" data-aos-delay="100"` |
| Images            | fade-right/fade-left | `data-aos="fade-right"`                   |
| CTA sections      | zoom-in              | `data-aos="zoom-in"`                      |
| Stats counters    | flip-up              | `data-aos="flip-up"`                      |
| Feature icons     | zoom-in-up           | `data-aos="zoom-in-up"`                   |

### Rules

- Never animate the navbar or footer
- Keep delays under 400ms per section
- Use `once: true` so animations don't repeat
- Every section must have at least one AOS-animated element

## 🚀 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📝 License

MIT License - feel free to use this project for any purpose.

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [AOS](https://michalsnik.github.io/aos/)
- Powered by ♥ by [CreativeDesignsGuru](https://example.com)
