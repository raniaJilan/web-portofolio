import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const Preloader = () => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsLoading(false)
      return
    }
    const timer = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-lg font-semibold text-[var(--primary-foreground)]"
            >
              RJ
            </motion.div>
            <div className="text-sm text-[var(--text-muted)]">Crafting the experience…</div>
            <motion.div
              className="h-1.5 w-40 overflow-hidden rounded-full bg-[rgba(148,163,184,0.2)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full w-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
