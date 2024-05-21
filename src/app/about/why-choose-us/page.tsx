import React from 'react'
import ContentWrapper from '../components/ContentWrapper'
import { pages } from '../components/ContentNav'
import Navbar1 from '@/components/navbars/navbar-1'

export default function Page() {
  return (
    <>
    <Navbar1 />
    <ContentWrapper page={pages.whyChooseUs}>
      <></>
    </ContentWrapper>
    </>
  )
}
