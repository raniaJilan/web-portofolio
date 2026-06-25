# Concerns

## Core Sections (Required)

### Technical Debt

| Issue | Severity | Location | Description |
|-------|----------|----------|-------------|
| Non-functional contact form | Medium | [Contact.jsx:12-14](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/sections/Contact.jsx#L12-L14) | `handleSubmit` only calls `preventDefault()`. Form data is never sent. |
| `cmdk` import warnings | Low | [command.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/ui/command.jsx) | Build produces 5 `IMPORT_IS_UNDEFINED` warnings for cmdk exports (`Input`, `List`, `Empty`, `Group`, `Item`, `Separator`). May indicate a version mismatch. |
| CSS `@import` order warning | Low | [index.css](file:///Users/fauzanghaza/Downloads/web-portofolio/src/index.css) | `@import url(...)` for Google Fonts appears after `@import "tailwindcss"`, triggering a CSS spec warning. Move the font import before Tailwind or use `<link>` in `index.html`. |
| About section commented out | Low | [Home.jsx:13](file:///Users/fauzanghaza/Downloads/web-portofolio/src/pages/Home.jsx#L13) | The About section exists but is disabled. Dead code should be cleaned or restored. |
| Navigation includes About | Low | [navigation.js:3](file:///Users/fauzanghaza/Downloads/web-portofolio/src/data/navigation.js#L3) | Navigation data includes "About" link but the section is not rendered, so the link scrolls nowhere. |
| ProjectDetails impact not optional | Medium | [ProjectDetails.jsx:90](file:///Users/fauzanghaza/Downloads/web-portofolio/src/pages/ProjectDetails.jsx#L90) | The detail page directly maps `project.impact` without a null check. Digital Content entries have no `impact` field, causing a runtime error on detail pages. |
| Large asset files | Low | `src/assets/` | `formal.png` is 12MB, `berbinar2.png` is 4.8MB. These should be optimized or served from a CDN. |
| Bundle size | Low | Build output | Main JS chunk is 1,086KB (305KB gzipped). Consider code-splitting with dynamic imports. |

### Security Considerations

| Area | Status | Notes |
|------|--------|-------|
| XSS | Low risk | No user-generated content rendered; all data is static |
| Dependencies | [TODO] | No Dependabot, Snyk, or security scanning configured |
| HTTPS | N/A | Deployment-level concern, not in codebase |
| `target="_blank"` | ✅ Mitigated | External links use `rel="noreferrer"` |

### Performance Concerns

| Issue | Impact | Recommendation |
|-------|--------|----------------|
| No image optimization | Medium | Images loaded directly from Unsplash with large dimensions. Consider using `srcset`, `sizes`, or a build-time optimizer. |
| Unoptimized local assets | High | Multiple photos over 1MB in `src/assets/`. These get bundled by Vite, inflating the build. Move to `public/` or an image CDN. |
| No lazy loading for sections | Low | All section components are eagerly imported in `Home.jsx`. Could use `React.lazy()` + `Suspense`. |
| Lenis on all pages | Low | Smooth scroll runs even on detail pages where it may not be needed. |
| No `<link rel="preconnect">` | Low | Google Fonts CDN should have a preconnect hint in `index.html`. |

### Accessibility Gaps

| Issue | Location | Recommendation |
|-------|----------|----------------|
| `SkipLink` exists | ✅ | Skip-to-content link implemented |
| `prefers-reduced-motion` respected | ✅ | Lenis and orbs disable animation |
| Missing `aria-label` on gallery images | [PinterestGallery.jsx](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/shared/PinterestGallery.jsx) | Gallery images have `alt` from `item.title` but Digital Content placeholders have generic titles |
| Form labels present | ✅ | Contact form has `<label>` elements with `htmlFor` |
| Color contrast in light mode | [TODO] | New Soft Rose palette should be verified for WCAG AA contrast ratios |

### High-Churn Files (last 90 days)

The following files have been modified most frequently, suggesting fragility or active development:
- `src/data/achievements.js` (4 changes)
- `src/data/experiences.js` (4 changes)
- `src/data/projects.js` (4 changes)
- `src/index.css` (4 changes)
- `src/components/shared/ExperienceItem.jsx` (3 changes)

---

### Evidence
- Build output warnings (from `npm run build`)
- Scan output high-churn files section
- [ProjectDetails.jsx:90](file:///Users/fauzanghaza/Downloads/web-portofolio/src/pages/ProjectDetails.jsx#L90) — crash on Digital Content detail page
- [Contact.jsx:12-14](file:///Users/fauzanghaza/Downloads/web-portofolio/src/components/sections/Contact.jsx#L12-L14) — empty submit handler
- Scan output largest files section
