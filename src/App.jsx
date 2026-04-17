import React, { useEffect } from 'react'
import NavbarMain from './Components/navbar/NavbarMain'
import HeroMain from './Components/HeroSection/HeroMain'
import SubHero from './Components/Subhero/SubHero'
// import AboutMain from './Components/AboutSection/AboutMain'
import SkillsMain from './Components/SkillsSection/SkillsMain'
import Helper from './Components/HelperSection/Helper'
import ProjectsMain from './Components/Projects/ProjectsMain'
import ContectMain from './Components/ContactSection/ContectMain'
import Footer from './Components/Footer/Footer'
import '@n8n/chat/style.css'
import './index.css'
 
import { createChat } from '@n8n/chat'

const App = () => {

  useEffect(() => {
    createChat({
      webhookUrl: 'https://muhammadammar.me/webhook/910b6b94-9589-4aa3-ab74-8abdbdc80a9f/chat',

      initialMessages: [
        'Hi Visitor 👋',
        'Ask me anything regarding my portfolio!'
      ],

      i18n: {
        en: {
          title: 'Welcome to Portfolio Assistant 👋',
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your query..',
        },
      },
    })
  }, [])

  return (
    <div>
      <NavbarMain />
      <HeroMain />
      <SubHero />
      {/* <AboutMain /> */}
      <SkillsMain />
      <ProjectsMain />
      <ContectMain />
      <Footer />
      <Helper />
    </div>
  )
}

export default App