import Image from 'next/image'
import React from 'react'

export default function BackgroundAuth() {
  return (
    <>
        <Image className='absolute top-0 right-0' src="/background-icons/RightTop1.svg" alt='' width={135} height={135}/>
        <Image className='absolute bottom-0 left-[45%]' src="/background-icons/YellowStar.svg" alt='' width={100} height={100}/>
        <Image className='absolute bottom-[50%] left-0' src="/background-icons/OrangeCircle.svg" alt='' width={50} height={50}/>
        <Image className='absolute bottom-0 left-0' src="/background-icons/LeftBottom.svg" alt='' width={270} height={270}/>
        <Image className='absolute bottom-[15%] left-0' src="/background-icons/GreenLeftBottom.svg" alt='' width={130} height={100}/>
        <Image className='absolute top-[15%] left-[35%]' src="/background-icons/Elipse216DarkPurple.svg" alt='' width={90} height={90}/>
        <Image className='absolute top-[25%] left-[29%]' src="/background-icons/DarkPurpleDot.svg" alt='' width={20} height={20}/>
        <Image className='absolute bottom-[7%] left-[30%]' src="/background-icons/DoodleDarkPurple.svg" alt='' width={450} height={400}/>
        <Image className='absolute top-[25%] left-[53%]' src="/background-icons/DarkPurpleDot.svg" alt='' width={20} height={20}/>
    </>
  )
}
