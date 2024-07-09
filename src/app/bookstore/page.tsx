"use client"
import Button3 from "@/components/atoms/Button3";
import Button4 from "@/components/atoms/Button4";
import Footer1 from "@/components/footers/Footer1";
import Navbar1 from "@/components/navbars/Navbar1";
import { navigationPages } from "@/utils/general";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [highlightBook, setHighlightBook] = useState(2)
    const pressRight = () => {
        if(highlightBook < 3){
            setHighlightBook(highlightBook+1)
        }
    }
    const pressLeft = () => {
        if(highlightBook > 1){
            setHighlightBook(highlightBook-1)
        }
    }
    const highlightedBook = {backgroundColor:"#6F219E", width: "3vw"}
  return (
    <>
        <Navbar1 page={navigationPages.bookstore}/>
        <div className="absolute h-[81.9vh] w-full top-[8.8vh] flex justify-center">
            <div className="w-[84.7%]">
                
            <div className="h-[45vh] w-full flex items-center justify-around">
                <div className="w-[45%] flex items-center">
                    <div className="w-[50%]">
                        <p className="text-primary-brown text-xl 3xl:text-2xl 4xl:text-3xl font-medium">Soft cover | Book I</p>
                        <h2 className="text-primary-brown text-5xl 3xl:text-6xl 4xl:text-7xl font-medium my-6">The Donovan's piano room</h2>
                        <p className="text-xl 3xl:text-2xl 4xl:text-3xl">For a limited time, 20 people can purchase the book (plus free shipping) and the audio book together for only $20!</p>
                        <Button3 text="Add to cart" style={{marginTop: "12px", marginBottom: "12px"}}/>
                        <Button4 text="Browse all soft cover books" style={{paddingTop: "6px", paddingBottom: "6px"}}/>
                    </div>
                </div>
                <div className="w-[50%] flex">
                    <div className="w-[5%]">
                        <div className="h-[2.5vw] w-[2.5vw] bg-secondary-purple rounded-full flex items-center justify-center">
                            <div className="relative w-[70%] h-[70%] select-none cursor-pointer" onClick={pressLeft}>
                                <Image src="/bookstore/left-arrow.svg" fill alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-full flex items-end justify-center">
                        <div className="absolute w-[40%] h-[37vh] left-[7vw]" style={highlightBook !== 1 ?
                        {top: "-15.5vh", height: "34vh"}: 
                        {top: "-17vh", zIndex: 30}}>
                            <Image src="/bookstore/books/book-2.svg" fill alt="" />
                        </div>
                        <div className="absolute w-[40%] h-[37vh] right-[7vw]" style={highlightBook !== 3 ?
                            {top: "-15.5vh", width: "35%", height: "34vh"}:
                            {top: "-17vh", zIndex: "30", }}>
                            <Image src="/bookstore/books/book-3.svg" fill alt="" />
                        </div>
                        <div className="absolute w-[40%] h-[37vh]" style={highlightBook === 2 ? {top: "-17vh", right: "12vw"}:{height: "34vh", top: "-15.5vh"}}>
                            <Image src="/bookstore/books/book-1.svg" fill alt="" />
                        </div>
                        <div className="absolute w-[20%] h-[2vh] right-[41.5%] top-[21vh] flex items-center justify-between">
                            <div className="h-[0.8vh] w-[0.8vh] bg-[#B457F5] rounded-full" style={highlightBook === 1 ? highlightedBook : {}}/>
                            <div className="h-[0.8vh] w-[0.8vh] bg-[#B457F5] rounded-full" style={highlightBook === 2 ? highlightedBook : {}}/>
                            <div className="h-[0.8vh] w-[0.8vh] bg-[#B457F5] rounded-full" style={highlightBook === 3 ? highlightedBook : {}}/>
                        </div>
                    </div>
                    <div className="w-[5%]">
                        <div className="h-[2.5vw] w-[2.5vw] bg-secondary-purple rounded-full flex items-center justify-center">
                            <div className="relative w-[70%] h-[70%] select-none cursor-pointer" onClick={pressRight}>
                                <Image src="/bookstore/right-arrow.svg" fill alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer1/>
    </>
  )
}
