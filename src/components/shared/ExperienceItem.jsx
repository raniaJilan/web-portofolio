import { motion } from 'framer-motion'
import { Badge } from '../ui/badge'
import ImageCarousel from './ImageCarousel'

const ExperienceItem = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative pl-10"
    >
      <span className="absolute left-2 top-5 h-3 w-3 rounded-full bg-[var(--primary)] shadow-soft" />
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text)]">{experience.role}</h3>
            <p className="text-sm text-[var(--text-muted)]">{experience.company}</p>
          </div>
          <Badge>{experience.period}</Badge>
        </div>
        <p className="mt-4 text-sm text-[var(--text-muted)]">{experience.summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-[var(--text)]">
          {experience.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {item}
            </li>
          ))}
        </ul>

        {/* Image gallery carousel */}
        {experience.gallery && experience.gallery.length > 0 && (
          <div className="mt-4">
            <ImageCarousel images={experience.gallery} height="160px" />
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="ghost">
              {tech}
            </Badge>
          ))}
        </div>
        <p className="mt-4 text-xs text-[var(--text-muted)]">{experience.location}</p>
      </div>
    </motion.div>
  )
}

export default ExperienceItem
