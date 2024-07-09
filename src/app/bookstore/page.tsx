import Button1 from "@/components/atoms/Button1";
import Button2 from "@/components/atoms/Button2";
import Footer1 from "@/components/footers/Footer1";
import Navbar1 from "@/components/navbars/Navbar1";
import { navigationPages } from "@/utils/general";

export default function Page() {
  return (
    <>
        <Navbar1 page={navigationPages.bookstore}/>
        <div className="absolute h-[81.9vh] w-full top-[8.8vh]">
            <div className="h-[40vh] w-full flex items-center justify-around">
                <div className="w-[40%]">
                    <div className="w-[50%]">
                        <p className="text-primary-brown text-xl 3xl:text-2xl 4xl:text-3xl font-medium">Soft cover | Book I</p>
                        <h2 className="text-primary-brown text-5xl 3xl:text-6xl 4xl:text-7xl font-medium my-6">The Donovan's piano room</h2>
                        <p className="text-xl 3xl:text-2xl 4xl:text-3xl">For a limited time, 20 people can purchase the book (plus free shipping) and the audio book together for only $20!</p>
                        
                    </div>
                </div>
                <div className="w-[40%]">s</div>
            </div>
        </div>
        <Footer1/>
    </>
  )
}
