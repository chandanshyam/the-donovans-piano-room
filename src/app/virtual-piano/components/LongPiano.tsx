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
  { note: "Db1", className: "-ml-[27%]" },
  { note: "Eb1", className: "ml-[23%]" },
  { note: "Gb1", className: "ml-[123%]" },
  { note: "Ab1", className: "ml-[173%]" },
  { note: "Bb1", className: "ml-[223%]" },
  { note: "Db2", className: "ml-[323%]" },
  { note: "Eb2", className: "ml-[373%]" },
  { note: "Gb2", className: "ml-[473%]" },
  { note: "Ab2", className: "ml-[523%]" },
  { note: "Bb2", className: "ml-[573%]" },
  { note: "Db3", className: "ml-[673%]" },
  { note: "Eb3", className: "ml-[723%]" },
  { note: "Gb3", className: "ml-[823%]" },
  { note: "Ab3", className: "ml-[873%]" },
  { note: "Bb3", className: "ml-[923%]" },
  { note: "Db4", className: "ml-[1023%]" },
  { note: "Eb4", className: "ml-[1073%]" },
  { note: "Gb4", className: "ml-[1173%]" },
  { note: "Ab4", className: "ml-[1223%]" },
  { note: "Bb4", className: "ml-[1273%]" },
  { note: "Db5", className: "ml-[1373%]" },
  { note: "Eb5", className: "ml-[1423%]" },
  { note: "Gb5", className: "ml-[1523%]" },
  { note: "Ab5", className: "ml-[1573%]" },
  { note: "Bb5", className: "ml-[1623%]" },
  { note: "Db6", className: "ml-[1723%]" },
  { note: "Eb6", className: "ml-[1773%]" },
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
              width={0}
              height={0}
              className="z-10 w-fit cursor-pointer"
              src="/virtual-piano/WhiteKeys.svg"
              alt={`short piano ${note}`}
              key={index}
            />
          ))}
        </div>

        {/* Black keys */}
        <div className="xl2:w-13 flex w-3 -ml-[917%] sm:-ml-[917%] sm:w-4 md:-ml-[917%] md:w-7 lg:-ml-[917%] lg:w-9 lg2:-ml-[917%] lg2:w-10 xl:-ml-[918%] xl:w-12 xl2:-ml-[918%] 2xl:-ml-[914%] 2xl:h-3/5 2xl:w-14 ">
          {blackKeys.map((item, index) => (
            <Image
              onClick={() => playNote(item.note)}
              width={0}
              height={0}
              className={twMerge(
                "absolute top-10 z-20 h-3/5 w-fit cursor-pointer",
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

