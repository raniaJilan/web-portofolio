export const pageTransition = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}
