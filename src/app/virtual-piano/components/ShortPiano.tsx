import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const whiteKeys: string[] = [
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
];

const blackKeys = [
  { note: "Db3", notetext1: "D♭3", notetext2: "C♯3", className: "-ml-[43%]" , className1: "-ml-[60%]" },
  { note: "Eb3", notetext1: "E♭3", notetext2: "D♯3", className: "ml-[7%]" , className1: "ml-[40%]" },
  { note: "Gb3", notetext1: "G♭3", notetext2: "F♯3", className: "ml-[107%]" , className1: "ml-[240%]" },
  { note: "Ab3", notetext1: "A♭3", notetext2: "G♯3", className: "ml-[157%]" , className1: "ml-[340%]" },
  { note: "Bb3", notetext1: "B♭3", notetext2: "A♯3", className: "ml-[207%]" , className1: "ml-[440%]" },
  { note: "Db4", notetext1: "D♭4", notetext2: "C♯4", className: "ml-[307%]" , className1: "ml-[640%]" },
  { note: "Eb4", notetext1: "E♭4", notetext2: "D♯4", className: "ml-[357%]" , className1: "ml-[740%]" },
  { note: "Gb4", notetext1: "G♭4", notetext2: "F♯4", className: "ml-[457%]" , className1: "ml-[940%]"},
  { note: "Ab4", notetext1: "A♭4", notetext2: "G♯4", className: "ml-[507%]" , className1: "ml-[1040%]"},
  { note: "Bb4", notetext1: "B♭4", notetext2: "A♯4", className: "ml-[557%]" , className1: "ml-[1140%]" },
  { note: "Db5", notetext1: "D♭5", notetext2: "C♯5", className: "ml-[657%]" , className1: "ml-[1340%]" },
  { note: "Eb5", notetext1: "E♭5", notetext2: "D♯5", className: "ml-[707%]" , className1: "ml-[1440%]"},
  { note: "Gb5", notetext1: "G♭5", notetext2: "F♯5", className: "ml-[807%]" , className1: "ml-[1640%]" },
  { note: "Ab5", notetext1: "A♭5", notetext2: "G♯5", className: "ml-[857%]" , className1: "ml-[1740%]"},
  { note: "Bb5", notetext1: "B♭5", notetext2: "A♯5", className: "ml-[907%]" , className1: "ml-[1840%]"},
];

const playNote = (note: string) => {
  const audio = new Audio(`/virtual-piano/notes/${note}.mp3`);
  audio.play();
};

const ShortPiano: React.FC = () => {
  return (
    <div>
      <div className="relative m-20 flex h-5/6 pt-10 ">
        {/* White keys */}
        <div className="lg:w-18 2xl:w-22 ml-[-496%] flex w-8 sm:w-10 md:w-12 xl:w-20  2xl:h-3/5">
          {whiteKeys.map((note, index) => (
            <Image
              onClick={() => playNote(note)}
              width={0}
              height={0}
              className="z-10 w-fit cursor-pointer"
              src="/virtual-piano/WhiteKeys.svg"
              alt={`short piano ${note}`}
              key={index}
            />
          ))}
          <div className="absolute z-30 ml-[-6%] mt-[300%] flex w-full">
            {whiteKeys.map((note, index) => (
              <span
                key={index}
                onClick={() => playNote(note)}
                className="ml-[9.5%] cursor-pointer text-center text-xl text-slate-400 sm:ml-[12%] sm:text-2xl md:ml-[11%] md:text-3xl  xl:ml-5 xl:text-5xl"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Black keys */}
        <div className="lg:w-18 2xl:w-22 relative -mt-[58%] ml-[5%] flex w-8 sm:-mt-[48%] sm:ml-[6%] sm:w-10 md:-mt-[40%] md:ml-[7%] md:w-12 lg:-mt-[40%] lg:ml-[9%] xl:-mt-[24%] xl:ml-[10%] xl:w-20 2xl:-mt-[25%]  2xl:ml-[10%]">
          {blackKeys.map((item, index) => (
            <Image
              onClick={() => playNote(item.note)}
              className={twMerge(
                "absolute top-10 z-20 h-[65%] w-fit cursor-pointer",
                item.className1,
              )}
              src="/virtual-piano/BlackKeys.svg"
              alt={`short piano ${item.note}`}
              key={index}
              width={0}
              height={0}
            />
          ))}
        </div>
        <div className="-ml-[32%] text-xs sm:text-sm md:text-lg lg:text-lg xl:text-2xl ">
          {blackKeys.map((item, index) => (
            <span
              key={index}
              onClick={() => playNote(item.note)}
              className={twMerge(
                "absolute top-[47%] z-30 cursor-pointer text-white",
                item.className,
              )}
            >
              {item.notetext1}
              <br />
              {item.notetext2}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortPiano;
