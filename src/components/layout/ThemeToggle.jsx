import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { cn } from '../../lib/utils'

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Laptop },
]

const ThemeToggle = ({ className }) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const Icon = resolvedTheme === 'dark' ? Moon : Sun

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          aria-label="Toggle theme"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] transition hover:scale-[1.02] hover:border-[rgba(148,163,184,0.5)]',
            className,
          )}
        >
          <Icon className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="z-50 mt-2 min-w-[160px] rounded-2xl border border-[var(--border)] bg-[var(--panel-strong)] p-2 shadow-card"
        >
          {themes.map(({ value, label, icon: ItemIcon }) => (
            <DropdownMenu.Item
              key={value}
              onSelect={() => setTheme(value)}
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-[var(--text)] outline-none transition hover:bg-[rgba(148,163,184,0.15)]',
                theme === value && 'bg-[rgba(148,163,184,0.2)]',
              )}
            >
              <ItemIcon className="h-4 w-4" />
              {label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default ThemeToggle
