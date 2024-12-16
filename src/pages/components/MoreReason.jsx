import React from 'react'

const MoreReason = () => {
  return (
    <div className='bg-black h-screen w-full'>
        <h2 className='mt-10 font-bold ml-[51px] text-[20px] text-white'>More Reasons to Join</h2>
        <div className='flex justify-between p-[4px] m-[4px] h-[350px]'>
        <div className='flex flex-col items-center  w-[260px] h-[324px] mr-[10px] rounded-[20px] ml-10 bg-[#4B0082]'>
            <h3 className='font-bold text-[24px] text-white'>Enjoy on your TV</h3>
            <p className='font-semibold pl-[8px] mt-[15px] text-[rgba(255,255,255,0.7)] text-[16px]'>Watch on Smart TVs, <br /> Playstation, Xbox, <br /> Chromecast, Apple TV, Blu-  <br /> ray players, and more.</p>
            <svg className='w-[70px] mt-[100px] ml-[140px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#5b1351" d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
        </div>
        <div className='flex flex-col rounded-[20px] items-center w-[260px] h-[324px] mr-[10px] bg-[#4B0082]'>
            <h3 className='font-bold text-[24px] text-white'>Download your <br /> shows to  watch <br /> offline</h3>
            <p className='font-semibold mt-[15px] text-[rgba(255,255,255,0.7)] text-[16px]'>Save your favorites easily and <br /> always have something to <br /> watch.</p>
            <svg className='size-[500px] mt-[20px] ml-[140px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#561852" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </div>
        <div className='flex flex-col rounded-[20px] items-center w-[260px] h-[324px] mr-[10px] bg-[#4B0082]'>
            <h3 className='font-bold text-[24px] text-white'>Watch everywhere</h3>
            <p className='font-semibold mt-[15px] text-[rgba(255,255,255,0.7)] text-[16px]'>Stream unlimited movies and <br /> TV shows on your phone, <br /> tablet, laptop, and TV.</p>
        </div>
        <div className='flex flex-col rounded-[20px] items-center w-[260px] h-[324px] mr-[10px] bg-[#4B0082]'>
            <h3 className='font-bold text-[24px] text-white'>Create profiles for <br /> kids</h3>
            <p className='font-semibold mt-[15px] text-[rgba(255,255,255,0.7)] text-[16px]'>Send kids on adventures with <br /> their favorite characters in a <br /> space made just for them — <br /> free with your membership.</p>
            <svg className='mt-[20px] ml-[100px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#5b1354" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        </div>

        </div>
        
    </div>
  )
}

export default MoreReason