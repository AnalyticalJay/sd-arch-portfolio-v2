# OpenV Group Design System Reference

## Introduction
This document serves as the single source of truth for the OpenV Group website's design system. It outlines the core principles, design tokens, and reusable components to ensure consistency, scalability, and a premium enterprise aesthetic across all pages. Every element is crafted to align with the project's philosophy: **Minimal, Elegant, Enterprise, Technology-driven, Professional, Modern, Highly Responsive, with Large Spacing, Excellent Typography, Smooth Animations, and Excellent Readability.**

## Core Principles

### Consistency
Every page and component must adhere to the established design language. The homepage serves as the master design reference.

### Scalability
Components are built to be reusable and modular, facilitating efficient development and future expansion without compromising quality.

### Performance
Optimized for speed and efficiency, targeting a Lighthouse score of 95+ across all metrics.

### Accessibility
Designed with inclusive practices, ensuring the website is usable by everyone, regardless of ability.

### Visual Hierarchy
Clear and intentional arrangement of elements to guide the user's eye and emphasize important information.

## Design Tokens
Design tokens are the visual atoms of the design system, representing styling values such as colors, fonts, and spacing. They are defined in `tailwind.config.js` and `src/css/main.css` as CSS variables for easy management and consistency.

### Color Palette
Our color palette is carefully selected to convey a premium, technology-driven brand identity. All colors are available as CSS variables and Tailwind CSS classes.

| Name             | Hex Code    | CSS Variable             | Tailwind Class           |
| :--------------- | :---------- | :----------------------- | :----------------------- |
| Dark Navy        | `#07111C`   | `--color-navy`           | `bg-navy`, `text-navy`   |
| Dark Blue        | `#0F1E33`   | `--color-navy-medium`    | `bg-navy-medium`         |
| Primary Green    | `#13C46B`   | `--color-primary-green`  | `bg-primary-green`       |
| Accent Blue      | `#1B8EFF`   | `--color-accent-blue`    | `text-accent-blue`       |
| Light Background | `#F8FAFC`   | `--color-light-bg`       | `bg-light`               |
| White            | `#FFFFFF`   | `--color-white`          | `text-white`             |
| Body Text        | `#64748B`   | `--color-body-text`      | `text-body`              |
| Borders          | `#E5E7EB`   | `--color-border`         | `border-border`          |

**Semantic Color Aliases (CSS Variables Only):**
- `--color-background`: `var(--color-white)`
- `--color-surface`: `var(--color-navy)`
- `--color-surface-alt`: `var(--color-navy-medium)`
- `--color-text-primary`: `var(--color-navy)`
- `--color-text-secondary`: `var(--color-body-text)`
- `--color-text-muted`: `rgba(255, 255, 255, 0.6)`
- `--color-text-light`: `rgba(255, 255, 255, 0.4)`

### Typography
We utilize a premium typography hierarchy with two distinct fonts: Manrope for headings and Inter for body text, ensuring excellent readability and visual impact.

**Primary Font (Headings):** Manrope (`--font-primary`)
**Secondary Font (Body):** Inter (`--font-secondary`)

**Font Sizes (Tailwind Classes):**

| Size      | Manrope (Headings)                               | Inter (Body)                                 |
| :-------- | :----------------------------------------------- | :------------------------------------------- |
| `h1`      | `3.5rem` (56px), `line-height: 1.2`, `800`       | N/A                                          |
| `h2`      | `2.5rem` (40px), `line-height: 1.2`, `700`       | N/A                                          |
| `h3`      | `2rem` (32px), `line-height: 1.3`, `700`         | N/A                                          |
| `h4`      | `1.5rem` (24px), `line-height: 1.4`, `600`       | N/A                                          |
| `h5`      | `1.25rem` (20px), `line-height: 1.5`, `600`      | N/A                                          |
| `h6`      | `1rem` (16px), `line-height: 1.5`, `600`         | N/A                                          |
| `body-lg` | N/A                                              | `1.125rem` (18px), `line-height: 1.75`       |
| `body-md` | N/A                                              | `1rem` (16px), `line-height: 1.625`          |
| `body-sm` | N/A                                              | `0.875rem` (14px), `line-height: 1.5`        |
| `body-xs` | N/A                                              | `0.75rem` (12px), `line-height: 1.4`         |

