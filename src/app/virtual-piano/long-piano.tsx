"use client";

import Image from "next/image";
import React from "react";
import white from "../../../public/assets/virtual-piano/WhiteKeys.svg";
import black from "../../../public/assets/virtual-piano/BlackKeys.svg";

//import audio files
import C3Audio from "../../../public/assets/virtual-piano/notes/C3.mp3";
import D3Audio from "../../../public/assets/virtual-piano/notes/D3.mp3";
import E3Audio from "../../../public/assets/virtual-piano/notes/E3.mp3";
import F3Audio from "../../../public/assets/virtual-piano/notes/F3.mp3";
import G3Audio from "../../../public/assets/virtual-piano/notes/G3.mp3";
import A3Audio from "../../../public/assets/virtual-piano/notes/A3.mp3";
import B3Audio from "../../../public/assets/virtual-piano/notes/B3.mp3";
import Db3Audio from "../../../public/assets/virtual-piano/notes/Db3.mp3";
import Eb3Audio from "../../../public/assets/virtual-piano/notes/Eb3.mp3";
import Gb3Audio from "../../../public/assets/virtual-piano/notes/Gb3.mp3";
import Ab3Audio from "../../../public/assets/virtual-piano/notes/Ab3.mp3";
import Bb3Audio from "../../../public/assets/virtual-piano/notes/Bb3.mp3";
import C4Audio from "../../../public/assets/virtual-piano/notes/C4.mp3";
import Db4Audio from "../../../public/assets/virtual-piano/notes/Db4.mp3";
import D4Audio from "../../../public/assets/virtual-piano/notes/D4.mp3";
import E4Audio from "../../../public/assets/virtual-piano/notes/E4.mp3";
import Eb4Audio from "../../../public/assets/virtual-piano/notes/Eb4.mp3";
import F4Audio from "../../../public/assets/virtual-piano/notes/F4.mp3";
import G4Audio from "../../../public/assets/virtual-piano/notes/G4.mp3";
import A4Audio from "../../../public/assets/virtual-piano/notes/A4.mp3";
import B4Audio from "../../../public/assets/virtual-piano/notes/B4.mp3";
import Gb4Audio from "../../../public/assets/virtual-piano/notes/Gb4.mp3";
import Ab4Audio from "../../../public/assets/virtual-piano/notes/Ab4.mp3";
import Bb4Audio from "../../../public/assets/virtual-piano/notes/Bb4.mp3";
import C5Audio from "../../../public/assets/virtual-piano/notes/C5.mp3";
import Db5Audio from "../../../public/assets/virtual-piano/notes/Db5.mp3";
import D5Audio from "../../../public/assets/virtual-piano/notes/D5.mp3";
import E5Audio from "../../../public/assets/virtual-piano/notes/E5.mp3";
import Eb5Audio from "../../../public/assets/virtual-piano/notes/Eb5.mp3";
import F5Audio from "../../../public/assets/virtual-piano/notes/F5.mp3";
import G5Audio from "../../../public/assets/virtual-piano/notes/G5.mp3";
import A5Audio from "../../../public/assets/virtual-piano/notes/A5.mp3";
import B5Audio from "../../../public/assets/virtual-piano/notes/B5.mp3";
import Gb5Audio from "../../../public/assets/virtual-piano/notes/Gb5.mp3";
import Ab5Audio from "../../../public/assets/virtual-piano/notes/Ab5.mp3";
import Bb5Audio from "../../../public/assets/virtual-piano/notes/Bb5.mp3";

