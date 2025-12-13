import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'


const ContectMain = () => {
  return (
    <div id='contact' className='bg-[var(--color-brown)] md:flex md:flex-row flex-col  p-5 rounded-lg max-w-[98vw] mx-auto'>
        
        <ContactLeft />
        <ContactRight />
    </div>
  )
}

export default ContectMain