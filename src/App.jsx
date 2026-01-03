import React from 'react'
import NavbarMain from './Components/navbar/NavbarMain'
import HeroMain from './Components/HeroSection/HeroMain'
import SubHero from './Components/Subhero/SubHero'
// import AboutMain from './Components/AboutSection/AboutMain'
import SkillsMain from './Components/SkillsSection/SkillsMain'
import Helper from './Components/HelperSection/Helper'
import ProjectsMain from './Components/Projects/ProjectsMain'
import ContectMain from './Components/ContactSection/ContectMain'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className=''>
      <NavbarMain />
      <HeroMain />
      <SubHero />
      {/* <AboutMain /> */}
      <SkillsMain  />
      <ProjectsMain />
      <ContectMain />
      <Footer />
      <Helper />

    </div>
    
  )
}

export default App