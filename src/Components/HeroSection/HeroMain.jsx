import React from 'react'
import HeroText from './HeroText'
import HeroImg from './HeroImg'
import HeroButton from './HeroButton'

const HeroMain = () => {
  return (
    <div id='about'   className="flex mx-auto md:flex-row flex-col pt-[10vh] md:pt-[25vh] lg:gap-20 md:gap-10 items-center justify-center gap-5 max-w-[75vw] min-h-[50vh] ">
        <HeroText />
        <HeroImg/>
<HeroButton/>
    </div>
  )
}

export default HeroMain