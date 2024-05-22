import { aboutNavigationPages } from '@/utils/general'
import Link from 'next/link'
import React from 'react'

export default function ContentNav({page}: {page: string}) {
  return (
    <div className='flex gap-px h-12' style={{width: '70%'}}>
        <Link 
            className='flex-1 flex justify-center items-center p-8 rounded-tl-xl' style={{fontSize: "12px", backgroundColor: page !== aboutNavigationPages.whyChooseUs ? '#FFEBD5': '#D8BCFD'}}
            href="/about/why-choose-us"><p className='text-primary-brown font-bold' style={{}}>Why Choose Us</p></Link>
        <Link className='flex-1 flex justify-center items-center p-8' style={{fontSize: "12px", backgroundColor: page !== aboutNavigationPages.whoWeServe ? '#FFEBD5': '#D8BCFD'}} href="/about/who-we-serve"><p style={{}} className='text-primary-brown font-bold'>Who We Serve</p></Link>
        <Link className='flex-1 flex justify-center items-center p-8' style={{fontSize: "12px", backgroundColor: page !== aboutNavigationPages.membership ? '#FFEBD5': '#D8BCFD'}} href="#"><p style={{}} className='text-primary-brown font-bold'>Membership</p></Link>
        <Link className='flex-1 flex justify-center items-center p-8' style={{fontSize: "12px", backgroundColor: page !== aboutNavigationPages.scholarship ? '#FFEBD5': '#D8BCFD'}} href="#"><p style={{}} className='text-primary-brown font-bold'>Scholarship</p></Link>
        <Link className='flex-1 flex justify-center items-center p-8 rounded-tr-xl' style={{fontSize: "12px", backgroundColor: page !== aboutNavigationPages.FAQs ? '#FFEBD5': '#D8BCFD'}} href="#"><p  style={{}}className='text-primary-brown font-bold'>FAQs</p></Link>
    </div>
  )
}
