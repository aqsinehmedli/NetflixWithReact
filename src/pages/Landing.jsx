import React, { useEffect } from 'react'
import Entry from './components/Entry'
import { useState } from 'react'
import TrendingFilms from './components/TrendingFilms'
const Landing = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [item, setItem] = useState(null)
    const [data, setData] = useState({})
    const gettData = async () => {
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
            setModalOpen(true)
            gettData()

        }
    }, [item])
    return (
        <div className={`bg-black w-full relative ${modalOpen ? "h-screen overflow-hidden" : ""}`}>
            <Entry />
            <div class="relative w-screen -mt-12 h-[50px] border-4 border-transparent bg-gradient-to-r from-pink-700 via-red-600 to-pink-700 bg-clip-border rounded-tl-[50%_100%] rounded-tr-[50%_100%]">
                <div className="absolute -left-[4px] top-[1px] h-[50px] w-screen bg-gradient-to-b rounded-tl-[50%_90%] rounded-tr-[50%_90%] from-blue-950 from-10% to-black to-90%"></div>
            </div>
            <TrendingFilms setModalOpen={setModalOpen} setItem={setItem} />
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