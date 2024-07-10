"use client"
import Image from "next/image";
import { useState } from "react";

export default function CatalogItems() {

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
    
    <div className="relative w-[40%] flex z-50">
    <div className="w-[5%]">
        <div className="h-[2.5vw] w-[2.5vw] bg-secondary-purple rounded-full flex items-center justify-center">
            <div className="relative w-[70%] h-[70%] select-none cursor-pointer" onClick={pressLeft}>
                <Image src="/bookstore/left-arrow.svg" fill alt=""/>
            </div>
        </div>
    </div>
    <div className="relative w-full h-full flex items-end justify-center">
        <div className="absolute w-[40%] h-[37vh] left-[5vw]" style={highlightBook !== 1 ?
        {top: "-15.5vh", height: "29vh"}: 
        {top: "-19vh", zIndex: 30}}>
            <Image src="/bookstore/books/book-2.svg" fill alt="" />
        </div>
        <div className="absolute w-[40%] h-[37vh] right-[5vw]" style={highlightBook !== 3 ?
            {top: "-15.5vh", width: "35%", height: "29vh"}:
            {top: "-19vh", zIndex: "30", }}>
            <Image src="/bookstore/books/book-3.svg" fill alt="" />
        </div>
        <div className="absolute w-[40%] h-[37vh] right-[10vw]" style={highlightBook === 2 ? {top: "-19vh"}:{height: "29vh", top: "-15.5vh"}}>
            <Image src="/bookstore/books/book-1.svg" fill alt="" />
        </div>
        <div className="absolute w-[20%] h-[2vh] right-[41.5%] top-[19vh] flex items-center justify-between">
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
