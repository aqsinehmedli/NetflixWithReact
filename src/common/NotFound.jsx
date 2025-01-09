import React from 'react'
import { useNavigate } from 'react-router'
const NotFound = () => {
  const navigate  = useNavigate()
  return (
    <div className='w-full font-bold h-screen flex items-center justify-center'>
      <p>Requested page is not available</p>
      <button className='bg-red-700 text-white rounded-[10px] w-[100px] h-[40px] ml-5' onClick={() => {
        navigate('/')
      }}>Go Back</button>
    </div>
  )
}

export default NotFound