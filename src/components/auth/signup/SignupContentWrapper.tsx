import Navbar2 from '@/components/navbars/Navbar2'
import React from 'react'

export default function SignupContentWrapper({children}: {children: React.ReactNode}) {
  return (
    <>
        <Navbar2 />
        {children}
    </>
  )
}
