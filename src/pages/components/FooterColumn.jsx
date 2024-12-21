import React from 'react'
import FooterItem from './FooterItem'
const FooterColumn = () => {
    const items = [
        [
            "FAQ",
            "Investor Relations",
            "Privacy",
            "Speed Test"
        ],
        [
            "Help Center",
            "Jobs",
            "Cookie Preferences",
            "Legal Notices"
        ],
        [
            "Account",
            "Ways to Watch",
            "Corporate Information",
            "Only on Netflix"
        ],
        [
            "Media Center",
            "Terms of Use",
            "Contact Us"
        ]
    ]
  return (
    <div className='grid grid-cols-4 hover:cursor-pointer ml-[80px] mt-[44px] mr-[80px] gap-4"'>
            <h4 className='font-semibold text-[rgba(255,255,255,0.7);] col-span-4 mb-[32px] underline'>Questions? Contact us.</h4>
        {
            items.map(item => <FooterItem item={item}/>)
        }
    </div>
  )
}

export default FooterColumn