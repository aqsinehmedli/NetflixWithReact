import FAQItem from './FAQItem'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const { t } = useTranslation()
    const items = [
        {
            title: "whatIsNetflix",
            desc: "whatIsNetflixDesc",
            id: 1
        },
        {
            title: "howMuchDoesNetflixCost",
            desc: "howMuchDoesNetflixCostDesc",
            id: 2
        },
        {
            title: "whereCanIWatch",
            desc: "whereCanIWatchDesc",
            id: 3
        },
        {
            title: "howDoICancel",
            desc: "howDoICancelDesc",
            id: 4
        },
        {
            title: "whatCanIWatchOnNetflix",
            desc: "whatCanIWatchOnNetflixDesc",
            id: 5
        },
        {
            title: "isNetflixGoodForKids",
            desc: "isNetflixGoodForKidsDesc",
            id: 6
        },
        {
            title: "ImSeen",
            desc: "ImSeenDesc",
            id: 7
        },
    ]
    return (
        <div className='flex flex-col gap-[8px] ml-[80px] mr-[95px]'>
            {items.map(item => <FAQItem openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} item={item} />)}
        </div>
    )
}

export default FAQ