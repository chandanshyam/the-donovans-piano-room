import Image from 'next/image'
import React from 'react'

export default function BackgroundLayout() {
  return (
    <>
      <Image src="/about/Doodle1.svg" width={450} height={712} className='absolute' style={{top: '17.5vh'}} alt=''/>
      <Image src="/about/Ellipse216.svg" width={93} height={60} className='absolute' style={{top: '12.5vh',left: '33vw'}} alt='' />
      <Image src='/about/LeftBottom.svg' width={317} height={286} className='absolute bottom-0' alt='' />
      <Image src="/about/Ellipse218.svg" width={93} height={60} className='absolute' alt='' style={{bottom: "13vh", right: "30vw"}} />
      <Image src="/about/Doodle2.svg" width={557} height={712} className='absolute right-0' style={{bottom: "8vh"}} alt=''/>
      <Image src="/about/Ellipse219.svg" width={93} height={60} className='absolute right-5 bottom-14' alt='' />
      <Image src='/about/RightTop.svg' width={200} height={286} className='absolute right-0 top-3' alt='' />
    </>
  )
}
