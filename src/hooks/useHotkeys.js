import { useEffect } from 'react'

const parseCombo = (combo) => {
  const parts = combo.toLowerCase().split('+')
  const hasMod = parts.includes('mod')
  return {
    key: parts.find((part) => !['mod', 'meta', 'ctrl', 'shift', 'alt'].includes(part)),
    meta: parts.includes('meta'),
    ctrl: parts.includes('ctrl'),
    shift: parts.includes('shift'),
    alt: parts.includes('alt'),
    mod: hasMod,
  }
}

const matchesCombo = (event, combo) => {
  const parsed = parseCombo(combo)
  const keyMatch = parsed.key ? event.key.toLowerCase() === parsed.key : true
  const modMatch = parsed.mod ? event.metaKey || event.ctrlKey : true
  return (
    keyMatch &&
    modMatch &&
    (!parsed.meta || event.metaKey) &&
    (!parsed.ctrl || event.ctrlKey) &&
    (!parsed.shift || event.shiftKey) &&
    (!parsed.alt || event.altKey)
  )
}

export function useHotkeys(combos, handler, deps = []) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target
      const tagName = target?.tagName
      if (tagName === 'INPUT' || tagName === 'TEXTAREA' || target?.isContentEditable) {
        return
      }
      if (combos.some((combo) => matchesCombo(event, combo))) {
        handler(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [combos, handler, ...deps])
}
