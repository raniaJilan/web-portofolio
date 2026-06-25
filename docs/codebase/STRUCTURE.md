# Structure

## Core Sections (Required)

### Top-Level Layout

```
web-portofolio/
├── index.html              # SPA HTML shell, meta tags, og:image
├── package.json            # Dependencies and scripts (dev, build, lint, preview)
├── vite.config.js          # Vite config with React + Tailwind plugins
├── eslint.config.js        # ESLint flat config
├── public/                 # Static assets served at root
│   ├── favicon.svg
│   ├── icons.svg
│   └── og-image.svg
├── src/                    # Application source code
│   ├── main.jsx            # React 19 entry point (createRoot, providers)
│   ├── App.jsx             # Top-level routing (AnimatePresence + Routes)
│   ├── index.css           # Global CSS: design tokens, Tailwind, utilities
│   ├── assets/             # Static images (photos, logos)
│   ├── components/         # All React components
│   ├── context/            # React context providers
│   ├── data/               # Static data files (projects, experiences, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and animation presets
│   └── pages/              # Route-level page components
├── docs/                   # Project documentation
│   └── codebase/           # Auto-generated codebase docs
└── .agents/                # AI agent skills and configs
```

### Entry Points
- **HTML:** [index.html](file:///Users/fauzanghaza/Downloads/web-portofolio/index.html) — loads `/src/main.jsx`
- **JS Entry:** [src/main.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/main.jsx) — renders `<App />` inside providers
- **App Router:** [src/App.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/App.jsx) — defines 3 routes: `/`, `/project/:slug`, `*` (404)

### Component Hierarchy

```
src/components/
├── layout/                 # App shell and chrome
│   ├── AppLayout.jsx       # Root layout: Navbar + Outlet + Footer + effects
│   ├── Navbar.jsx          # Sticky nav, auto-hide on scroll, mobile drawer
│   ├── Footer.jsx          # Site footer
│   ├── BackgroundGlow.jsx  # Animated floating orbs (green/pink/yellow)
│   ├── Container.jsx       # Max-width content wrapper
│   ├── Section.jsx         # Section wrapper with IntersectionObserver
│   ├── Cursor.jsx          # Custom cursor follower
│   ├── ScrollProgress.jsx  # Top scroll progress bar
│   ├── PageTransition.jsx  # Framer Motion page enter/exit
│   ├── Preloader.jsx       # Initial page load animation
│   ├── CommandPalette.jsx  # ⌘K command palette (cmdk + Radix Dialog)
│   ├── ThemeToggle.jsx     # Light/Dark/System theme switcher (Radix Dropdown)
│   └── SkipLink.jsx        # Accessibility skip-to-content link
│
├── sections/               # Page sections (used in Home)
│   ├── Hero.jsx            # Hero banner with image, metrics, CTAs
│   ├── About.jsx           # About section (currently commented out in Home)
│   ├── Experience.jsx      # Work experience timeline
│   ├── Projects.jsx        # Project showcase with filters + See All
│   ├── Skills.jsx          # Skills grouped by category
│   ├── Certifications.jsx  # Certifications + achievements
│   └── Contact.jsx         # Contact form + social links
│
├── shared/                 # Reusable components used across sections
│   ├── ProjectCard.jsx     # Project card with optional impact field
│   ├── PinterestGallery.jsx# 4-column image grid for Digital Content
│   ├── ExperienceItem.jsx  # Single experience entry with carousel
│   ├── ImageCarousel.jsx   # Image carousel with navigation
│   ├── SectionHeading.jsx  # Section header (eyebrow + title + description)
│   ├── Magnetic.jsx        # Magnetic hover effect wrapper
│   ├── SkillGroup.jsx      # Skill category with items
│   ├── SocialLinks.jsx     # Social media icon links
│   └── StatCard.jsx        # Stat display card
│
└── ui/                     # Primitive UI components (design system)
    ├── badge.jsx           # Badge variants (default, primary, ghost)
    ├── button.jsx          # Button variants (default, outline, ghost, gradient)
    ├── card.jsx            # Card wrapper
    ├── command.jsx         # Command palette primitives (cmdk wrapper)
    ├── dialog.jsx          # Dialog/modal (Radix Dialog wrapper)
    ├── input.jsx           # Text input
    ├── separator.jsx       # Visual separator
    ├── textarea.jsx        # Textarea
    └── tooltip.jsx         # Tooltip (Radix Tooltip wrapper)
```

### Data Layer

```
src/data/
├── site.js          # Site metadata, hero content, about section data
├── projects.js      # Project entries + filter categories
├── experiences.js   # Work experience entries with image arrays
├── skills.js        # Skills grouped by category
├── certifications.js# Certification entries
├── achievements.js  # Achievement entries
├── navigation.js    # Top-nav link items
└── social.js        # Social media links
```

### Hooks

```
src/hooks/
├── useLenis.js              # Smooth scroll initialization (Lenis)
├── useLocalStorage.js       # Persistent state in localStorage
├── useScrollDirection.js    # Detect scroll up/down for navbar hide
├── useCursor.js             # Custom cursor position tracking
├── useHotkeys.js            # Keyboard shortcut handler
└── usePrefersReducedMotion.js # Respects OS reduced-motion preference
```

### Key Files
| File | Purpose |
|------|---------|
| [main.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/main.jsx) | React root + providers (Theme, ActiveSection, Router) |
| [App.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/App.jsx) | Route definitions with AnimatePresence |
| [index.css](file:///Users/fauzanghaza/Downloads/web-portofolio/src/index.css) | Design tokens, section tint classes, utility classes |
| [AppLayout.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/layout/AppLayout.jsx) | Root layout shell: nav + main + footer + effects |

---

### Evidence
- Directory tree from scan output
- [main.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/main.jsx)
- [App.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/App.jsx)
- [AppLayout.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/layout/AppLayout.jsx)
