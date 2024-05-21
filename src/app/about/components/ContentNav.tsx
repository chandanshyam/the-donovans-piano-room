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
            className='flex-1 flex justify-center items-center rounded-tl' style={{backgroundColor: page !== pages.whyChooseUs ? '#FFC89599': '#D8BCFD'}}
            href="/about/why-choose-us"><p>Why Choose Us</p></Link>
        <Link className='flex-1 flex justify-center items-center' style={{backgroundColor: page !== pages.whoWeServe ? '#FFC89599': '#D8BCFD'}} href="/about/who-we-serve"><p>Who We Serve</p></Link>
        <Link className='flex-1 flex justify-center items-center' style={{backgroundColor: page !== pages.membership ? '#FFC89599': '#D8BCFD'}} href="/about/membership"><p>Membership</p></Link>
        <Link className='flex-1 flex justify-center items-center rounded-tr' style={{backgroundColor: page !== pages.FAQs ? '#FFC89599': '#D8BCFD'}} href="/about/FAQs"><p>FAQs</p></Link>
    </div>
  )
}
