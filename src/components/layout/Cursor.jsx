import { useCursor } from '../../hooks/useCursor'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const Cursor = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const { position, isActive, enabled } = useCursor()

  if (!enabled || prefersReducedMotion) return null

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-opacity duration-300 lg:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)` + ' translate(-50%, -50%)',
        opacity: isActive ? 1 : 0,
      }}
    />
  )
}

export default Cursor
