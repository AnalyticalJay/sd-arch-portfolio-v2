# OpenV Group Website

This is the production-ready foundation for the OpenV Group enterprise technology website.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Architecture Highlights
- **Scalable CSS:** Tailwind CSS extended with custom design tokens and a modular CSS architecture in `src/css/main.css`.
- **Smooth Interaction:** Integrated Lenis for smooth scrolling and GSAP for high-end animations.
- **Modular JS:** Vanilla JavaScript modules located in `src/js/modules/` for easy maintenance and scalability.
- **Design System:** Pre-built reusable classes for buttons, cards, and containers following the OpenV Group brand guidelines.

## Project Structure
```
├── src/
│   ├── css/            # Styling & Design Tokens
│   ├── js/             # Modular Logic & Animations
│   ├── assets/         # Project Assets
├── public/             # Static Assets
├── index.html          # Main Entry Point
├── tailwind.config.js  # Tailwind Configuration
└── vite.config.ts      # Vite Configuration
```
