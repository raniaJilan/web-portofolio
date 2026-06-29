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
          title="The skills I've developed along my journey."
          description="Combining business analysis, product thinking, design, and technology to create meaningful digital solutions."
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
