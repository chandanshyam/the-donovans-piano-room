import Footer1 from "@/components/footers/Footer1";
import Navbar5 from "@/components/navbars/Navbar5";
import { books, navigationPages } from "@/utils/general";
import Image from "next/image";
import BooksPreview from "./components/BooksPreview";
import FrequentlyPurchasedTogether from "../../../components/atoms/FrequentlyPurchasedTogether";
export default function Page() {
    return (
    <div className="absolute bg-[#F5E8FF] min-h-[100vh] w-full">
        <Navbar5 page={navigationPages.bookstore}/>
        <div className="mt-[15vh] flex justify-center relative">
            <div className="relative z-10">
                <BooksPreview/>
                <div className="absolute right-[-4vw] top-[25vh] mix-blend-color-dodge">
                    <div className="relative h-[55vw] w-[65vw]">
                        <Image src="/bookstore/background/middle-s.svg" fill alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid z-50">
            <FrequentlyPurchasedTogether/>
        </div>

        <div className="relative">
            <Footer1/>

            {/* background images */}


            <div className="absolute left-0 bottom-0">
                <div className="relative h-[12vw] w-[12vw]" >
                    <Image src="/bookstore/background/bottom-left.svg" fill alt=""/>
                </div>
            </div>
        </div>
        
        <div className="absolute right-0 top-[75vh] z-20">
            <div className="relative h-[8vw] w-[8vw]" >
                <Image src="/bookstore/background/left-star.svg" fill alt=""/>
            </div>
        </div>
        <div className="absolute right-[15vw] bottom-[30vh]">
            <div className="relative h-[5vw] w-[5vw]" >
                <Image src="/bookstore/background/bottom-right.svg" fill alt=""/>
            </div>
        </div>
    </div>
  )
}
