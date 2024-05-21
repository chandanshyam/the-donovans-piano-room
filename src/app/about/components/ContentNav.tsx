import Link from 'next/link'
import React from 'react'

export const pages = {
    whyChooseUs: "why-choose-us",
    whoWeServe: "who-we-serve",
    membership: "membership",
    scholarship: "scholarship",
    FAQs: "faqs" 
} 
export default function ContentNav({page}: {page: string}) {
  return (
    <div className='flex gap-px h-12' style={{width: '70%'}}>
        <Link 
            className='flex-1 flex justify-center items-center p-8 rounded-tl-xl' style={{fontSize: "12px", backgroundColor: page !== pages.whyChooseUs ? '#FFEBD5': '#D8BCFD'}}
            href="/about/why-choose-us"><p className='text-primary-brown font-bold' style={{}}>Why Choose Us</p></Link>
        <Link className='flex-1 flex justify-center items-center p-8' style={{fontSize: "12px", backgroundColor: page !== pages.whoWeServe ? '#FFEBD5': '#D8BCFD'}} href="/about/who-we-serve"><p style={{}} className='text-primary-brown font-bold'>Who We Serve</p></Link>
        <Link className='flex-1 flex justify-center items-center p-8' style={{fontSize: "12px", backgroundColor: page !== pages.membership ? '#FFEBD5': '#D8BCFD'}} href="/about/membership"><p style={{}} className='text-primary-brown font-bold'>Membership</p></Link>
        <Link className='flex-1 flex justify-center items-center p-8 rounded-tr-xl' style={{fontSize: "12px", backgroundColor: page !== pages.FAQs ? '#FFEBD5': '#D8BCFD'}} href="/about/FAQs"><p  style={{}}className='text-primary-brown font-bold'>FAQs</p></Link>
    </div>
  )
}
