import React, { useEffect } from 'react'
import Entry from './Entry'
import { useState } from 'react'
import TrendingFilms from './TrendingFilms'
import Arch from './Arch'
import ReasonToJoin from './ReasonToJoin'
import FAQ from './FAQ'
import Footer from './Footer'
import GenresItem from './GenresItem'
import { motion } from 'motion/react'
import { img } from 'motion/react-client'
const Landing = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [item, setItem] = useState(null)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${item.media_type}/${item.id}/details`)
            const data = await response.json()
            setData(data.content)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (item) {
            setModalOpen(true)
            getData()
        }
    }, [item])
    useEffect(() => {
        if (item) {
            setModalOpen(true)
            getData()
        }
    }, [item])
    return (
        <div className={`bg-black w-full relative ${modalOpen ? "h-screen overflow-hidden" : ""}`}>

            <Entry />
            <Arch />
            <TrendingFilms setItem={setItem} />
            <ReasonToJoin />
            <FAQ />
            <Footer />
            <div>
                {
                    modalOpen &&
                    <div style={{ top: scrollY }} onClick={() => {
                        setModalOpen(false)
                        setItem(null)
                    }} className='absolute left-0 w-full h-screen bg-black/50 flex items-center justify-center'>
                        {loading ? <img className='size-[100px]' src='https://i.sstatic.net/kOnzy.gif'></img> : <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
                            <div className='size-[620px] border-px border-zinc-300 rounded-lg bg-zinc-900 overflow-y-scroll relative'>
                                <button onClick={() => {
                                    setModalOpen(false)
                                    setItem(null)
                                }} className='z-10 absolute top-4 right-4 size-[30px] hover:bg-zinc-500/25 hover:cursor-pointer rounded-full p-2 flex items-center justify-center'>
                                    <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                                </button>
                                <div onClick={
                                    (e) => {
                                        e.stopPropagation()
                                    }
                                } className="relative">
                                    <div className="absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-transparent via-55% flex items-end">
                                        <h3 className='text-white text-5xl font-bold ml-8 mb-6'>{data.media_type === "movie" ? data.title : data.name}</h3>
                                    </div>
                                    <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" />
                                </div>
                                <div onClick={
                                    (e) => {
                                        e.stopPropagation()
                                    }
                                } className='px-8 pb-5'>
                                    <GenresItem data={data} />
                                    <p className='text-white'>{data.overview}</p>
                                    <button className="flex items-center justify-center bg-[#e50914] hover:bg-[#ce272ffb] text-white h-full px-4 py-3 pr-6 gap-4 rounded-[4px] mt-5">Get Started
                                        <svg className="w-[12px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Landing