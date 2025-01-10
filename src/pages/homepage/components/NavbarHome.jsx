import React from 'react'
import Homepage from '../Homepage'
import { useNavigate } from 'react-router'
const NavbarHome = () => {
    const navigate = useNavigate()
    return (
        <div className='pt-5 flex gap-10 ml-12'>
            <img className='w-[160px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="" />
            <button onClick={() => {
                navigate('/home')
            }} className='text-[22px] text-white'>Home</button>
            <button className='text-[22px] text-white'>Movies</button>
            <button className='text-[22px] text-white'>Movies</button>
        </div>
    )
}

export default NavbarHome