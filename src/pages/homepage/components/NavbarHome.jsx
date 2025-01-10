import React from 'react'
import Homepage from '../Homepage'
import { useNavigate } from 'react-router'
const NavbarHome = ({selectedTab,setSelectedTab,navbarItems}) => {
    const navigate = useNavigate()
    return (
        <div className='pt-5 absolute ml-[90px] top-0 left-0 h-[64px] flex'>
            <img className='w-[160px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="" />
            <div className='flex gap-[28px] ml-[20px]'>
                {
                    navbarItems.map(item => <button onClick={() => {
                        setSelectedTab(item)
                    }} className={`text-[22px] text-white ${item.value === selectedTab.value && "font-bold"}`}>{item.title}</button>)
                }

            </div>
            
        </div>
    )
}

export default NavbarHome