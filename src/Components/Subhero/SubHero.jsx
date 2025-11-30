import React from 'react'

const SubHero = () => {
  return (
    <div className='md:flex flex justify-center md:justify-around bg-[var(--color-lightGrey)] p-3 border-1 border-[var(--color-orange)] mt-3 '>
        <h3 className='text-[var(--color-brown)] text-2xl font-semibold'>Enthusiastic</h3>
        <h3 className='md:block hidden text-[var(--color-brown)] text-3xl font-semibold'>Quick Learner</h3>
        <h3 className='md:block hidden text-[var(--color-brown)] text-2xl font-semibold'>Motivated</h3>
    </div>
  )
}

export default SubHero