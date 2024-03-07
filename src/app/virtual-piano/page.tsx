"use client";
import Image from "next/image";
import ShortPiano from '../virtual-piano/short-piano';
import LongPiano from "../../../public/assets/virtual-piano/LongPiano.svg";
import React, { useState } from "react";
// import styles from "../../../src/components/virtual-piano.module.css";


export default function VirtualPiano() {
  const [isPiano, setIsPiano] = useState(false);
  // Define the base and active classes for buttons
  const baseButtonClass = "w-full rounded-xl border-0 py-2.5 px-5 cursor-pointer font-noto text-xl font-normal leading-7  text-[#1C1A1A] hover:bg-[#F3C27E]";
  const activeButtonClass = "bg-[#F3C27E] border-2 border-[#ED9E4A]"; // For conditional styling

  return (
    <div className="flex h-full items-center justify-center">
      <div className="box-border flex w-11/12 flex-col items-center rounded-3xl border-2 border-gray-300 bg-zinc-50 py-6">
        <div className="box-border flex h-1/6 w-2/6 items-center justify-center rounded-2xl border-2 border-orange-200 bg-orange-50">
          <div className="box-border flex h-3/4 w-11/12 p-4 items-center justify-center">
            <button
              className={`${baseButtonClass} ${isPiano ? activeButtonClass : ''} `}
              onClick={() => setIsPiano(true)}>
              <div className="box-border inline-flex h-5/6 w-5/6 items-center justify-center cursor-pointer" id="shortPianoBtn">
                Short Piano
              </div>
            </button>
            <button
              className={`${baseButtonClass} ${!isPiano ? activeButtonClass : ''} `}
              onClick={() => setIsPiano(false)}>
              <div className="box-border inline-flex h-5/6 w-5/6 items-center justify-center" id="longPianoBtn">
                Long Piano
              </div>
            </button>
          </div>
        </div>
        {isPiano ? (
          <div><ShortPiano /></div>
        //  <Image 
        //     priority  
        //     className="h-5/6 w-11/12 pt-8"
        //     src={shortPiano}  
        //     alt="short piano" 
        //   />
        ) : (
          <Image 
            priority  
            className="h-5/6 w-11/12 pt-8"
            src={LongPiano}  
            alt="long piano" 
          />
        )}
      </div>
    </div>
  );
}