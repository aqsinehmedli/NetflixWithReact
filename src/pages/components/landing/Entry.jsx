import React from 'react'
import EmailInput from './EmailInput'
import Navbar from './Navbar'
import { useTranslation } from 'react-i18next'
const Entry = () => {
  const { t } = useTranslation()
  return (
    <div className='h-screen w-full px-[8rem] bg-cover bg-black/75 bg-blend-overlay bg-no-repeat bg-center bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg)]'>
      <Navbar />
      <div className='min-w-[620px] mx-auto my-auto pt-[110px]'>
        <h1 className='text-white font-inter font-bold text-[60px] text-center leading-[65px]'>{t('entryTitle')}</h1>
        <p className='font-bold flex items-center justify-center text-[20px] text-white leading-[50px] '>{t('entrySubtitle')}</p>
        <p className='font-regular text-base text-center mt-7 text-white'>{t('ready')}</p>
        <EmailInput />
      </div>
    </div>
  )
}

export default Entry