import Footer2 from '@/components/footers/Footer2'
import Navbar2 from '@/components/navbars/Navbar2'
import React from 'react'

export default function SignupContentWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-primary-purple'>
        <Navbar2 />
        {children}
        <Footer2 />
    </div>
  )
}
