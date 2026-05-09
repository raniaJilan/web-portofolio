import { useEffect, useState } from 'react'

export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState('up')

  useEffect(() => {
    let lastY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastY
      if (Math.abs(delta) < threshold) return
      setDirection(delta > 0 ? 'down' : 'up')
      lastY = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return direction
}
