import React from 'react'
import { useState,useEffect } from 'react'
import CustomerSelect from './CustomerSelect'
import MovieCards from './MovieCards'
const TrendingFilms = ({setModalOpen,setItem}) => {
    const [data,setData] = useState([])
    const [selectedOption,setSelectedOption] = useState("Movie")
    const options = ["Movie","TV"]


    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${selectedOption.toLowerCase()}/trending`)
            const data = await response.json()
            setData(data.content)
            
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getData()
    },[selectedOption])
  return (
    <div className='w-auto ml-[80px] mr-[80px] relative no-scrollbar'>
        <h3 className='text-2xl text-white font-semibold mb-4'>Trending Now</h3>
        <CustomerSelect 
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={options}/>
        <div className='w-auto h-auto no-scrollbar flex gap-12 overflow-scroll py-5 pl-7'>
            {data.map((item,index) => <MovieCards setModalOpen={setModalOpen} setItem={setItem} item={item} index={index}/>)}
        </div>
        
    </div>
  )
}

export default TrendingFilms