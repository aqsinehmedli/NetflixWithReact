import React from 'react'
import EmailInput from './EmailInput'
import Navbar from './Navbar'
const Entry = () => {
  return (
    <div className='h-screen w-full px-[8rem] bg-cover bg-black/75 bg-blend-overlay bg-no-repeat bg-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg)]'>
    <Navbar/>
    <div className='w-[620px] mx-auto my-auto pt-[130px]'>
            <h1 className='text-white font-bold text-[60px] text-center leading-[65px]'>Unlimited movies, TV shows, and more</h1>
            <p className='font-bold flex items-center justify-center text-[20px] text-white leading-[50px] '>Starts at EUR 7.99. Cancel anytime.</p>
            <p className='font-regular text-base text-center mt-7 text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
            <EmailInput/>

        </div>
    </div>

        

  )
}

export default Entry