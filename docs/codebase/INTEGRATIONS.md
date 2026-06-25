# Integrations

## Core Sections (Required)

### External Services & APIs

This project has **no backend API integrations**. All data is static and embedded in source code.

### CDN Dependencies

| Service | Purpose | Loaded From |
|---------|---------|-------------|
| Google Fonts | Fonts: Inter, Space Grotesk, JetBrains Mono | `fonts.googleapis.com` via CSS `@import` |
| Unsplash | Placeholder project images | `images.unsplash.com` via `<img>` src |

### External Links (outbound, not integrations)

| Target | Usage | Files |
|--------|-------|-------|
| Google Drive | Case study PDFs, demo links | `projects.js` action URLs |
| Figma | Prototype links | `projects.js` action URLs |
| GitHub | Repository links | `social.js`, `projects.js` |
| LinkedIn | Social profile | `social.js` |

### Browser APIs

| API | Usage | File |
|-----|-------|------|
| `localStorage` | Theme preference persistence | `useLocalStorage.js` → `ThemeContext.jsx` |
| `matchMedia` | OS dark mode detection | `ThemeContext.jsx`, `usePrefersReducedMotion.js` |
| `IntersectionObserver` | Active section tracking for navbar highlight | `Section.jsx` |
| `requestAnimationFrame` | Lenis smooth scroll loop | `useLenis.js` |
| `CustomEvent` | Command palette open trigger | `Navbar.jsx` → `CommandPalette.jsx` |

### Authentication

None. This is a public portfolio website with no user accounts or protected content.

### Database

None. All data is hardcoded in `src/data/` files.

### Monitoring & Analytics

None detected. No analytics scripts, error tracking, or performance monitoring.

### Email

The contact form (`Contact.jsx`) has a `handleSubmit` that calls `event.preventDefault()` but **does not send any data**. The form is currently non-functional — it only renders the UI. There is a `mailto:` link as a fallback.

---

### Evidence
- [index.css](file:///Users/fauzanghaza/Downloads/web-portofolio/src/index.css#L2) — Google Fonts import
- [projects.js](file:///Users/fauzanghaza/Downloads/web-portofolio/src/data/projects.js) — Unsplash image URLs, external action links
- [ThemeContext.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/context/ThemeContext.jsx) — localStorage and matchMedia usage
- [Contact.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/sections/Contact.jsx#L12-L14) — non-functional form submit
