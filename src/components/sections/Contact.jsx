import { siteMeta } from '../../data/site'
import { socialLinks } from '../../data/social'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import SocialLinks from '../shared/SocialLinks'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Section id="contact" className="section-contact">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Interested in working together?"
          description="Feel free to reach out for collaborations, projects, or professional opportunities."
        />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-card">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">Availability</p>
            <h3 className="mt-4 text-2xl font-semibold text-[var(--text)]">{siteMeta.availability}</h3>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Prefer email? Reach out directly at{' '}
              <a href={`mailto:${siteMeta.email}`} className="font-semibold text-[var(--text)]">
                {siteMeta.email}
              </a>
              .
            </p>
            <div className="mt-6">
              <SocialLinks items={socialLinks} />
            </div>
            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[rgba(148,163,184,0.08)] p-4">
              <p className="text-sm text-[var(--text-muted)]">Based in</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">{siteMeta.location}</p>
            </div>
            <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[rgba(148,163,184,0.08)] p-4">
              <p className="text-sm text-[var(--text-muted)]">Current Status</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">{siteMeta.status}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-card">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Name
                </label>
                <Input id="contact-name" name="name" className="mt-2" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Email
                </label>
                <Input id="contact-email" name="email" className="mt-2" type="email" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="contact-project" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Project Type
              </label>
              <Input id="contact-project" name="project" className="mt-2" placeholder="Collaboration, Internship, Full-time Opportunity, etc." />
            </div>
            <div className="mt-4">
              <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Message
              </label>
              <Textarea id="contact-message" name="message" className="mt-2" placeholder="Tell me about your project, opportunity, or how I can help." />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" variant="gradient">
                Send inquiry
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${siteMeta.email}`}>Email directly</a>
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
