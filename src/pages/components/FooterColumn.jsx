import React from 'react'
import FooterItem from './FooterItem'
import { useTranslation } from 'react-i18next'

const FooterColumn = () => {
    const [t] = useTranslation()
    const items = [
        [
            "footerFAQ",
            "footerInvestorRelations",
            "footerPrivacy",
            "footerSpeedTest"
        ],
        [
            "footerHelpCenter",
            "footerJobs",
            "footerCookiePreferences",
            "footerLegalNotices"
        ],
        [
            "footerAccount",
            "footerWaysToWatch",
            "footerCorporateInformation",
            "footerOnlyOnNetflix"
        ],
        [
            "footerMediaCenter",
            "footerTermsOfUse",
            "footerContactUs"
        ]
    ]
  return (
    <div className='grid grid-cols-4 hover:cursor-pointer ml-[80px] mt-[44px] mr-[80px] gap-4"'>
            <h4 className='font-semibold text-[rgba(255,255,255,0.7);] col-span-4 mb-[32px] underline'>{t('netflixQuestion')}</h4>
        {
            items.map(item => <FooterItem item={item}/>)
        }
    </div>
  )
}

export default FooterColumn