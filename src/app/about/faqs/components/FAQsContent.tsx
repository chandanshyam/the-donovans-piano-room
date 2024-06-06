import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import QuestionAndAnswer from './QuestionAndAnswer'
import './FAQsContent.css'

export default function FAQsContent() {
  return (
    <div className='flex flex-col items-center justify-center h-full overflow-auto'>
        <div className='h-[82%] w-[90%]'>
            <h4 className='text-secondary-brown text-6xl font-medium text-center'>Your questions, answered.</h4>
            <div className='flex justify-between w-full mt-6'>
                <div className='w-full select-none'>
                    <QuestionAndAnswer question='Does The Donovan&apos;s Piano Room only teach piano?' answer='No! The Donovan&apos;s Piano room teaches piano, guitar, vocals, sight reading, music theory lessons and more!' />
                    <QuestionAndAnswer question='Does The Donovan&apos;s Piano Room only teach piano?' answer='No! The Donovan&apos;s Piano room teaches piano, guitar, vocals, sight reading, music theory lessons and more!' />
                    
                    <QuestionAndAnswer question='How can I get access to The Donovan&apos;s Piano Room?' answer='' />
                    <QuestionAndAnswer question='Are these lessons only for beginners?' answer='' />
                    <QuestionAndAnswer question='What is included in the membership?' answer='' />
                    <QuestionAndAnswer question='Are the classes face-to-face or online?' answer='' />
                    <QuestionAndAnswer question='Is it only for kids?' answer='' />
                </div>
                <div>
                    <div className='bg-[#FCF0D8] p-7 rounded-2xl w-[230px]'>
                        <Image className='mb-4' src='/about/FAQs/CatImage.svg' alt='' width={90} height={90}/>
                        <p className='font-semibold text-[13px] mb-4 text-gray-800'>Still got questions? Reach out!</p>
                        <Link className='w-[145px] self-center text-white bg-primary-purple rounded-l-full rounded-r-full py-3 flex items-center justify-center text-xl font-bold' href=''>Contact us</Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
