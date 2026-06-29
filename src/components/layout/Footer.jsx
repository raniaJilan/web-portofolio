import { navigation } from '../../data/navigation'
import { socialLinks } from '../../data/social'
import SocialLinks from '../shared/SocialLinks'
import Container from './Container'

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">Rania Jilan</p>
            <p className="text-sm text-[var(--text-muted)]">
              Building Solutions with Technology.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
            {navigation.map((item) => (
              <a key={item.id} href={item.href} className="hover:text-[var(--text)]">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 border-t border-[var(--border)] pt-6 md:flex-row md:items-center md:justify-between">
          <SocialLinks items={socialLinks} />
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 Rania Jilan. Crafted with intention.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
