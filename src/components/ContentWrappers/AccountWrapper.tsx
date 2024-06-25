import React from "react";
import Footer4 from "../footers/Footer4";
import Navbar4Left from "../navbars/Navbar4Left";
import Image from "next/image";

export default function AccountWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#FFEBD5]">
      <Navbar4Left />
      <div className="w-full">

        <div className="h-[90.5vh]">
            {children}
        </div>
        <Footer4 />
      </div>
      {/* background images */}
      <div className="absolute h-[20vh] w-[15vw] top-0 right-0">
        <Image src="/background-icons/account-and-settings/WhiteTopRight.svg" fill alt=""/>
      </div>
      <div className="absolute h-[20vh] w-[15vw] bottom-0 left-0">
        <Image src="/background-icons/account-and-settings/WhiteBottomLeft.svg" fill alt=""/>
      </div>
    </div>
  )
}
