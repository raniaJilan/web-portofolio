import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useLenis() {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [prefersReducedMotion])
}
