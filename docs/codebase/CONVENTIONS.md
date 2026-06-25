# Conventions

## Core Sections (Required)

### Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `ProjectCard.jsx`, `SectionHeading.jsx` |
| Hooks | camelCase with `use` prefix | `useLocalStorage.js`, `useLenis.js` |
| Data files | camelCase | `projects.js`, `certifications.js` |
| Utility files | camelCase | `utils.js`, `motion.js` |
| CSS classes | kebab-case for custom, Tailwind utilities elsewhere | `.section-hero`, `.glass-strong` |
| CSS variables | kebab-case with `--` prefix | `--primary`, `--text-muted`, `--shadow-card` |
| Routes | kebab-case slugs | `/project/inclusign-ai-powered-inclusive-learning-platform` |

### File Organization

- **One component per file** — Each `.jsx` file exports a single default component
- **Flat directories** — No deep nesting; components grouped into `layout/`, `sections/`, `shared/`, `ui/`
- **Co-located data** — All static data in `src/data/`, imported directly by sections
- **Hooks directory** — All custom hooks in `src/hooks/`

### Component Structure

Components follow a consistent pattern:
1. Imports (React, libraries, local components, data, utils)
2. Constants/helpers (above component definition)
3. Component function (arrow function with default export at bottom)
4. No TypeScript — pure JSX with no prop types or interfaces

```jsx
import { motion } from 'framer-motion'
import { someData } from '../../data/some'
import Container from '../layout/Container'

const SomeSection = () => {
  return (
    <Section id="some">
      <Container>
        {/* ... */}
      </Container>
    </Section>
  )
}

export default SomeSection
```

### Styling Patterns

1. **CSS Variables for design tokens** — All colors, shadows, and spacing defined as CSS custom properties in `index.css`
2. **Tailwind utilities** — Used for layout, spacing, typography, and responsive design
3. **CVA for component variants** — `button.jsx` and `badge.jsx` use `class-variance-authority` for type-safe variant management
4. **`cn()` utility** — All dynamic class concatenation uses `cn()` (clsx + tailwind-merge) from `src/lib/utils.js`
5. **Inline `var()` references** — Components use `text-[var(--text)]` pattern instead of custom Tailwind theme extensions
6. **Responsive** — Mobile-first with `md:` and `lg:` breakpoint prefixes

### Color Palette (as of v2 refresh)

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| `--primary` | `#C05A7E` (deep rose) | `#E8729A` (soft rose) | Buttons, nav highlights, badges |
| `--accent` | `#E8729A` (soft rose) | `#F9A8C9` (light rose) | Links, hover states, indicators |
| `--bg` | `#FFFFFF` | `#0F172A` | Page background |
| `--text` | `#1A1A2E` | `#F1F5F9` | Primary text |
| `--text-muted` | `#374151` | `#94A3B8` | Secondary text |

Section tint colors: green (`#F7FDF9`), yellow (`#FFFBEB`), pink (`#FFF1F2`)

### Animation Conventions

- **Scroll reveal** — `whileInView` with `viewport={{ once: true }}`
- **Staggered entrances** — Sequential `delay` values (0.05s–0.15s increments)
- **Hover feedback** — `whileHover={{ y: -6 }}` with spring physics
- **Page transitions** — `AnimatePresence mode="wait"` with fade+slide variants
- **Performance** — Only animate `transform` and `opacity`; use `will-change` sparingly
- **Accessibility** — Wrap heavy animations in `prefers-reduced-motion` checks

### Import Conventions

- **Relative paths** — All imports use relative paths (`../../data/projects`)
- **No path aliases** — No `@/` aliases configured in Vite
- **Named exports** for data, **default exports** for components
- **Explicit extensions** — `.jsx` and `.js` extensions used in import paths

### Error Handling

- Minimal error handling — no try/catch in components
- `useLocalStorage` silently catches parse/write errors
- `ProjectDetails` renders a "not found" fallback if slug doesn't match
- No error boundaries defined

---

### Evidence
- [utils.js](file:///Users/fauzanghaza/Downloads/web-portofolio/src/lib/utils.js) — `cn()` utility
- [button.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/ui/button.jsx) — CVA pattern
- [badge.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/ui/badge.jsx) — CVA pattern
- [index.css](file:///Users/fauzanghaza/Downloads/web-portofolio/src/index.css) — design token definitions
- [motion.js](file:///Users/fauzanghaza/Downloads/web-portofolio/src/lib/motion.js) — animation presets
