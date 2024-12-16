import React from 'react'
import CustomerSelect from './CustomerSelect'
import EmailInput from './EmailInput'
import TrendingFilms from '../../TrendingFilms/TrendingFilms'
import MoreReason from './MoreReason'
import Question from '../Question'
import Footer from './Footer'
const Entry = () => {
  return (
    <>
    
    

<div className='h-screen w-full px-[8rem] bg-cover bg-black/75 bg-blend-overlay bg-no-repeat bg-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg)]'>
        <div className='flex items-center justify-between pt-5'>
            <img className='w-[150px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="" />
            <div className='flex items-center gap-2 h-[35px]'>
            <CustomerSelect/>
            <button className='text-[16px] text-white bg-[rgb(229,9,20)] hover:bg-[#7E0309E5] rounded-[4px] transition duration-100 easy-in font-semibold px-4 h-full'>Sign In</button>
        </div>
        </div>
        <div className='w-[620px] mx-auto my-auto pt-[130px]'>
            <h1 className='text-white font-bold text-[60px] text-center leading-[65px]'>Unlimited movies, TV shows, and more</h1>
            <p className='font-bold flex items-center justify-center text-[20px] text-white leading-[50px] '>Starts at EUR 7.99. Cancel anytime.</p>
            <p className='font-regular text-base text-center mt-7 text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <EmailInput/>

    </div>
    <MoreReason/>
    <Question/>
    <Footer/>
      </>
  )
}

export default Entry