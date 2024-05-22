import React from 'react'
import AboutFooter from '../components/AboutFooter'
import BackgroundLayout from '../components/BackgroundLayout'
import ContentNav from '../components/ContentNav'

export default function ContentWrapper({children, page}: {children: React.ReactNode, page: string}) {
  return (
    <>
      <div className='flex flex-col relative items-center justify-center w-full h-full z-40'>
        <ContentNav page={page} />
        <div className='border bg-tertiary-yellow rounded-xl border-primary-purple mt-4' style={{width: '84.7%', height: "452px"}}>
          {children}
        </div>
      </div>
      <BackgroundLayout />
      <AboutFooter />
    </>
  )
}
