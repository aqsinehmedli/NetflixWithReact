import React from 'react'
import EmailInput from './EmailInput'

const Footer = () => {
  return (
    <div className='bg-black w-full h-screen'>
        <h3 className='font-semibold text-[16px] text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <EmailInput/>

    </div>
  )
}

export default Footer