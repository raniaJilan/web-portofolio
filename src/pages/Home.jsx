import About from '../components/sections/About'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'
import Experience from '../components/sections/Experience'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'

const Home = () => {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </>
  )
}

export default Home
