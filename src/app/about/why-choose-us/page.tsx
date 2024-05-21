import React from 'react'
import ContentWrapper from '../components/ContentWrapper'
import { pages } from '../components/ContentNav'
import Navbar1, { pages as navbarPages} from '@/components/navbars/navbar-1'
import Link from 'next/link'
import WhyChooseUsContent from './components/why-choose-us-content'

export default function Page() {
  return (
    <>
    <Navbar1 page={navbarPages.about} />
    <ContentWrapper page={pages.whyChooseUs}>
      <WhyChooseUsContent/>
    </ContentWrapper>
    </>
  )
}
