import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { about, siteMeta } from '../../data/site'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import StatCard from '../shared/StatCard'
import { Button } from '../ui/button'

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.summary}
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-[var(--text-muted)]"
          >
            <p className="text-base md:text-lg">{about.story}</p>
            <div className="grid gap-4">
              {about.values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-4">
                  <h3 className="text-sm font-semibold text-[var(--text)]">{value.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{value.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="outline">
                <a href={siteMeta.resumeUrl}>
                  Download CV
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#contact">Schedule a consult</a>
              </Button>
            </div>
          </motion.div>
          <div className="grid gap-4">
            {about.stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
