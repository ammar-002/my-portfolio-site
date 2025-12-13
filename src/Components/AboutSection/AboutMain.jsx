import React from 'react'
import AboutImg from './AboutImg'
import AboutText from './AboutText'

const AboutMain = () => {
  return (
    <div id='about' className='md:flex flex-col md:flex-row max-w-[75vw] h-[35vh] md:h-[55vh] mx-auto md:items-center  gap-2 justify-center  '>
        <AboutText  />
        <AboutImg />
    </div>
  )
}

export default AboutMain