**Line Heights (CSS Variables Only):**
- `--line-height-tight`: `1.2`
- `--line-height-normal`: `1.5`
- `--line-height-relaxed`: `1.75`

### Spacing System
An 8-point spacing system is strictly enforced for all layout and component spacing, ensuring visual harmony and consistency.

**Spacing Units (Tailwind Classes & CSS Variables):**

| Tailwind Class | Value (rem) | Value (px) | CSS Variable   |
| :------------- | :---------- | :--------- | :------------- |
| `spacing-0`    | `0`         | `0`        | N/A            |
| `spacing-1`    | `0.125rem`  | `2px`      | N/A            |
| `spacing-2`    | `0.25rem`   | `4px`      | `--spacing-xs` |
| `spacing-4`    | `0.5rem`    | `8px`      | `--spacing-sm` |
| `spacing-6`    | `0.75rem`   | `12px`     | N/A            |
| `spacing-8`    | `1rem`      | `16px`     | `--spacing-md` |
| `spacing-12`   | `1.5rem`    | `24px`     | `--spacing-lg` |
| `spacing-16`   | `2rem`      | `32px`     | `--spacing-xl` |
| `spacing-20`   | `2.5rem`    | `40px`     | N/A            |
| `spacing-24`   | `3rem`      | `48px`     | `--spacing-2xl`|
| `spacing-28`   | `3.5rem`    | `56px`     | N/A            |
| `spacing-32`   | `4rem`      | `64px`     | `--spacing-3xl`|
| `spacing-36`   | `4.5rem`    | `72px`     | N/A            |
| `spacing-40`   | `5rem`      | `80px`     | `--spacing-4xl`|
| `spacing-44`   | `5.5rem`    | `88px`     | N/A            |
| `spacing-48`   | `6rem`      | `96px`     | N/A            |
| `spacing-52`   | `6.5rem`    | `104px`    | N/A            |
| `spacing-56`   | `7rem`      | `112px`    | N/A            |
| `spacing-60`   | `7.5rem`    | `120px`    | N/A            |
| `spacing-64`   | `8rem`      | `128px`    | N/A            |
| `spacing-72`   | `9rem`      | `144px`    | N/A            |
| `spacing-80`   | `10rem`     | `160px`    | N/A            |
| `spacing-88`   | `11rem`     | `176px`    | N/A            |
| `spacing-96`   | `12rem`     | `192px`    | N/A            |
| `spacing-104`  | `13rem`     | `208px`    | N/A            |
| `spacing-112`  | `14rem`     | `224px`    | N/A            |
| `spacing-120`  | `15rem`     | `240px`    | N/A            |
| `spacing-128`  | `16rem`     | `256px`    | N/A            |

### Layout

**Maximum Container Width:** `1440px` (`--container-max-width`, `max-w-container`)
**Container Padding:** `24px` (`--container-padding`)

**Responsive Breakpoints (Tailwind Classes):**

| Breakpoint | Minimum Width | Description      |
| :--------- | :------------ | :--------------- |
| `xs`       | `320px`       | Mobile (Small)   |
| `sm`       | `640px`       | Mobile (Large)   |
| `md`       | `768px`       | Tablet           |
| `lg`       | `1024px`      | Laptop           |
| `xl`       | `1280px`      | Desktop          |
| `2xl`      | `1536px`      | Large Desktop    |
| `3xl`      | `1920px`      | Ultra Wide       |

### Transitions & Animations
Animations are smooth, elegant, and subtle, enhancing the user experience without being distracting. GSAP and Lenis are used for high-performance animations.

**Transition Durations (Tailwind Classes & CSS Variables):**

