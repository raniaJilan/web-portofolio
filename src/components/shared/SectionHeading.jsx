import { motion } from 'framer-motion'

const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="mb-12">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 text-3xl font-semibold text-[var(--text)] md:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 max-w-2xl text-sm text-[var(--text-muted)] md:text-base"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
