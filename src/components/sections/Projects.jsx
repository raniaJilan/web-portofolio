import { useEffect, useMemo, useState } from 'react'
import { projectFilters, projects } from '../../data/projects'
import Container from '../layout/Container'
import Section from '../layout/Section'
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with measurable impact."
          description="A curated mix of product design, engineering, and motion systems built for ambitious teams."
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
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />)
            : filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
        </div>
      </Container>
    </Section>
  )
}

export default Projects
