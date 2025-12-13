import React from 'react'
import { SkiilsText } from './SkiilsText'
import AllSkills from './AllSkills'

const SkillsMain = () => {
  return (
    <div id='skills' className='md:h-[50vh] pt-[10vh] md:pt-43 flex flex-col items-center justify-center max-w-[75vw] mx-auto gap-5'>
        <SkiilsText />
        <AllSkills />
    </div>
  )
}

export default SkillsMain