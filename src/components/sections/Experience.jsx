import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { experiences } from '../../data/experiences'
import Container from '../layout/Container'
import Section from '../layout/Section'
import ExperienceItem from '../shared/ExperienceItem'
import SectionHeading from '../shared/SectionHeading'

const tabs = [
  { id: 'professional', label: 'Professional' },
  { id: 'organizational', label: 'Organizational' },
]

const Experience = () => {
  const [activeTab, setActiveTab] = useState('professional')

  const filteredExperiences = useMemo(
    () => experiences.filter((exp) => exp.category === activeTab),
    [activeTab],
  )

  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Leading design and engineering across product lifecycles."
          description="A snapshot of roles where strategy, system thinking, and execution came together."
        />

        {/* Tab buttons */}
        <div className="mb-8 flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg-muted)] p-1 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-[var(--primary-foreground)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)]'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="experience-tab-indicator"
                  className="absolute inset-0 rounded-full bg-[var(--primary)] shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Experience list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid gap-8"
          >
            <div className="absolute left-3 top-2 hidden h-full w-px bg-[var(--border)] md:block" />
            {filteredExperiences.length > 0 ? (
              filteredExperiences.map((experience, index) => (
                <ExperienceItem key={`${experience.role}-${experience.company}`} experience={experience} index={index} />
              ))
            ) : (
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-8 text-center">
                <p className="text-sm text-[var(--text-muted)]">
                  No {activeTab} experience entries yet. Check back soon!
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  )
}

export default Experience