const LongPiano: React.FC = () => {

  const audioC3 = new Audio(C3Audio);
  const audioD3 = new Audio(D3Audio);
  const audioE3 = new Audio(E3Audio);
  const audioF3 = new Audio(F3Audio);
  const audioG3 = new Audio(G3Audio);
  const audioA3 = new Audio(A3Audio);
  const audioB3 = new Audio(B3Audio);
  const audioDb3 = new Audio(Db3Audio);
  const audioEb3 = new Audio(Eb3Audio);
  const audioGb3 = new Audio(Gb3Audio);
  const audioAb3 = new Audio(Ab3Audio);
  const audioBb3 = new Audio(Bb3Audio);
  const audioC4 = new Audio(C4Audio);
  const audioD4 = new Audio(D4Audio);
  const audioE4 = new Audio(E4Audio);
  const audioF4 = new Audio(F4Audio);
  const audioG4 = new Audio(G4Audio);
  const audioA4 = new Audio(A4Audio);
  const audioB4 = new Audio(B4Audio);
  const audioDb4 = new Audio(Db4Audio);
  const audioEb4 = new Audio(Eb4Audio);
  const audioGb4 = new Audio(Gb4Audio);
  const audioAb4 = new Audio(Ab4Audio);
  const audioBb4 = new Audio(Bb4Audio);
  const audioC5 = new Audio(C5Audio);
  const audioDb5 = new Audio(Db5Audio);
  const audioD5 = new Audio(D5Audio);
  const audioE5 = new Audio(E5Audio);
  const audioEb5 = new Audio(Eb5Audio);
  const audioF5 = new Audio(F5Audio);
  const audioG5 = new Audio(G5Audio);
  const audioA5 = new Audio(A5Audio);
  const audioB5 = new Audio(B5Audio);
  const audioGb5 = new Audio(Gb5Audio);
  const audioAb5 = new Audio(Ab5Audio);
  const audioBb5 = new Audio(Bb5Audio);

  //play audio for 3rd octave
  const playC3 = () => {
    audioC3.play();
  };

  const playD3 = () => {
    audioD3.play();
  };

  const playE3 = () => {
    audioE3.play();
  };

  const playF3 = () => {
    audioF3.play();
  };

  const playG3 = () => {
    audioG3.play();
  };

  const playA3 = () => {
    audioA3.play();
  };

  const playB3 = () => {
    audioB3.play();
  };

  const playDb3 = () => {
    audioDb3.play();
  };

  const playEb3 = () => {
    audioEb3.play();
  };

  const playGb3 = () => {
    audioGb3.play();
  };
  const playAb3 = () => {
    audioAb3.play();
  };
  const playBb3 = () => {
    audioBb3.play();
  };

  const playC4 = () => {
    audioC4.play();
  };
  const playD4 = () => {
    audioD4.play();
  };
  const playE4 = () => {
    audioE4.play();
  };
  const playF4 = () => {
    audioF4.play();
  };
  const playG4 = () => {
    audioG4.play();
  };
  const playA4 = () => {
    audioA4.play();
  };

  const playB4 = () => {
    audioB4.play();
  };

  const playDb4 = () => {
    audioDb4.play();
  };

  const playEb4 = () => {
    audioEb4.play();
  };

  const playGb4 = () => {
    audioGb4.play();
  };

  const playAb4 = () => {
    audioAb4.play();
  };

  const playBb4 = () => {
    audioBb4.play();
  };

  const playC5 = () => {
    audioC5.play();
  };
  const playDb5 = () => {
    audioDb5.play();
  };
  const playD5 = () => {
    audioD5.play();
  };
  const playE5 = () => {
    audioE5.play();
  };
  const playEb5 = () => {
    audioEb5.play();
  };
  const playF5 = () => {
    audioF5.play();
  };
  const playG5 = () => {
    audioG5.play();
  };

  const playA5 = () => {
    audioA5.play();
  };
  const playB5 = () => {
    audioB5.play();
  };
  const playGb5 = () => {
    audioGb5.play();
  };
  const playAb5 = () => {
    audioAb5.play();
  };
  const playBb5 = () => {
    audioBb5.play();
  };

  return (
    <div>
      <div className="relative m-20 flex pt-10 h-5/6 ">
        {/* this is for the white keys */}
        <div className="flex w-8 sm:w-10 md:w-12 lg:w-18 xl:w-20 2xl:w-22 2xl:h-3/5  ml-[-496%]">
        <Image
          onClick={playC3}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano c3"
        />
        <Image
          onClick={playD3}
          className="z-10  cursor-pointer" 
          src={white}
          alt="short piano D3"
        />

        <Image
          onClick={playE3}
          className="z-10  cursor-pointer" 
          src={white}
          alt="short piano E3"
        />
        <Image
          onClick={playF3}
          className="z-10  cursor-pointer" 
          src={white}
          alt="short piano F3"
        />
        <Image
          onClick={playG3}
          className="z-10  cursor-pointer" 
          src={white}
          alt="short piano G3"
        />
        <Image
          onClick={playA3}
          className="z-10 cursor-pointer"
          src={white}
          alt="short piano A3"
        />
        <Image
          onClick={playB3}
          className="z-10  cursor-pointer"
          src={white}
          alt="short piano B3"
        />

        {/* this is for the 4th octave */}
        <Image
          onClick={playC4}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano c4"
        />
        <Image
          onClick={playD4}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano D4"
        />

        <Image
          onClick={playE4}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano E4"
        />
        <Image
          onClick={playF4}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano F4"
        />
        <Image
          onClick={playG4}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano G4"
        />
        <Image
          onClick={playA4}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano A4"
        />
        <Image
          onClick={playB4}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano B4"
        />
       
        {/* this is for the 5th octave */}
        <Image
          onClick={playC5}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano c5"
        />
        <Image
          onClick={playD5}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano D5"
        />

        <Image
          onClick={playE5}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano E4"
        />
        <Image
          onClick={playF5}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano F4"
        />
        <Image
          onClick={playG5}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano G5"
        />
        <Image
          onClick={playA5}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano A5"
        />
        <Image
          onClick={playB5}
          className="z-10 cursor-pointer" 
          src={white}
          alt="short piano B5"
        />
</div>

        {/* Black keys */}
        <div className="flex w-8 -ml-[18%] sm:w-10 sm:-ml-[15%] md:w-12 md:-ml-[11%] lg:w-18 lg:-ml-[12%] xl:w-20 xl:ml-[2.5%] 2xl:w-22 2xl:h-3/5 2xl:ml-[3%] ">
<Image
          onClick={playDb3}
          className="absolute top-10 z-20 h-3/5 cursor-pointer -ml-[31%]"
          src={black}
          alt="short piano Db3"
        />
        <Image
          onClick={playEb3}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[21%] "
          src={black}
          alt="short piano Eb3"
        />
        <Image
          onClick={playGb3}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[121%]"
          src={black}
          alt="short piano Gb3"
        />
        <Image
          onClick={playAb3}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[171%]"
          src={black}
          alt="short piano Ab3"
        />
        <Image
          onClick={playBb3}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[221%]"
          src={black}
          alt="short piano Bb3"
        />
         <Image
          onClick={playDb4}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[321%]"
          src={black}
          alt="short piano Db4"
        />
        <Image
          onClick={playEb4}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[373%]"
          src={black}
          alt="short piano Eb4"
        />
        <Image
          onClick={playGb4}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[470%]"
          src={black}
          alt="short piano Gb4"
        />
        <Image
          onClick={playAb4}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[521%]"
          src={black}
          alt="short piano Ab4"
        />
        <Image
          onClick={playBb4}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[572%]"
          src={black}
          alt="short piano Bb4"
        />

        <Image
          onClick={playDb5}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[671%]"
          src={black}
          alt="short piano Db5"
        />
        <Image
          onClick={playEb5}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[723%]"
          src={black}
          alt="short piano Eb5"
        />
        <Image
          onClick={playGb5}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[820%]"
          src={black}
          alt="short piano Gb5"
        />
        <Image
          onClick={playAb5}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[872%]"
          src={black}
          alt="short piano Ab5"
        />
        <Image
          onClick={playBb5}
          className="absolute top-10 z-20 h-3/5 cursor-pointer ml-[925%]"
          src={black}
          alt="short piano Bb5"
        />
        </div>
      </div>
    </div>
  );
};

export default LongPiano;
