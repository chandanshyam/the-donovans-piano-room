import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutFooter() {
  return (
    <div className='fixed flex justify-center items-center bottom-0 w-full border-t-2 border-t-primary-purple' style={{height: '50px'}}>
        <div className='flex justify-between' style={{width: '84.7%', height: '28px'}}>
            <h2 
            style={{width: '290px'}}
            >Copyright © 2024 The Donovan&apos;s Piano Room. Powered by <Link className='text-primary-purple underline' target='_blank' href='https://www.thedonovan.org/'>The Donovan&apos;s Venom</Link>, a 501(c)(3) nonprofit organization.</h2>
            <div className='flex gap-8'>
                <Image src="/about/icons/Twitter.svg" width={23} height={23} alt='Twitter' />
                <Image src='/about/icons/Facebook.svg' width={23} height={23} alt='Facebook' />
                <Image src='/about/icons/Youtube.svg' width={23} height={23} alt='Youtube' />
            </div>
        </div>
    </div>
  )
}
