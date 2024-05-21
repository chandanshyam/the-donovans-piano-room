import React from 'react'
import AboutFooter from '../components/AboutFooter'
import BackgroundLayout from '../components/BackgroundLayout'
import ContentNav, { pages } from '../components/ContentNav'

export default function ContentWrapper({children, page}: {children: React.ReactNode, page: string}) {
  return (
    <>
      <div className='flex relative items-center justify-center w-full h-full z-40'>
        <ContentNav page={page} />
        
      </div>
      <BackgroundLayout />
      <AboutFooter />
    </>
  )
}
