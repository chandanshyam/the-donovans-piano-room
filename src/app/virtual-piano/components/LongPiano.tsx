'use client';
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const whiteKeys: string[] = [
  "C1",
  "D1",
  "E1",
  "F1",
  "G1",
  "A1",
  "B1",
  "C2",
  "D2",
  "E2",
  "F2",
  "G2",
  "A2",
  "B2",
  "C3",
  "D3",
  "E3",
  "F3",
  "G3",
  "A3",
  "B3",
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "A4",
  "B4",
  "C5",
  "D5",
  "E5",
  "F5",
  "G5",
  "A5",
  "B5",
  "C6",
  "D6",
  "E6",
];

const blackKeys = [
  { note: "Db1", className: "-ml-[27%]" , notetext1: "D♭1", notetext2: "C♯1" },
  { note: "Eb1", className: "ml-[23%]" , notetext1: "E♭1", notetext2: "D♯1" },
  { note: "Gb1", className: "ml-[123%]", notetext1: "G♭1", notetext2: "F♯1" },
  { note: "Ab1", className: "ml-[173%]" , notetext1: "A♭1", notetext2: "G♯1" },
  { note: "Bb1", className: "ml-[223%]" , notetext1: "B♭1", notetext2: "A♯1" },
  { note: "Db2", className: "ml-[323%]" , notetext1: "D♭2", notetext2: "C♯2" },
  { note: "Eb2", className: "ml-[373%]" , notetext1: "E♭2", notetext2: "D♯2" }, 
  { note: "Gb2", className: "ml-[473%]" , notetext1: "G♭2", notetext2: "F♯2" },
  { note: "Ab2", className: "ml-[523%]" ,  notetext1: "A♭2", notetext2: "G♯2" },
  { note: "Bb2", className: "ml-[573%]" , notetext1: "B♭2", notetext2: "A♯2" },
  { note: "Db3", className: "ml-[673%]" , notetext1: "D♭3", notetext2: "C♯3" },
  { note: "Eb3", className: "ml-[723%]" , notetext1: "E♭3", notetext2: "D♯3" },
  { note: "Gb3", className: "ml-[823%]" , notetext1: "G♭3", notetext2: "F♯3" },
  { note: "Ab3", className: "ml-[873%]" , notetext1: "A♭3", notetext2: "G♯3" },
  { note: "Bb3", className: "ml-[923%]" , notetext1: "B♭3", notetext2: "A♯3" },
  { note: "Db4", className: "ml-[1023%]" , notetext1: "D♭4", notetext2: "C♯4" },
  { note: "Eb4", className: "ml-[1073%]" , notetext1: "E♭4", notetext2: "D♯4" },
  { note: "Gb4", className: "ml-[1173%]" , notetext1: "G♭4", notetext2: "F♯4" },
  { note: "Ab4", className: "ml-[1223%]" , notetext1: "A♭4", notetext2: "G♯4" },
  { note: "Bb4", className: "ml-[1273%]" , notetext1: "B♭4", notetext2: "A♯4" },
  { note: "Db5", className: "ml-[1373%]" , notetext1: "D♭5", notetext2: "C♯5" },
  { note: "Eb5", className: "ml-[1423%]" , notetext1: "E♭5", notetext2: "D♯5" },
  { note: "Gb5", className: "ml-[1523%]" , notetext1: "G♭5", notetext2: "F♯5" },
  { note: "Ab5", className: "ml-[1573%]" , notetext1: "A♭5", notetext2: "G♯5" },
  { note: "Bb5", className: "ml-[1623%]" , notetext1: "B♭5", notetext2: "A♯5" },
  { note: "Db6", className: "ml-[1723%]" , notetext1: "D♭6", notetext2: "C♯6" },
  { note: "Eb6", className: "ml-[1773%]" , notetext1: "E♭6", notetext2: "D♯6" },
];

const playNote = (note: string) => {
  const audio = new Audio(`/virtual-piano/notes/${note}.mp3`);
  audio.play();
};

const LongPiano: React.FC = () => {
  return (
    <div>
      <div className="relative m-20 flex h-5/6 pt-10 ">
        {/* White keys */}
        <div className="xl2:w-13 flex w-3 justify-center sm:w-4 md:w-7 lg:w-9 lg2:w-10 xl:w-12 2xl:h-3/5 2xl:w-14">
          {whiteKeys.map((note, index) => (
            <Image
              onClick={() => playNote(note)}
              width={68}
              height={504}
              className="z-10 w-fit cursor-pointer"
              src="/virtual-piano/WhiteKeys.svg"
              alt={`short piano ${note}`}
              key={index}
            />
          ))}
        </div>

        {/* Black keys */}
        <div className="xl2:w-13 flex w-3 -ml-[917%] sm:-ml-[917%] sm:w-4 md:-ml-[917%] md:w-7 lg:-ml-[917%] lg:w-9 lg2:-ml-[917%] lg2:w-10 xl:-ml-[918%]  xl:w-12 xl2:-ml-[918%] 2xl:-ml-[914%] 2xl:w-14 ">
          {blackKeys.map((item, index) => (
            <Image
              onClick={() => playNote(item.note)}
              width={48}
              height={316}
              className={twMerge(
                "absolute top-10 z-20 w-fit h-[65%]  cursor-pointer",
                item.className,
              )}
              src="/virtual-piano/BlackKeys.svg"
              alt={`short piano ${item.note}`}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LongPiano;

