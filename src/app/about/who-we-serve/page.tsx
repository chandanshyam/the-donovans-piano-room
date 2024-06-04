import ContentWrapper from '../components/ContentWrapper'
import { aboutNavigationPages, navigationPages } from '@/utils/general'
import Navbar1 from '@/components/navbars/Navbar1'
import WhoWeServeContent from './components/who-we-serve-content'



const Page = ({}) => {
  return (
    <>
        <Navbar1 page={navigationPages.about}/>
        <ContentWrapper page={aboutNavigationPages.whoWeServe}>
            <WhoWeServeContent/>
        </ContentWrapper>
    </>
  )
  
}

export default Page