import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { navigation } from '../../data/navigation'
import { socialLinks } from '../../data/social'
import { useHotkeys } from '../../hooks/useHotkeys'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '../ui/command'
import { Dialog, DialogContent } from '../ui/dialog'

const CommandPalette = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { setTheme } = useTheme()

  useHotkeys(['mod+k'], (event) => {
    event.preventDefault()
    setOpen((prev) => !prev)
  })

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-command-palette', handler)
    return () => window.removeEventListener('open-command-palette', handler)
  }, [])

  const themeItems = [
    { label: 'Switch to Light', value: 'light' },
    { label: 'Switch to Dark', value: 'dark' },
    { label: 'Use System Theme', value: 'system' },
  ]

  const handleNav = (href) => {
    if (href.startsWith('#')) {
      navigate('/')
      setTimeout(() => {
        window.location.hash = href
      }, 60)
    } else {
      navigate(href)
    }
    setOpen(false)
  }

  const handleLink = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0">
        <Command>
          <CommandInput placeholder="Search commands, pages, and links..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigate">
              {navigation.map((item) => (
                <CommandItem key={item.id} onSelect={() => handleNav(item.href)}>
                  {item.label}
                  <span className="text-xs text-[var(--text-muted)]">Go</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Theme">
              {themeItems.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => {
                    setTheme(item.value)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Social">
              {socialLinks.map((item) => (
                <CommandItem key={item.label} onSelect={() => handleLink(item.href)}>
                  {item.label}
                  <span className="text-xs text-[var(--text-muted)]">External</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export default CommandPalette
