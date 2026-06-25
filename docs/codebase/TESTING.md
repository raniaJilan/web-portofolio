# Testing

## Core Sections (Required)

### Testing Framework

**No testing framework is configured.** There are no test files, no test runner, and no testing dependencies in `package.json`.

### Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `vite` | Start dev server |
| `build` | `vite build` | Production build |
| `lint` | `eslint .` | Run ESLint |
| `preview` | `vite preview` | Preview production build |

There is no `test` script defined.

### Linting

ESLint is configured via [eslint.config.js](file:///Users/fauzanghaza/Downloads/web-portofolio/eslint.config.js) with:
- `eslint-plugin-react-hooks` — Enforces Rules of Hooks
- `eslint-plugin-react-refresh` — Validates components are compatible with React Fast Refresh

### Type Checking

The project uses **JSX (not TypeScript)**, but includes `@types/react` and `@types/react-dom` as devDependencies for editor IntelliSense. There is no `tsconfig.json` or `tsc` type-checking step.

### Build Verification

The production build (`npm run build`) serves as the primary verification mechanism:
- Vite's Rolldown bundler catches import errors, missing modules, and syntax issues
- Tailwind CSS v4 processes all utility classes at build time
- Build output: `dist/` directory with optimized assets

### Manual Testing Checklist

Since there are no automated tests, the following should be manually verified:

1. **Theme switching** — Light, Dark, System modes via the navbar toggle
2. **Project filtering** — All category tabs filter correctly
3. **See All / Show Less** — Expands and collapses project lists
4. **Digital Content gallery** — Renders as Pinterest-style grid
5. **Responsive layout** — Mobile, tablet, and desktop breakpoints
6. **Smooth scroll** — Lenis smooth scrolling works
7. **Navigation** — Hash links scroll to correct sections, navbar highlights active section
8. **Project detail pages** — `/project/:slug` routes render correct data
9. **404 page** — Invalid routes show NotFound component
10. **Accessibility** — Skip link, reduced-motion, keyboard navigation

### [ASK USER] Testing Gaps

No automated tests exist. Consider adding:
- **Vitest** for unit testing (data transformations, hooks, utilities)
- **Playwright** or **Cypress** for E2E testing (routing, filtering, theme switching)
- **Visual regression** testing for the design system components

---

### Evidence
- [package.json](file:///Users/fauzanghaza/Downloads/web-portofolio/package.json) — no test script or testing deps
- [eslint.config.js](file:///Users/fauzanghaza/Downloads/web-portofolio/eslint.config.js) — ESLint config