| Tailwind Class   | Value (ms) | CSS Variable       |
| :--------------- | :--------- | :----------------- |
| `duration-200`   | `200ms`    | `--transition-fast`|
| `duration-300`   | `300ms`    | `--transition-base`|
| `duration-500`   | `500ms`    | `--transition-slow`|
| `duration-700`   | `700ms`    | N/A                |
| `duration-1000`  | `1000ms`   | N/A                |

**Transition Timing Functions (Tailwind Classes & CSS Variables):**

| Tailwind Class    | CSS Variable          |
| :---------------- | :-------------------- |
| `ease-in-out`     | `--transition-base`   |
| `ease-out`        | N/A                   |
| `ease-in`         | N/A                   |

**Keyframe Animations (Tailwind Classes):**
- `animate-fade-in`
- `animate-fade-in-up`
- `animate-fade-in-down`
- `animate-slide-in-left`
- `animate-slide-in-right`

### Shadows
Consistent shadow styles for depth and visual separation.

| Tailwind Class | CSS Variable   |
| :------------- | :------------- |
| `shadow-sm`    | `--shadow-sm`  |
| `shadow-md`    | `--shadow-md`  |
| `shadow-lg`    | `--shadow-lg`  |
| `shadow-xl`    | `--shadow-xl`  |
| `shadow-2xl`   | N/A            |
| `shadow-inner` | N/A            |
| `shadow-none`  | N/A            |

### Border Radius
Standardized border-radius values for consistent rounding.

| Tailwind Class | Value      |
| :------------- | :--------- |
| `rounded-none` | `0`        |
| `rounded-sm`   | `0.375rem` |
| `rounded-md`   | `0.5rem`   |
| `rounded-lg`   | `0.75rem`  |
| `rounded-xl`   | `1rem`     |
| `rounded-2xl`  | `1.5rem`   |
| `rounded-full` | `9999px`   |

## Reusable Components

### Navigation
**Description:** The main navigation system, including desktop and mobile menus. Features scroll-triggered effects and accessibility enhancements.
**HTML Structure:**
```html
<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6" role="banner">
    <div class="container-custom flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center" aria-label="OpenV Group Home">
            <img src="/assets/images/logo.svg" alt="OpenV Group Logo" class="h-8 w-auto" loading="eager">
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            <a href="#about" class="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200">ABOUT US</a>
            <!-- ... other links ... -->
        </nav>

        <!-- Desktop CTA & Menu Button -->
        <div class="hidden lg:flex items-center space-x-6">
            <a href="#consultation" class="btn btn-primary px-6 py-2.5 text-sm">BOOK A CONSULTATION</a>
            <button class="text-white hover:text-primary-green transition-colors duration-200" aria-label="Search" aria-expanded="false">
                <!-- Search Icon -->
            </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
            id="mobile-menu-btn" 
            class="lg:hidden text-white hover:text-primary-green transition-colors duration-200" 
            aria-label="Toggle mobile menu"
            aria-expanded="false"
            aria-controls="mobile-menu">
            <!-- Menu Icon -->
        </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <nav 
        id="mobile-menu" 
        class="hidden lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10" 
        aria-label="Mobile Navigation"
        role="navigation">
        <div class="container-custom py-6 space-y-4">
            <a href="#about" class="block text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200 py-2">ABOUT US</a>
            <!-- ... other links ... -->
            <div class="pt-4 border-t border-white/10">
                <a href="#consultation" class="btn btn-primary w-full text-center">BOOK A CONSULTATION</a>
            </div>
        </div>
    </nav>
</header>
```
**JavaScript:** `src/js/modules/navigation.js`

