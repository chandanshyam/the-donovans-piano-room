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
  {
    note: "Db1",
    className: "-ml-[105.5%]",
    notetext1: "D♭1",
    notetext2: "C♯1",
    className1: "-ml-[76.5%]",
  },
  {
    note: "Eb1",
    className: "-ml-[103%]",
    notetext1: "E♭1",
    notetext2: "D♯1",
    className1: "-ml-[74%]",
  },
  {
    note: "Gb1",
    className: "-ml-[98%]",
    notetext1: "G♭1",
    notetext2: "F♯1",
    className1: "-ml-[69%]",
  },
  {
    note: "Ab1",
    className: "-ml-[95.5%]",
    notetext1: "A♭1",
    notetext2: "G♯1",
    className1: "-ml-[66.5%]",
  },
  {
    note: "Bb1",
    className: "-ml-[93%]",
    notetext1: "B♭1",
    notetext2: "A♯1",
    className1: "-ml-[64%]",
  },
  {
    note: "Db2",
    className: "-ml-[87.5%]",
    notetext1: "D♭2",
    notetext2: "C♯2",
    className1: "-ml-[58.5%]",
  },
  {
    note: "Eb2",
    className: "-ml-[85%]",
    notetext1: "E♭2",
    notetext2: "D♯2",
    className1: "-ml-[56%]",
  },
  {
    note: "Gb2",
    className: "-ml-[80%]",
    notetext1: "G♭2",
    notetext2: "F♯2",
    className1: "-ml-[51%]",
  },
  {
    note: "Ab2",
    className: "-ml-[77.5%]",
    notetext1: "A♭2",
    notetext2: "G♯2",
    className1: "-ml-[48.5%]",
  },
  {
    note: "Bb2",
    className: "-ml-[75%]",
    notetext1: "B♭2",
    notetext2: "A♯2",
    className1: "-ml-[46%]",
  },
  {
    note: "Db3",
    className: "-ml-[70%]",
    notetext1: "D♭3",
    notetext2: "C♯3",
    className1: "-ml-[41%]",
  },
  {
    note: "Eb3",
    className: "-ml-[67.5%]",
    notetext1: "E♭3",
    notetext2: "D♯3",
    className1: "-ml-[38.5%]",
  },
  {
    note: "Gb3",
    className: "-ml-[62%]",
    notetext1: "G♭3",
    notetext2: "F♯3",
    className1: "-ml-[33%]",
  },
  {
    note: "Ab3",
    className: "-ml-[59.5%]",
    notetext1: "A♭3",
    notetext2: "G♯3",
    className1: "-ml-[30.5%]",
  },
  {
    note: "Bb3",
    className: "-ml-[54.5%]",
    notetext1: "B♭3",
    notetext2: "A♯3",
    className1: "-ml-[25.5%]",
  },
  {
    note: "Db4",
    className: "-ml-[52%]",
    notetext1: "D♭4",
    notetext2: "C♯4",
    className1: "-ml-[23%]",
  },
  {
    note: "Eb4",
    className: "-ml-[49.5%]",
    notetext1: "E♭4",
    notetext2: "D♯4",
    className1: "-ml-[20.5%]",
  },
  {
    note: "Gb4",
    className: "-ml-[44%]",
    notetext1: "G♭4",
    notetext2: "F♯4",
    className1: "-ml-[15%]",
  },
  {
    note: "Ab4",
    className: "-ml-[41.5%]",
    notetext1: "A♭4",
    notetext2: "G♯4",
    className1: "-ml-[12.5%]",
  },
  {
    note: "Bb4",
    className: "-ml-[36.5%]",
    notetext1: "B♭4",
    notetext2: "A♯4",
    className1: "-ml-[7.5%]",
  },
  {
    note: "Db5",
    className: "-ml-[34%]",
    notetext1: "D♭5",
    notetext2: "C♯5",
    className1: "-ml-[5%]",
  },
  {
    note: "Eb5",
    className: "-ml-[31.5%]",
    notetext1: "E♭5",
    notetext2: "D♯5",
    className1: "-ml-[2.5%]",
  },
  {
    note: "Gb5",
    className: "-ml-[26.5%]",
    notetext1: "G♭5",
    notetext2: "F♯5",
    className1: "ml-[2.5%]",
  },
  {
    note: "Ab5",
    className: "-ml-[24%]",
    notetext1: "A♭5",
    notetext2: "G♯5",
    className1: "ml-[5%]",
  },
  {
    note: "Bb5",
    className: "-ml-[21.5%]",
    notetext1: "B♭5",
    notetext2: "A♯5",
    className1: "ml-[7.5%]",
  },
  {
    note: "Db6",
    className: "-ml-[16%]",
    notetext1: "D♭6",
    notetext2: "C♯6",
    className1: "ml-[13%]",
  },
  {
    note: "Eb6",
    className: "-ml-[13.5%]",
    notetext1: "E♭6",
    notetext2: "D♯6",
    className1: "ml-[15.5%]",
  },
];


const LongPiano: React.FC<{ volume: number; showNotes: boolean }> = ({ volume, showNotes }) => {
  const playNote = (note: string) => {
    const audio = new Audio(`/virtual-piano/notes/${note}.mp3`);
    audio.volume = volume/100;
    audio.play();
  };

  return (
    <div>
      <div className="relative m-20 flex h-5/6 pt-10 ">
        {/* White keys */}
        <div className="relative flex justify-center">
          {whiteKeys.map((note, index) => (
            <div
              key={index}
              className="xl2:w-13 2xl:w-140 2xl:w-18 w-3 sm:w-4 md:w-7 lg:w-9 lg2:w-10 xl:w-12 2xl:h-[90%]"
            >
              <Image
                onClick={() => playNote(note)}
                width={68}
                height={504}
                className="z-10 w-fit cursor-pointer"
                src="/virtual-piano/WhiteKeys.svg"
                alt={`long piano ${note}`}
              />
              <div className={`absolute top-[80%] z-20 ${showNotes ? 'block' : 'hidden'}`}>
                <span
                  onClick={() => playNote(note)}
                  className="mx-[12%] cursor-pointer text-xl text-slate-400 sm:text-xs md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl"
                >
                  {note}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Black keys */}
        <div className="xl2:w-13 flex w-3 sm:ml-[9.6%] sm:w-4 md:ml-[9.6%] md:w-7 lg:ml-[9.6%]  lg:w-9 lg2:w-10 xl:ml-[9.6%] xl:w-12 xl2:ml-[9.6%] 2xl:ml-[10%] 2xl:w-14">
          {blackKeys.map((item, index) => (
            <Image
              onClick={() => playNote(item.note)}
              width={48}
              height={316}
              className={twMerge(
                "absolute top-10 z-30 h-[65%] w-fit cursor-pointer",
                item.className,
              )}
              src="/virtual-piano/BlackKeys.svg"
              alt={`long piano ${item.note}`}
              key={index}
            />
          ))}
        </div>
        <div className={`-ml-[32%] text-xs sm:text-xs md:-ml-[31.5%] md:text-xs  lg:-ml-[31.5%] lg:text-sm  xl:-ml-[31.5%] xl:text-xl xl2:-ml-[31.5%] xl2:text-xl 2xl:-ml-[32%] ${showNotes ? 'block' : 'hidden'}`}>
          {blackKeys.map((item, index) => (
            <span
              key={index}
              onClick={() => playNote(item.note)}
              className={twMerge(
                "absolute top-[50%] z-40 cursor-pointer font-semibold text-white",
                item.className1,
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

export default LongPiano;
