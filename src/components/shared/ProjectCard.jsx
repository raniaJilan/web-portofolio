import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'
import { Badge } from '../ui/badge'

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
          <Badge>{project.year}</Badge>
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
        <div className="flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
          {project.impact.map((item) => (
            <span key={item} className="rounded-full border border-[var(--border)] px-3 py-1">
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to={`/project/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--text)]"
          >
            View case study
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[var(--text-muted)]"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
