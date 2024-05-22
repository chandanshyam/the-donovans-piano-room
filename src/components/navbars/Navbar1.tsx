import { navigationPages } from '@/utils/general'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar1({page}: {page: string}) {
    const highlightLink = {color: "#DA6A1C"} // border bottom needs work
  return (
    <nav className='fixed top-0 w-full z-40 bg-white b'>
        <div className='fixed bg-secondary-purple pl-40 pr-4 rounded-r-full'>
            <Image src="/navbar/Logo.svg" width={225} height={32} alt='The Donovan&apos;s Piano Room' />
        </div>
        <div className='flex float-right h-24 p-y-50 mr-36 gap-16'>
            <Link className='text-primary-purple text-xl font-bold flex items-center' style={navigationPages.home === page ? highlightLink: {}} href="/">HOME</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' style={navigationPages.about === page ? highlightLink : {}} href="/about/why-choose-us">ABOUT</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' style={navigationPages.games === page ? highlightLink: {}} href="#">GAMES</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' style={navigationPages.bookstore === page ? highlightLink: {}} href="#">BOOKSTORE</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' style={navigationPages.contact === page ? highlightLink: {}} href="#">CONTACT</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' style={navigationPages.games === page ? highlightLink: {}} href="#">GAMES</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' href="#"><Image src="/navbar/Cart.svg" width={20} height={20} alt='Cart'/></Link>
            <Link className='text-white bg-primary-purple rounded-l-full rounded-r-full px-20 h-16 mt-4 flex items-center text-xl font-bold' href="/register">Log in or register</Link>
        </div>

    </nav>
  )
}
