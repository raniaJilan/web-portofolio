import { experiences } from '../../data/experiences'
import Container from '../layout/Container'
import Section from '../layout/Section'
import ExperienceItem from '../shared/ExperienceItem'
import SectionHeading from '../shared/SectionHeading'

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Leading design and engineering across product lifecycles."
          description="A snapshot of roles where strategy, system thinking, and execution came together."
        />
        <div className="relative grid gap-8">
          <div className="absolute left-3 top-2 hidden h-full w-px bg-[var(--border)] md:block" />
          {experiences.map((experience, index) => (
            <ExperienceItem key={experience.role} experience={experience} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Experience
