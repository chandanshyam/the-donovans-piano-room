import Navbar1 from '@/components/navbars/Navbar1'
import { aboutNavigationPages, navigationPages } from '@/utils/general'
import React from 'react'
import ContentWrapper from '../components/ContentWrapper'
import MembershipContent from './components/MembershipContent'

export default function Page() {
  return (
    <>
        <Navbar1 page={navigationPages.about}/>
        <ContentWrapper page={aboutNavigationPages.membership}>
            <MembershipContent/>
        </ContentWrapper>
    </>
  )
}
