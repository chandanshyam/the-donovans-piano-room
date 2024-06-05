import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FAQsContent() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <div className='h-[82%] w-[90%]'>
            <h4 className='text-primary-brown text-6xl font-medium text-center'>Your questions, answered.</h4>
            <div className='flex'>
                <div className='bg-[#FCF0D8] p-7 rounded-2xl'>
                    <Image className='mb-4' src='/about/FAQs/CatImage.svg' alt='' width={90} height={90}/>
                    <p className='font-semibold text-[13px] mb-4 text-gray-800'>Still got questions? Reach out!</p>
                    <Link className='w-[145px] self-center text-white bg-primary-purple rounded-l-full rounded-r-full py-3 flex items-center justify-center text-xl font-bold' href=''>Contact us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
