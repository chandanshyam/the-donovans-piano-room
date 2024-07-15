"use client"
import Image from "next/image";
import { useState } from "react";

export default function CatalogItems() {

    const [highlightBook, setHighlightBook] = useState(2)
    const pressRight = () => {
        setHighlightBook((highlightBook + 1) % 3 || 3)
    }
    const pressLeft = () => {
        setHighlightBook((highlightBook - 1) % 3 || 3)
    }
    const highlightedBook = {backgroundColor:"#6F219E", width: "3vw"}
  return (
    
    <div className="relative w-[50%] flex z-50">
    <div className="w-[5%]">
        <div className="h-[2.5vw] w-[2.5vw] bg-secondary-purple rounded-full flex items-center justify-center">
            <div className="relative w-[70%] h-[70%] select-none cursor-pointer" onClick={pressLeft}>
                <Image src="/bookstore/left-arrow.svg" fill alt=""/>
            </div>
        </div>
    </div>
    <div className="relative w-full h-full flex items-end justify-center">
        <div className="absolute w-[43%] h-[40vh] left-[5vw]" style={highlightBook !== 1 ?
        {top: "-19vh", height: "35vh"}: 
        {top: "-21vh", zIndex: 30}}>
            <Image src="/bookstore/books/book-2.svg" fill alt="" />
        </div>
        <div className="absolute w-[43%] h-[40vh] right-[5vw]" style={highlightBook !== 3 ?
            {top: "-19vh", height: "35vh"}:
            {top: "-21vh", zIndex: "30", }}>
            <Image src="/bookstore/books/book-3.svg" fill alt="" />
        </div>
        <div className="absolute w-[43%] h-[40vh] right-[11.5vw]" style={highlightBook === 2 ? {top: "-21vh"}:{height: "35vh", top: "-19vh"}}>
            <Image src="/bookstore/books/book-1.svg" fill alt="" />
        </div>
        <div className="absolute w-[20%] h-[2vh] right-[40%] top-[21vh] flex items-center justify-between">
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
  )
}
