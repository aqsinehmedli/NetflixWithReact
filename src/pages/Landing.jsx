import React, { useEffect } from 'react'
import Entry from './components/Entry'
import { useState } from 'react'
import TrendingFilms from './components/TrendingFilms'
import Arch from './components/Arch'
import ReasonToJoin from './components/ReasonToJoin'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
const Landing = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [item, setItem] = useState(null)
    const [data, setData] = useState({})
    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${item.media_type}/${item.id}`)
            const data = await response.json()
            setData(data.content)
            console.log(data.content)

        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (item) {
            console.log(item)
            setModalOpen(true)
            getData()

        }
    }, [item])
    console.log(data)
    return (
        <div className={`bg-black w-full relative ${modalOpen ? "h-auto overflow-hidden" : ""}`}>
            <Entry />
            <Arch />
            <TrendingFilms setModalOpen={setModalOpen} setItem={setItem} />
            <ReasonToJoin/>
            <FAQ/>
            <Footer/>
            {
                modalOpen && <div className='absolute left-0 top-0 w-screen h-screen bg-black/30 flex items-center justify-center'>
                    <div className='size-[620px] border-[1px] rounded-lg bg-zinc-900'>
                        <img className='w-full' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" />
                    </div>
                </div>

            }
        </div>

    )
}

export default Landing