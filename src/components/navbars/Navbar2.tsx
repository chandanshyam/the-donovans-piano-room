import { navigationPages } from '@/utils/general'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar2(){
    // const highlightLink = {color: "#DA6A1C"}
    // const displayBorder = () => <div className='w-full bg-tertiary-orange absolute bottom-0 rounded-tl-xl rounded-tr-xl' style={{height: "3px"}}></div>
  return (
    <nav className='fixed top-0 w-full z-40 bg-primary-purple border-b-2 border-[#A135E8]'>
        <div className='fixed bg-[#601D86] pl-40 pr-4 rounded-r-full'>
            <Image src="/navbar/Logo2.svg" width={225} height={32} alt='The Donovan&apos;s Piano Room' />
        </div>
        <div className='flex float-right h-24 p-y-50 mr-36 gap-16'>
            <Link className='text-primary-yellow text-xl font-bold flex items-center relative' href="/">
             <p>HOME</p>
            </Link>
            <Link className='text-primary-yellow text-xl font-bold flex items-center relative' href="/about/why-choose-us">
              <p>ABOUT</p>
            </Link>
            <Link className='text-primary-yellow text-xl font-bold flex items-center relative' href="#">
              <p>GAMES</p>
            </Link>
            <Link className='text-primary-yellow text-xl font-bold flex items-center relative' href="#">
             <p>BOOKSTORE</p>
            </Link>
            <Link className='text-primary-yellow text-xl font-bold flex items-center relative' href="#">
             <p>CONTACT</p>
            </Link>
            <Link className='text-primary-yellow text-xl font-bold flex items-center' href="#"><Image src="/navbar/CartYellow.svg" width={40} height={40} alt='Cart'/></Link>
            <Link className='text-primary-purple bg-primary-yellow rounded-l-full rounded-r-full px-20 h-16 mt-4 flex items-center text-xl font-bold' href="/register">Log in or register</Link>
        </div>

    </nav>
  )
}
