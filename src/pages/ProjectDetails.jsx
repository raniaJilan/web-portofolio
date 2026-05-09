import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/layout/Container'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { projects } from '../data/projects'

const ProjectDetails = () => {
  const { slug } = useParams()
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug])

  if (!project) {
    return (
      <Container>
        <div className="mx-auto max-w-2xl py-24 text-center">
          <p className="text-sm text-[var(--text-muted)]">Project not found.</p>
          <h1 className="mt-4 text-3xl font-semibold">Let’s head back.</h1>
          <Button asChild className="mt-6" variant="gradient">
            <Link to="/">Return home</Link>
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="py-20">
        <Button asChild variant="ghost">
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </Button>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary">{project.category}</Badge>
              <Badge>{project.year}</Badge>
            </div>
            <h1 className="mt-4 text-4xl font-semibold text-[var(--text)]">{project.title}</h1>
            <p className="mt-4 text-base text-[var(--text-muted)]">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="ghost">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="gradient">
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  Visit live demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-card">
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full rounded-2xl object-cover"
            />
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[var(--text)]">Impact highlights</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProjectDetails
