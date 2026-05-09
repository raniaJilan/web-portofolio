import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

const SkillGroup = ({ group }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-card"
    >
      <h3 className="text-lg font-semibold text-[var(--text)]">{group.title}</h3>
      <p className="mt-2 text-sm text-[var(--text-muted)]">{group.description}</p>
      <div className="mt-4 grid gap-3">
        {group.items.map((item) => {
          const Icon = Icons[item.icon] || Icons.Star
          return (
            <div key={item.name} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(148,163,184,0.08)] px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(91,33,182,0.15)] text-[var(--text)]">
                <Icon className="h-4 w-4" />
              </span>
              <div className="text-sm font-medium text-[var(--text)]">{item.name}</div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default SkillGroup
