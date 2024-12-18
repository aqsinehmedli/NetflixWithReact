import React from 'react'

const CustomerSelect = ({selectedOption,setSelectedOption,options,logo}) => {
  return (
    <div className={`border-[1px] border-zinc-400 hover: bg-zinc-800 focus:outline-white relative rounded-[4px] ${logo ? "w-[135px] h-full" : "h-[33px] w-[110px]"}`}>
        {logo && logo}
        <select onChange={(e) => {
          setSelectedOption(e.target.value)
        }} className='opacity-0 w-full h-full hover:cursor-pointer'>
          {options?.map(item=><option value={item}>{item}</option>)}
        </select>
        
        <p className='absolute top-1 left-7 text-white'>{selectedOption}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-4 top-3 w-[10px]' viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      

    </div>
  )
}

export default CustomerSelect