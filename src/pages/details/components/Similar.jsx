import { useState, useEffect } from "react"
import { useStore } from "zustand"
import { themeStore } from "../../../common/Store"
import Card from "../../../common/Card"

const Similar = ({ id, type }) => {
    const [data, setData] = useState([])
    const { accessToken } = useStore(themeStore)

    const getSimilar = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/similar`, {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }
            })
            const data = await response.json()
            if (response.ok) {
                setData(data.similar)
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getSimilar()
    }, [type, id])

    return (
        <div className="mt-10 bg-black">
            <h2 className="text-white text-2xl mb-3">Similar {type === "tv" ? "TV Shows" : "Movies"}</h2>
            <div className="relative">
                <div id="movie-card-container" className="flex items-center  no-scrollbar overflow-x-auto space-x-4 no-scrollbar w-full  gap-12 py-5">
                    {data.map(item => <Card item={item} type={type} />)}
                </div>
            </div>
        </div>
    )
}

export default Similar