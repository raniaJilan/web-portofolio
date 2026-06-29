import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { projectFilters, projects } from '../../data/projects'
import Container from '../layout/Container'
import Section from '../layout/Section'
import PinterestGallery from '../shared/PinterestGallery'
import ProjectCard from '../shared/ProjectCard'
import SectionHeading from '../shared/SectionHeading'
import { Button } from '../ui/button'

const SkeletonCard = () => (
  <div className="animate-pulse rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6">
    <div className="aspect-[4/3] w-full rounded-2xl bg-[rgba(148,163,184,0.2)]" />
    <div className="mt-5 h-4 w-2/3 rounded-full bg-[rgba(148,163,184,0.2)]" />
    <div className="mt-3 h-3 w-4/5 rounded-full bg-[rgba(148,163,184,0.15)]" />
    <div className="mt-6 flex gap-2">
      <div className="h-6 w-16 rounded-full bg-[rgba(148,163,184,0.18)]" />
      <div className="h-6 w-20 rounded-full bg-[rgba(148,163,184,0.18)]" />
    </div>
  </div>
)

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [isLoading, setIsLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  // Reset showAll when switching filters
  useEffect(() => {
    setShowAll(false)
  }, [activeFilter])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const isDigitalContent = activeFilter === 'Digital Content'
  const maxVisible = isDigitalContent ? 8 : 4
  const hasMore = filteredProjects.length > maxVisible
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, maxVisible)

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects that shaped my journey."
          description="A glimpse into the projects and experiences that helped me grow in technology and business."
        />
        <div className="flex flex-wrap items-center gap-3">
          {projectFilters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="mt-8">
          {isLoading ? (
            <div className="grid gap-6 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : isDigitalContent ? (
            <PinterestGallery items={visibleProjects} />
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* See All / Show Less toggle */}
        {hasMore && !isLoading && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-2.5 text-sm font-medium text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
            >
              {showAll ? 'Show Less' : 'See All →'}
            </button>
          </div>
        )}
      </Container>
    </Section>
  )
}

export default Projects

