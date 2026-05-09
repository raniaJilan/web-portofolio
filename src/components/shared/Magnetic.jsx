import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const Magnetic = ({ children, strength = 0.25, className = '' }) => {
  const ref = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 16 })
  const springY = useSpring(y, { stiffness: 180, damping: 16 })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setEnabled(mediaQuery.matches)
    const handler = (event) => setEnabled(event.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const handleMove = (event) => {
    if (!ref.current || prefersReducedMotion || !enabled) return
    const rect = ref.current.getBoundingClientRect()
    const deltaX = event.clientX - rect.left - rect.width / 2
    const deltaY = event.clientY - rect.top - rect.height / 2
    x.set(deltaX * strength)
    y.set(deltaY * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  )
}

export default Magnetic
