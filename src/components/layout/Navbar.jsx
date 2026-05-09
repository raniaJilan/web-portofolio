import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useActiveSection } from '../../context/ActiveSectionContext'
import { navigation } from '../../data/navigation'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import Container from './Container'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const { activeSection } = useActiveSection()
  const direction = useScrollDirection()
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHidden = direction === 'down' && hasScrolled && !isOpen

  const handleOpenCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'))
  }

  return (
    <motion.header
      className={cn(
        'fixed top-0 z-40 w-full transition-transform duration-300',
        isHidden && '-translate-y-full',
      )}
    >
      <div
        className={cn(
          'mx-auto mt-4 w-[min(1200px,94%)] rounded-full border border-transparent px-4 py-2 transition',
          hasScrolled
            ? 'glass-strong shadow-card'
            : 'bg-transparent',
        )}
      >
        <Container className="flex items-center justify-between px-2">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]">
              RJ
            </span>
            <span className="hidden text-[var(--text)] md:inline">Rania Jilan</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={cn(
                  'relative text-sm text-[var(--text-muted)] transition hover:text-[var(--text)]',
                  activeSection === item.id && 'text-[var(--text)]',
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-[var(--primary)]" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleOpenCommandPalette}
              className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-2 text-xs text-[var(--text-muted)] transition hover:text-[var(--text)] lg:flex"
            >
              Command
              <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">
                ⌘K
              </span>
            </button>
            <ThemeToggle />
            <Button asChild className="hidden lg:inline-flex" variant="gradient">
              <a href="#contact">Let’s talk</a>
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-4 w-[min(1200px,94%)] rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-6 shadow-card lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild variant="gradient">
                <a href="#contact">Start a project</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
