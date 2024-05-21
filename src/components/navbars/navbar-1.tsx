import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const pages = {
    home: "home",
    about: "about",
    games: "games",
    bookstore: "bookstore",
    contact: "contact",
}
export default function Navbar1({page}: {page: string}) {
  return (
    <nav className='fixed top-0 w-full z-40 bg-white'>
        <div className='fixed bg-secondary-purple pl-40 pr-4 rounded-r-full'>
            <Image src="/navbar/Logo.svg" width={225} height={32} alt='The Donovan&apos;s Piano Room' />
        </div>
        <div className='flex float-right h-24 p-y-50 mr-36 gap-16'>
            <Link className='text-primary-purple text-xl font-bold flex items-center' href="/">HOME</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' href="/about/why-choose-us">ABOUT</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' href="#">GAMES</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' href="#">BOOKSTORE</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' href="#">CONTACT</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' href="#">GAMES</Link>
            <Link className='text-primary-purple text-xl font-bold flex items-center' href="#"><Image src="/navbar/Cart.svg" width={20} height={20} alt='Cart'/></Link>
            <Link className='text-white bg-primary-purple rounded-l-full rounded-r-full px-20 h-16 mt-4 flex items-center text-xl font-bold' href="/register">Log in or register</Link>
        </div>

    </nav>
  )
}