### Footer
**Description:** The website footer, containing company information, quick links, company links, contact details, and legal navigation.
**HTML Structure:**
```html
<footer class="bg-navy py-20 border-t border-white/5" role="contentinfo">
    <div class="container-custom">
        <!-- Footer Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            <!-- Company Info -->
            <div class="lg:col-span-2">
                <img src="/assets/images/logo.svg" alt="OpenV Group Logo" class="h-8 w-auto mb-8" loading="lazy">
                <p class="text-white/40 max-w-sm mb-8 leading-relaxed">Three expert brands. One connected ecosystem. Empowering businesses across South Africa to operate, grow and thrive.</p>
                <!-- Social Links -->
                <nav class="flex space-x-4" aria-label="Social Media">
                    <!-- Social Icon Link -->
                </nav>
            </div>

            <!-- Quick Links -->
            <nav aria-label="Quick Links">
                <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Quick Links</h4>
                <ul class="space-y-4 text-sm text-white/40">
                    <li><a href="#about" class="hover:text-white transition-colors duration-200">About Us</a></li>
                    <!-- ... other links ... -->
                </ul>
            </nav>

            <!-- Our Companies -->
            <nav aria-label="Our Companies">
                <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Our Companies</h4>
                <ul class="space-y-4 text-sm text-white/40">
                    <li><a href="#" class="hover:text-white transition-colors duration-200">Open V Business Solutions</a></li>
                    <!-- ... other links ... -->
                </ul>
            </nav>

            <!-- Contact -->
            <div>
                <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Contact</h4>
                <ul class="space-y-4 text-sm text-white/40">
                    <li>
                        <span class="block font-semibold text-white/60">Gqeberha (Head Office)</span>
                        <a href="tel:+27413790550" class="hover:text-white transition-colors duration-200">041 379 0550</a>
                    </li>
                    <li>
                        <a href="mailto:info@openv.co.za" class="hover:text-white transition-colors duration-200">info@openv.co.za</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 gap-4">
            <p>&copy; 2026 OpenV Group. All rights reserved.</p>
            <nav class="flex space-x-6" aria-label="Legal">
                <a href="#privacy" class="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <!-- ... other links ... -->
            </nav>
        </div>
    </div>
</footer>
```

### Buttons
**Description:** A set of styled buttons for various actions, supporting primary, secondary, outline, and ghost styles, with different sizes.
**CSS Classes:**
- `.btn`: Base button styles (inline-flex, padding, rounded, font, transition, cursor, no text-decoration, user-select, border)
- `.btn-primary`: Primary action button (green background, white text)
- `.btn-secondary`: Secondary action button (dark blue background, white text)
- `.btn-outline`: Outline button (green border, green text, white hover)
- `.btn-ghost`: Ghost button (white text, green hover)
- `.btn-sm`: Small button size
- `.btn-lg`: Large button size

**HTML Example:**
```html
<a href="#" class="btn btn-primary">Primary Button</a>
<button class="btn btn-secondary btn-sm">Secondary Small</button>
<button class="btn btn-outline btn-lg">Outline Large</button>
<a href="#" class="btn btn-ghost">Ghost Button</a>
```

### Cards
**Description:** Reusable card components for displaying content, available in light and dark themes, with interactive hover effects.
**CSS Classes:**
- `.card-base`: Default light-themed card (white background, border, rounded, padding, transition, shadow on hover)
- `.card-dark`: Dark-themed card (navy-medium background, white/10 border, rounded, padding, transition, primary-green border on hover)
- `.card-interactive`: Adds a subtle Y-axis translation on hover for interactive elements.

**HTML Example:**
```html
<div class="card-base">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
</div>

<div class="card-dark card-interactive">
    <h3>Dark Interactive Card</h3>
    <p>Content for dark card.</p>
</div>
```

### Badges & Pills
**Description:** Small, informative labels for categorization or status indication.
**CSS Classes:**
- `.badge`: Base badge styles (inline-flex, padding, rounded-full, text-xs, font-semibold)
- `.badge-primary`: Primary green badge
- `.badge-secondary`: Accent blue badge
- `.badge-dark`: Dark navy badge

**HTML Example:**
```html
<span class="badge">Technology</span>
<span class="badge badge-primary">New</span>
<span class="badge badge-secondary">Beta</span>
<span class="badge badge-dark">Enterprise</span>
```

