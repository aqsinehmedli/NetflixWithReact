import React, { useEffect, useState } from 'react'
import NavbarHome from './components/NavbarHome'
import { useNavigate } from 'react-router'
import { useStore } from 'zustand'
import { themeStore } from '../../common/Store'
import { div } from 'motion/react-client'
const Homepage = () => {
  const [trendingMovies,setTrendingMovies] = useState([])
  const [trendingShows,setTrendingShows] = useState([])
  const {accessToken} = useStore(themeStore)
  const [backgroundItem,setBackgroundItem] = useState(null)
  const getTrendingMovies = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/v1/movie/trending ")
      const data = await response.json()
      if(response.ok){
        setTrendingMovies(data.context)
        console.log("salam",data.context)
        // setBackgroundItem(data.context[0])
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getTrendingShows = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/v1/tv/trending")
      const data = await response.json()
      if(response.ok){
        setTrendingShows(data.context)
      }
    } catch (error) {
      console.error(error)
    }

  }
  useEffect(() => {
    getTrendingMovies();
    getTrendingShows();
  }, [])  

  return (
    backgroundItem &&  <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundItem.packdrop_item})`}}  className='bg-black w-full h-screen  px-[8rem] bg-cover bg-black/75 bg-blend-overlay bg-no-repeat bg-center'>
      <div>
        <h2>{backgroundItem.title}</h2>
      </div>
      <NavbarHome />
    </div>
 
  )
}

export default Homepage
