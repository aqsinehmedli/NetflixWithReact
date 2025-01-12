import MovieCards from './MovieCards'
import CustomerSelect from './CustomerSelect'
import { useState, useEffect } from 'react'
import ScrollButton from '../../../common/ScrollButton'

const TrendingFilms = ({ scrollY, setItem, setModalOpen }) => {
    const [data, setData] = useState([])
    const [selectedOption, setSelectedOption] = useState({ title: "Movies", value: "movie" })
    const [selectedItem, setSelectedItem] = useState(null)
    const options = [{ title: "Movies", value: "movie" }, { title: "TV Shows", value: "tv" }]
    const getData = async () => {
        try {
            const response = await fetch(`https://ilkinibadov.com/api/v1/${selectedOption.value}/trending`)
            const data = await response.json()
            setData(data.content)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getData()
    }, [selectedOption])
    useEffect(() => {
        if (selectedItem) {
            setModalOpen(true)
        }
    }, [selectedItem])
    return (
        <div className='w-full py-20 relative'>
            <h3 className='text-white text-2xl pl-7 ml-12 font-semibold mb-4'>Trending Now</h3>
            <div className='pl-7 ml-12'>
                <CustomerSelect selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    options={options} />
            </div>
            <div className='relative'>
                <ScrollButton direction="left" />
                <div id='movie-card-container' className='overflow-x-auto space-x-4 no-scrollbar w-full flex gap-12 py-5 pl-10 ml-12'>
                    {data.map((item, index) => <MovieCards setSelectedItem={setSelectedItem} setItem={setItem} setModalOpen={setModalOpen} item={item} index={index} />)}
                </div>
                <ScrollButton direction="right" />
            </div>
        </div>
    )
}

export default TrendingFilms