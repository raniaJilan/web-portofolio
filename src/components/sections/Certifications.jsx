import { ArrowUpRight } from 'lucide-react'
import { achievements } from '../../data/achievements'
import { certifications } from '../../data/certifications'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'

const Certifications = () => {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications and achievements that validate impact."
          description="Continuous learning and recognition from industry leaders."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-card transition hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)]">{cert.title}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{cert.issuer}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] transition group-hover:text-[var(--text)]" />
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-[var(--text-muted)]">
                  <span>{cert.date}</span>
                  <span>•</span>
                  <span>{cert.credential}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-card">
            <h3 className="text-lg font-semibold text-[var(--text)]">Achievements</h3>
            <div className="mt-4 grid gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="rounded-2xl border border-[var(--border)] bg-[rgba(148,163,184,0.08)] p-4">
                  <p className="text-sm font-semibold text-[var(--text)]">{achievement.title}</p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{achievement.description}</p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="text-xs text-[var(--text-muted)]">{achievement.year}</span>
                    {achievement.certificateUrl && (
                      <a
                        href={achievement.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1.5 text-xs font-medium text-[var(--text)] transition hover:-translate-y-0.5 hover:shadow-sm"
                      >
                        View Certificate
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Certifications
