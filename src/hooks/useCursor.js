import { useEffect, useState } from 'react'

export function useCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const pointerMedia = window.matchMedia('(pointer: fine)')
    setEnabled(pointerMedia.matches)
    const handlePointerChange = (event) => setEnabled(event.matches)
    pointerMedia.addEventListener('change', handlePointerChange)
    return () => pointerMedia.removeEventListener('change', handlePointerChange)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setIsActive(true)
    }

    const handleLeave = () => setIsActive(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [enabled])

  return { position, isActive, enabled }
}
