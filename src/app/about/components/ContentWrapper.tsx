import React from 'react'
import Footer1 from '../../../components/footers/Footer1'
import BackgroundLayout from '../components/BackgroundLayout'
import ContentNav from '../components/ContentNav'

export default function ContentWrapper({children, page}: {children: React.ReactNode, page: string}) {
  return (
    <>
      <div className='flex flex-col relative items-center justify-center w-full h-full z-40'>
        <ContentNav page={page} />
        <div className='border bg-[#FEF8EE] rounded-xl border-primary-purple mt-4 h-[60%] w-[84.7%]'>
          {children}
        </div>
      </div>
      <BackgroundLayout />
      <Footer1 />
    </>
  )
}
