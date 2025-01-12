import { useLocation } from "react-router"
import { useStore } from "zustand"
import { themeStore } from "../../common/Store"
import { useEffect, useState } from "react"
import Similar from "./components/Similar"
import { div } from "motion/react-client"

const Details = () => {
    const [detailsData, setDetailsData] = useState({})
    const [trailersData, setTrailersData] = useState({})
    const { accessToken } = useStore(themeStore)
    const { id, type } = useLocation().state

    const getDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/details`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            })
            const data = await response.json()
            if (response.ok) {
                setDetailsData(data.content)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getTrailers = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${movie}/${id}/trailers`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            })

            const data = await response.json()

            if (response.ok) {
                setTrailersData(data.trailers[0])
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getDetails()
        getTrailers()
    }, [id, type])

    return (
        <div className="bg-black pt-4">
            <iframe className="w-[800px] h-[400px] mx-auto"
                src={`https://www.youtube.com/embed/${trailersData[0]?.key}`}>
            </iframe>
            <div className="p-10">
                <h1 className="text-white text-4xl">{detailsData.name ? detailsData.name : detailsData.title}</h1>
                <div className="flex items-center gap-2 my-5">
                    {detailsData?.genres?.map(item => <div className="text-white bg-zinc-800 w-fit p-3 rounded-[4px]">{item.name}</div>)}
                </div>
                <p className="text-white">{detailsData?.overview}</p>
                <Similar id={id} type={type} />
            </div>
        </div>
    )
}

export default Details