### Section Headers
**Description:** Standardized header structure for sections, ensuring consistent titling and introductory text.
**CSS Classes:**
- `.section-header`: Container for section heading and description.

**HTML Example:**
```html
<div class="section-header">
    <h2>Our Solutions</h2>
    <p>Discover how OpenV Group empowers businesses with cutting-edge technology solutions.</p>
</div>
```

### Containers
**Description:** Provides consistent maximum width and horizontal padding for content areas.
**CSS Classes:**
- `.container-custom`: Applies `max-width: 1440px`, `mx-auto`, and responsive `px-6 lg:px-12`.

**HTML Example:**
```html
<div class="container-custom">
    <!-- Page content -->
</div>
```

### Dividers
**Description:** Horizontal rule for visual separation.
**CSS Classes:**
- `.divider`: Default border-t with `--color-border`.
- `.divider-light`: Lighter border-t with `border-white/10`.

**HTML Example:**
```html
<hr class="divider">
<div class="divider-light"></div>
```

### Utility Classes

**Flex Utilities:**
- `.flex-center`: `display: flex; align-items: center; justify-content: center;`
- `.flex-between`: `display: flex; align-items: center; justify-content: space-between;`

**Text Utilities:**
- `.text-gradient`: Applies a linear gradient background to text, with `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent`.
- `.text-truncate`: Truncates text with ellipsis.

**Visibility Utilities:**
- `.hidden-mobile`: Hides element on mobile (`hidden` below `md` breakpoint, `block` from `md` up).
- `.hidden-desktop`: Hides element on desktop (`block` below `md` breakpoint, `hidden` from `md` up).

## JavaScript Modules

### `animations.js`
**Description:** Centralized GSAP animation utilities with ScrollTrigger integration. Provides reusable animation patterns like `fadeIn`, `fadeInUp`, `slideInLeft`, `scaleIn`, `staggerFadeIn`, `revealText`, `addHoverScale`, `parallaxScroll`, `animateCounter`, `createTimeline`, `refreshScrollTriggers`, and `killAllAnimations`.
**Location:** `src/js/modules/animations.js`

### `navigation.js`
**Description:** Handles header scroll effects and mobile menu interactions, ensuring a smooth and accessible navigation experience. Includes `initNavigation`, `closeMobileMenu`, and `openMobileMenu`.
**Location:** `src/js/modules/navigation.js`

### `scroll.js`
**Description:** Manages smooth scrolling with Lenis, providing high-performance and accessible scroll functionality. Includes `initScroll`, `getLenisInstance`, `scrollTo`, `scrollToTop`, `pauseScroll`, `resumeScroll`, `destroyScroll`, and `refreshScroll`.
**Location:** `src/js/modules/scroll.js`

## Project Structure

```
openv-website/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── favicon.svg
│   │   │   ├── apple-touch-icon.png
│   │   │   └── logo.svg
├── src/
│   ├── css/
│   │   └── main.css
│   └── js/
│       ├── main.js
│       └── modules/
│           ├── animations.js
│           ├── navigation.js
│           └── scroll.js
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
├── package-lock.json
├── README.md
├── CHANGELOG.md
├── OPENV_GROUP_MASTERPLAN.md
└── DESIGN_SYSTEM.md
```

## Development Guidelines

### Code Quality
- Write production-ready, clean, and well-commented code.
- Maintain modularity in CSS and JavaScript.
- Avoid unnecessary dependencies and hardcoded values.

### Responsive Design
- Design Mobile First.
- Ensure consistent spacing and layout across all defined breakpoints.

### Performance
- Optimize images, use lazy loading, and minify assets.
- Prioritize GPU-accelerated animations (`transform`, `opacity`).
- Monitor Lighthouse scores regularly.

### Accessibility
- Use semantic HTML and ARIA attributes.
- Ensure keyboard navigation and screen reader support.

## Conclusion
This design system provides a robust and flexible foundation for building the OpenV Group website. Adherence to these guidelines will ensure a consistent, high-quality, and performant user experience that reflects the premium nature of the OpenV Group brand.
