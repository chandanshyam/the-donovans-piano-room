import Footer1 from "@/components/footers/Footer1";
import Navbar1 from "@/components/navbars/Navbar1";
import { navigationPages } from "@/utils/general";
import Catalog from "./components/Catalog";
import AllBooks from "./components/AllBooks";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#F5E8FF] min-h-[100vh] w-full">
        <Navbar1 page={navigationPages.bookstore}/>
        <Catalog/>
        <AllBooks/>
        <div className="relative">
            <Footer1/>

            {/* background images */}

            <div className="absolute left-0 bottom-0">
                <div className="relative h-[12vw] w-[12vw]" >
                    <Image src="/bookstore/background/bottom-left.svg" fill alt=""/>
                </div>
            </div>
        </div>
        <div className="absolute right-0 top-[12vh]">
            <div className="relative h-[12vw] w-[12vw]" >
                <Image src="/bookstore/background/top-right.svg" fill alt=""/>
            </div>
        </div>

        <div className="absolute left-[35vw] top-[45vh]">
            <div className="relative h-[10vw] w-[10vw]" >
                <Image src="/bookstore/background/middle.svg" fill alt=""/>
            </div>
        </div>
        <div className="absolute right-0 top-[45vh]">
            <div className="relative h-[8vw] w-[8vw]" >
                <Image src="/bookstore/background/left-star.svg" fill alt=""/>
            </div>
        </div>
    </div>
  )
}
