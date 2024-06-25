import React from "react";
import Footer4 from "../footers/Footer4";
import Navbar4Left from "../navbars/Navbar4Left";

export default function AccountWrapper({children}: {children: React.ReactNode}) {
  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#FFEBD5]">
        <Navbar4Left />
        <div className="w-full">

          <div className="h-[91vh]">
              {children}
          </div>
          <Footer4 />
        </div>
    </div>
  )
}
