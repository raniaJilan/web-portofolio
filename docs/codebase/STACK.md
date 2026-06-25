# Stack

## Core Sections (Required)

### Language & Runtime
- **Language:** JavaScript (ES2020+ with ESM modules)
- **Runtime:** Browser (client-side SPA) + Node.js (build tooling)
- **Module System:** ES Modules (`"type": "module"` in package.json)

### Framework
- **React** `^19.2.5` — UI library
- **React DOM** `^19.2.5` — DOM renderer for React
- **React Router DOM** `^6.26.2` — Client-side routing (hash-based anchors + `/project/:slug`)

### Build Tool
- **Vite** `^8.0.10` — Dev server and production bundler
- **@vitejs/plugin-react** `^6.0.1` — React Fast Refresh + JSX transform
- **@tailwindcss/vite** `^4.3.0` — Tailwind CSS v4 Vite plugin integration

### Styling
- **Tailwind CSS** `^4.3.0` — Utility-first CSS (v4 with `@import "tailwindcss"` syntax)
- **CSS Custom Properties** — Design tokens defined in `:root` and `[data-theme="dark"]` in `index.css`
- **class-variance-authority (CVA)** `^0.7.1` — Type-safe component variant styling
- **clsx** `^2.1.1` — Conditional class name construction
- **tailwind-merge** `^2.5.3` — Intelligent Tailwind class deduplication via `cn()` utility

### UI Libraries
- **Framer Motion** `^11.18.2` — Animation, transitions, AnimatePresence
- **Lucide React** `^0.501.0` — Icon library (tree-shakeable SVG icons)
- **Radix UI** — Headless, accessible component primitives:
  - `@radix-ui/react-dialog` `^1.1.14`
  - `@radix-ui/react-dropdown-menu` `^2.1.14`
  - `@radix-ui/react-slot` `^1.1.1`
  - `@radix-ui/react-tooltip` `^1.2.7`
- **cmdk** `^1.0.4` — Command palette component (⌘K)
- **@studio-freight/lenis** `^1.0.29` — Smooth scroll library

### Fonts (loaded via Google Fonts CDN)
- **Inter** — Sans-serif body text (`--font-sans`)
- **Space Grotesk** — Display headings (`--font-display`)
- **JetBrains Mono** — Monospace code text (`--font-mono`)

### Dev Tooling
- **ESLint** `^10.2.1` — Linting
  - `eslint-plugin-react-hooks` `^7.1.1`
  - `eslint-plugin-react-refresh` `^0.5.2`
- **@types/react** `^19.2.14` and **@types/react-dom** `^19.2.3` — TypeScript types for editor IntelliSense (project uses JSX, not TypeScript)

---

### Evidence
- [package.json](file:///Users/fauzanghaza/Downloads/web-portofolio/package.json)
- [vite.config.js](file:///Users/fauzanghaza/Downloads/web-portofolio/vite.config.js)
- [index.css](file:///Users/fauzanghaza/Downloads/web-portofolio/src/index.css) — font imports, CSS variable definitions
- [main.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/main.jsx) — React 19 createRoot + BrowserRouter
