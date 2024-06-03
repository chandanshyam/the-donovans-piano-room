import ContentWrapper from '../components/ContentWrapper'
import { aboutNavigationPages, navigationPages } from '@/utils/general'
import Navbar1 from '@/components/navbars/Navbar1'



const Page = ({}) => {
  return (
    <>
        <Navbar1 page={navigationPages.about}/>
        <ContentWrapper page={aboutNavigationPages.whoWeServe}>
            <></>
        </ContentWrapper>
    </>
  )
  
}

export default Page