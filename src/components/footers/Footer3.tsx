import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer3() {
  return (
    <div className='fixed flex justify-center items-center bottom-0 w-full border-t-2 border-[#A135E8] backdrop-blur-sm' style={{height: '70px'}}>
        <div className='flex justify-between h-[28px]' style={{width: '84.7%'}}>
            <h2 className='text-black'
            style={{width: '290px'}}
            >Copyright © 2024 The Donovan&apos;s Piano Room. Powered by <Link className='text-primary-purple underline' target='_blank' href='https://www.thedonovan.org/'>The Donovan&apos;s Venom</Link>, a 501(c)(3) nonprofit organization.</h2>
            <div className='flex gap-8'>
                <Image src="/footer/Twitter.svg" width={40} height={40} alt='Twitter' />
                <Image src='/footer/Facebook.svg' width={40} height={40} alt='Facebook' />
                <Image src='/footer/Youtube.svg' width={40} height={40} alt='Youtube' />
            </div>
        </div>
    </div>
  )
}
