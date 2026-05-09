import { skills } from '../../data/skills'
import Container from '../layout/Container'
import Section from '../layout/Section'
import SectionHeading from '../shared/SectionHeading'
import SkillGroup from '../shared/SkillGroup'

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for modern product teams."
          description="From UX research to motion systems, these are the disciplines I combine to craft premium experiences."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Skills
