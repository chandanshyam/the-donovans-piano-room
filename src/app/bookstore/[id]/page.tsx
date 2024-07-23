import Footer1 from "@/components/footers/Footer1";
import Navbar5 from "@/components/navbars/Navbar5";
import { navigationPages } from "@/utils/general";
import Image from "next/image";
import bookInterface from '../components/bookInterface'
import BooksPreview from "./components/BooksPreview";
import FrequentlyPurchasedTogether from "./components/FrequentlyPurchasedTogether";
import Reviews from "./components/Reviews";

export default function Page() {
    const currBook: bookInterface = {
        title: "Book I",
        color: "#F6AD69",
        imageSrc: "/bookstore/books/book-list/soft-cover-1.svg",
        coverImageSrc: "/bookstore/books/book-1.svg",
        titleColor: "#B55119",
        type: "Soft cover",
        price: "15.00",
        description: "This exciting new learning method will teach you the fundamentals of music theory...",
    }

    return (
    <div className="absolute bg-[#F5E8FF] min-h-[100vh] w-full">
        <Navbar5 page={navigationPages.bookstore}/>
        <div className="mt-[15vh] flex justify-center relative">
            <div className="relative z-10">
                <BooksPreview book={currBook}/>
                <div className="absolute right-[-4vw] top-[25vh] mix-blend-color-dodge">
                    <div className="relative h-[65vw] w-[75vw]">
                        <Image src="/bookstore/background/middle-s.svg" fill alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid z-50">
            <FrequentlyPurchasedTogether currBook={currBook}/>
        </div>
        <Reviews/>

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
