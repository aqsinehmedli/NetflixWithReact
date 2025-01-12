import React from 'react'
import { useTranslation } from 'react-i18next'
const EmailInput = () => {
  const { t } = useTranslation()
  return (
    <div className='flex items-center mx-auto mt-12 h-[60px] w-[580px]'>
      <input className='rounded-[4px] text-white w-full h-full px-4 gap-4 mr-2 bg-transparent border-[1px] border-zinc-400' placeholder={t('emailPlaceholder')} type="text" />
      <button className='flex items-center min-h-full min-w-[230px] text-white font-semibold text-2xl pr-8 rounded-[4px] py-3 px-4 gap-4 bg-[rgb(229,9,20)] hover:bg-[#7E0309E5]'>{t('getStartedButton')}
        <svg className='w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
      </button>
    </div>
  )
}

export default EmailInput