"use client";
import Image from "next/image";
import ShortPiano from "../../../public/assets/virtual-piano/ShortPiano.svg";
import LongPiano from "../../../public/assets/virtual-piano/LongPiano.svg";
import { useState } from "react";
import styles from "../../../src/components/virtual-piano.module.css";




export default function VirtualPiano() {
const [isPiano, setIsPiano] = useState<boolean>(false);

  return (
    <div className="flex h-full items-center justify-center">
      <div className="box-border flex w-11/12 flex-col items-center rounded-3xl border-2 border-gray-300 bg-zinc-50 py-6">
        <div className="box-border flex h-1/6 w-2/6 items-center justify-center rounded-2xl border-2 border-orange-200 bg-orange-50">
          <div className="box-border flex h-3/4 w-11/12 p-4">
           <button
            className={`${styles.button} ${isPiano === true ? styles.buttonActive : ''}`}
            onClick={() => setIsPiano(true)}>
            <div className="box-border inline-flex h-5/6 w-5/6" id="shortPianoBtn">
              Short Piano
            </div>
            </button>

            <button
            className={`${styles.button} ${isPiano === false ? styles.buttonActive : ''}`}
            onClick={() => setIsPiano(false)}>
            <div className="box-border inline-flex h-5/6 w-5/6 items-center justify-center" id="longPianoBtn">
              Long Piano
            </div>
            </button>
          </div>
        </div>
        {isPiano === true ? (
          <Image 
          priority  
          className="h-5/6 w-11/12 pt-8"
          src={ShortPiano}  
          alt="short piano" 
          />
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
