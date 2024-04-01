'use client';
import React, { useState } from "react";
import ShortPiano from './components/ShortPiano';
import LongPiano from './components/LongPiano';
import SwitchComponent from "./components/Switch";
import VolumeSlider from "./components/VolumeSlider";

export default function VirtualPiano() {
  const [isPiano, setIsPiano] = useState(false);
  const [volume, setVolume] = React.useState<number>(30);
  const [showNotes, setShowNotes] = useState(false);

  const baseButtonClass = "w-full rounded-xl border-0 py-2.5 px-5 cursor-pointer font-noto text-xl font-normal leading-7  text-[#1C1A1A] hover:bg-[#F3C27E]";
  const activeButtonClass = "bg-[#F3C27E] border-2 border-[#ED9E4A]";

  return (
    <div className="flex h-full items-center justify-center relative">
 
      <div className="box-border flex w-11/12 flex-col items-center rounded-3xl border-2 border-gray-300 bg-zinc-50 py-6">
      <div className="flex justify-center top-20 mb-20">
        <div className=" mr-20 ml-20 px-20 pl-20">
      <VolumeSlider volume={volume} setVolume={setVolume} />
      </div>
      <div className="mr-20 pr-20">
        <SwitchComponent
          label="show notes"
          checked={showNotes}
          onChange={(e) => setShowNotes(Boolean(e.target.checked))}
        />
      </div>
      </div>
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
         <ShortPiano volume={volume} showNotes={showNotes} />
        ) : (
          <LongPiano volume={volume} showNotes={showNotes} /> 
        )}
      </div>
    </div>
  );
}