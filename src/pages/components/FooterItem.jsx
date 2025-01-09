import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterItem = ({item}) => {
  const {t} = useTranslation()

  return (
    <div className='flex flex-col w-full hover:cursor-pointer h-full gap-[12px]'>
        {
            item.map(columnItem => <a href="#"  className='text-white/70 underline'>
                {t(columnItem)}
            </a> )
        }
    </div>
  )
}

export default FooterItem