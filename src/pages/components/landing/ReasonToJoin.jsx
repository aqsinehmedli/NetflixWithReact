import television from "../../../assets/images/television.svg"
import profile from "../../../assets/images/profile.svg"
import telescope from "../../../assets/images/telescope.svg"
import download from "../../../assets/images/download.svg"
import ReasonCard from "./ReasonCard"
import { useTranslation } from 'react-i18next'

const ReasonToJoin = () => {
    const { t } = useTranslation()
    const items = [
        {
            title: "enjoyOnTv",
            desc: "enjoyOnTvDescription",
            img: television
        },
        {
            title: "downloadToWatchOffline",
            desc: "downloadToWatchOfflineDescription",
            img: download
        },
        {
            title: "watchEverywhere",
            desc: "watchEverywhereDescription",
            img: telescope
        },
        {
            title: "createProfilesForKids",
            desc: "createProfilesForKidsDescription",
            img: profile
        },

    ]
    return (
        <div className="grid grid-cols-4 ml-[80px] mb-[100px] mr-[80px] gap-4">
            <h2 className='text-white font-bold text-[24px] col-span-4'>{t('moreReasonsTitle')}</h2>
            {items.map(item => <ReasonCard item={item} />)}
        </div>
    )
}

export default ReasonToJoin