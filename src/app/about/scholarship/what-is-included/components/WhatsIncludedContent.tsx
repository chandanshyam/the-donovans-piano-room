import React from 'react'
import AboutMembershipNav from '../../components/AboutMembershipNav'
import { aboutNavigationPages, aboutScholarshipNavigation } from '@/utils/general'
import Image from 'next/image'

export default function WhatsIncludedContent() {
  return (
    <div className='flex flex-col justify-center items-center h-full gap-[5%]'>
        <h2 className='text-primary-brown text-7xl font-semibold'>Unlock Potential with Scholarship Power!</h2>
        <AboutMembershipNav page={aboutScholarshipNavigation.whatsIncluded} />
        <div className='flex items-center justify-center w-full h-3/6'>
            <div className='w-[23.5%] h-full bg-white border-2 border-[#FCF0D8] rounded-3xl shadow-[#AC7A2280] shadow-[rgba(0,0,15,0.5)_2px_3px_4px_0px] px-12 py-5'>
                <Image src="/about/scholarship/what-is-included/Icon1.svg" height={47} width={47} alt=''/>
                <h4 className='text-2xl mt-4 laptop:mt-8 laptop:text-4xl desktop:text-5xl'>Free Access to The Donovan&apos;s Piano Room</h4>
                <p className='text-lg mt-4 laptop:mt-8 laptop:text-2l desktop:text-3xl'>Students are provided with complimentary access to The Donovan&apos;s Piano Room, where they can engage in various activities related to music learning.</p>
            </div>
        </div>
    </div>
  )
}
