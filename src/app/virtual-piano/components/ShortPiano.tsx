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
  { note: "Db3", className: "-ml-[31%]" },
  { note: "Eb3", className: "ml-[21%]" },
  { note: "Gb3", className: "ml-[121%]" },
  { note: "Ab3", className: "ml-[171%]" },
  { note: "Bb3", className: "ml-[221%]" },
  { note: "Db4", className: "ml-[321%]" },
  { note: "Eb4", className: "ml-[373%]" },
  { note: "Gb4", className: "ml-[470%]" },
  { note: "Ab4", className: "ml-[521%]" },
  { note: "Bb4", className: "ml-[572%]" },
  { note: "Db5", className: "ml-[671%]" },
  { note: "Eb5", className: "ml-[723%]" },
  { note: "Gb5", className: "ml-[820%]" },
  { note: "Ab5", className: "ml-[872%]" },
  { note: "Bb5", className: "ml-[925%]" },
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
              className="z-10 cursor-pointer w-fit"
              src="/virtual-piano/WhiteKeys.svg"
              alt={`short piano ${note}`}
              key={index}
            />
          ))}
        </div>

        {/* Black keys */}
        <div className="flex w-8 ml-[5%] sm:w-10 sm:ml-[6%] md:w-12 md:ml-[7%] lg:w-18 lg:ml-[9%] xl:w-20 xl:ml-[10%] 2xl:w-22 2xl:h-3/5 2xl:ml-[10%] ">
          {blackKeys.map((item, index) => (
            <Image
              onClick={() => playNote(item.note)}
              width={0}
              height={0}
              className={twMerge(
                "absolute top-10 z-20 h-3/5 cursor-pointer w-fit",
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

export default ShortPiano;
