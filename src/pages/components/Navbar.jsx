import React, { useState,useEffect } from 'react'
import CustomerSelect from './CustomerSelect'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
const Navbar = () => {
  const {i18n} = useTranslation()
  const {t} = useTranslation()
  const navigate = useNavigate()
  const [selectedLanguage,setSelectedLanguage] = useState({title:"English",value:"en"},{title:"Russian",value:"ru"})
  const languages = [{title:"English",value:"en"},{title:"Russian",value:"ru"}]

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage.value)
  }, [selectedLanguage])
  
  const svgLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-4 top-3 w-[10px]' viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
  )
  return (
    <div className='flex items-center justify-between pt-5'>
    <img className='w-[160px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="" />
        <div className='flex items-center gap-2 h-[35px]'>
      
        <CustomerSelect selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} options={languages}
        logo={svgLogo}
        />
        <button onClick={() => {
          navigate('/login')
        }} className='text-[16px] text-white bg-[rgb(229,9,20)] hover:bg-[#7E0309E5] rounded-[4px] transition duration-100 easy-in font-semibold px-4 h-full'>{t('signIn')}</button>
        </div>  
    </div>

  )
   
}

export default Navbar