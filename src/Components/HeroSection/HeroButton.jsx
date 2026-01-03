import React from 'react'

const HeroButton = () => {
  return (
    <div className='block md:hidden'> <button className='px-4 py-2 rounded-full text- 2xl -mt-9 mb-2 font-bold font-[Josefin] text-[var(--color-black)] border-[var(--color-cyan)] border flex items-center gap-1 bg-gradient-to-r  from-[var(--color-darkCyan)] to-[var(--color-orange)] transition-all duration-500 hover:scale-110 hover:border-[var(--color-orange)] cursor-pointer '>
      <a href="/muhammad-ammar-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center">
        <p className=" block md:hidden">Download Resume </p>
      </a>
    </button></div>
  )
}

export default HeroButton