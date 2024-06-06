import Footer2 from '@/components/footers/Footer2'
import Navbar2 from '@/components/navbars/Navbar2'
import React from 'react'
import BackgroundSignup from './BackgroundSignup'

export default function SignupContentWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-primary-purple'>
        <Navbar2 />
        <BackgroundSignup/>
        {children}
        <Footer2 />
    </div>
  )
}
