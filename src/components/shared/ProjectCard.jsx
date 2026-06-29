import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, FileText, Github, Globe, BookOpen, Presentation, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'
import { Badge } from '../ui/badge'

const iconMap = {
  ExternalLink,
  FileText,
  Github,
  Globe,
  BookOpen,
  Presentation,
  FlaskConical,
}

const ProjectCard = ({ project, className = '' }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={cn(
        'group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--panel)] shadow-card',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <Badge variant="primary">{project.category}</Badge>
          <Badge variant="primary">{project.year}</Badge>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">{project.title}</h3>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="ghost">
              {tag}
            </Badge>
          ))}
        </div>
        {project.impact && project.impact.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
            {project.impact.map((item) => (
              <span key={item} className="rounded-full border border-[var(--border)] px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-wrap items-center gap-3">
          {/* <Link
            to={`/project/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--text)]"
          >
            View case study
            <ArrowUpRight className="h-4 w-4" />
          </Link> */}
          {project.actions &&
            project.actions.map((action) => {
              const Icon = iconMap[action.icon] || ExternalLink
              return (
                <a
                  key={action.label}
                  href={action.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {action.label}
                </a>
              )
            })}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
