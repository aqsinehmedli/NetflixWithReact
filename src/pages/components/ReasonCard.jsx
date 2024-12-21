import React from 'react'

const ReasonCard = ({ item }) => {
    return (

        <div className='w-[274px] gap-4 rounded-[16px] relative h-[270px] bg-gradient-to-br from-[#192247] to-[#210E17]'>

            <h3 className='font-bold text-[24px] mt-[24px] mb-[17px] text-[#FFFFFF] ml-[13px]'>{item.title}</h3>
            <p className='font-semibold text-[16px] text-white/70 ml-[16px] mr-[16px]'>{item.desc}</p>
            <img className='size-[72px] absolute bottom-[16px] right-[12px]' src={item.img} alt="" />


        </div>

    )
}

export default ReasonCard