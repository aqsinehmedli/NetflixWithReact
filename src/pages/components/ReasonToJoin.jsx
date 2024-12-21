import television from "../../assets/images/television.svg"
import profile from "../../assets/images/profile.svg"
import telescope from "../../assets/images/telescope.svg"
import download from "../../assets/images/download.svg"
import ReasonCard from "./ReasonCard"
const ReasonToJoin = () => {
    const items = [
        {
            title: "Enjoy on your TV",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: television
        },
        {
            title: "Download your shows to watch offline",
            desc: "Save your favorites easily and always have something to watch.",
            img: download
        },
        {
            title: "Watch everywhere",
            desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            img: telescope
        },
        {
            title: "Create profiles for kids",
            desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            img: profile
        },

    ]

    return (
        <div className="grid grid-cols-4 ml-[80px] mb-[100px] mr-[80px] gap-4">
            <h2 className='text-white font-bold text-[24px] col-span-4'>More Reasons to Join</h2>
            {items.map(item => <ReasonCard item={item} />)}
        </div>
    )
}

export default ReasonToJoin