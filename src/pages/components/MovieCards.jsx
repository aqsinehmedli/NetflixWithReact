import React from 'react'

const MovieCards = ({item,index,setModalOpen,setItem}) => {
  return (
    <div onClick={() => {
      setItem(item.id)
      setModalOpen(true)
    }} className='relative hover:scale-110 transition duration-150 ease-in min-w-[180px] mt-5 h-[250px]'>
        <p className='absolute z-10 -left-7 bottom-12 text-[100px] drop-shadow-[0_0_4px_#fff] font-bold'>{index +1}</p>
        <img className='absolute z-0 w-[220px] h-[222px] rounded-lg  objext-scale-down' src={` https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
    </div>
  )
}

export default MovieCards