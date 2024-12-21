import React from 'react'

const FooterItem = ({item}) => {
  return (
    <div className='flex flex-col w-full hover:cursor-pointer h-full gap-[12px]'>
        {
            item.map(columnItem => <a href="#"  className='text-white/70 underline'>
                {columnItem}
            </a> )
        }
    </div>
  )
}

export default FooterItem