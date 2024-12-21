import EmailInput from './EmailInput'
import FooterColumn from './FooterColumn'
import CustomerSelect from './CustomerSelect'
import { useState } from 'react'
const Footer = () => {
  const [selectedLanguages, setSelectedLanguages] = useState("English")
  const language = ["English", "Russian"]
  const svgLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-4 top-3 size-[10px]' viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
  )
  return (
    <div className='bg-black w-full h-screen mt-[64px]'>
      <h3 className='font-semibold text-[16px] text-white text-center'>Ready to watch? Enter your email to create or restart your membership.</h3>
      <EmailInput />

      <FooterColumn />
      <div className='w-[30px] h-[35px] ml-[80px] mb-[100px] mt-[42px]'>
        <CustomerSelect selectedOption={selectedLanguages} setSelectedOption={setSelectedLanguages} options={language}
          logo={svgLogo}
        />
        <div className='w-[200px] text-white/70 font-semibold mt-[40px]'>
          <p className='text-white'>Netflix Azerbaijan</p>

        </div>
      </div>

    </div>
  )
}

export default Footer