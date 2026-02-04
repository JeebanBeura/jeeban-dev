import React from 'react'

import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import EducationSection from '../components/sections/EducationSection'
import ExperienceSection from '../components/sections/ExperienceSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <EducationSection/>
      <ExperienceSection/>
    </>
  )
}

export default Home