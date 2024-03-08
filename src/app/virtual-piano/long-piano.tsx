"use client";

import Image from "next/image";
import React from "react";
import white from "../../../public/assets/virtual-piano/WhiteKeys.svg";
import black from "../../../public/assets/virtual-piano/BlackKeys.svg";

//new import audio files
import C1Audio from "../../../public/assets/virtual-piano/notes/C1.mp3";
import D1Audio from "../../../public/assets/virtual-piano/notes/D1.mp3";
import E1Audio from "../../../public/assets/virtual-piano/notes/E1.mp3";
import F1Audio from "../../../public/assets/virtual-piano/notes/F1.mp3";
import G1Audio from "../../../public/assets/virtual-piano/notes/G1.mp3";
import A1Audio from "../../../public/assets/virtual-piano/notes/A1.mp3";
import B1Audio from "../../../public/assets/virtual-piano/notes/B1.mp3";
import C2Audio from "../../../public/assets/virtual-piano/notes/C2.mp3";
import D2Audio from "../../../public/assets/virtual-piano/notes/D2.mp3";
import E2Audio from "../../../public/assets/virtual-piano/notes/E2.mp3";
import F2Audio from "../../../public/assets/virtual-piano/notes/F2.mp3";
import G2Audio from "../../../public/assets/virtual-piano/notes/G2.mp3";
import A2Audio from "../../../public/assets/virtual-piano/notes/A2.mp3";
import B2Audio from "../../../public/assets/virtual-piano/notes/B2.mp3";
import C6Audio from "../../../public/assets/virtual-piano/notes/C6.mp3";
import D6Audio from "../../../public/assets/virtual-piano/notes/D6.mp3";
import E6Audio from "../../../public/assets/virtual-piano/notes/E6.mp3";
import Db1Audio from "../../../public/assets/virtual-piano/notes/Db1.mp3";
import Eb1Audio from "../../../public/assets/virtual-piano/notes/Eb1.mp3";
import Gb1Audio from "../../../public/assets/virtual-piano/notes/Gb1.mp3";
import Ab1Audio from "../../../public/assets/virtual-piano/notes/Ab1.mp3";
import Bb1Audio from "../../../public/assets/virtual-piano/notes/Bb1.mp3";
import Db2Audio from "../../../public/assets/virtual-piano/notes/Db2.mp3";
import Eb2Audio from "../../../public/assets/virtual-piano/notes/Eb2.mp3";
import Gb2Audio from "../../../public/assets/virtual-piano/notes/Gb2.mp3";
import Ab2Audio from "../../../public/assets/virtual-piano/notes/Ab2.mp3";
import Bb2Audio from "../../../public/assets/virtual-piano/notes/Bb2.mp3";
import Db6Audio from "../../../public/assets/virtual-piano/notes/Db6.mp3";
import Eb6Audio from "../../../public/assets/virtual-piano/notes/Eb6.mp3";

//short piano part audio
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
    //create audio for 1st octave
  const audioC1 = new Audio(C1Audio);
  const audioD1 = new Audio(D1Audio);
  const audioE1 = new Audio(E1Audio);
  const audioF1 = new Audio(F1Audio);
  const audioG1 = new Audio(G1Audio);
  const audioA1 = new Audio(A1Audio);
  const audioB1 = new Audio(B1Audio);
  const audioC2 = new Audio(C2Audio);
  const audioD2 = new Audio(D2Audio);
  const audioE2 = new Audio(E2Audio);
  const audioF2 = new Audio(F2Audio);
  const audioG2 = new Audio(G2Audio);
  const audioA2 = new Audio(A2Audio);
  const audioB2 = new Audio(B2Audio);
  const audioC6 = new Audio(C6Audio);
  const audioD6 = new Audio(D6Audio);
  const audioE6 = new Audio(E6Audio);
  const audioDb1 = new Audio(Db1Audio);
  const audioEb1 = new Audio(Eb1Audio);
  const audioGb1 = new Audio(Gb1Audio);
  const audioAb1 = new Audio(Ab1Audio);
  const audioBb1 = new Audio(Bb1Audio);
  const audioDb2 = new Audio(Db2Audio);
  const audioEb2 = new Audio(Eb2Audio);
  const audioGb2 = new Audio(Gb2Audio);
  const audioAb2 = new Audio(Ab2Audio);
  const audioBb2 = new Audio(Bb2Audio);
  const audioDb6 = new Audio(Db6Audio);
  const audioEb6 = new Audio(Eb6Audio);

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

  //play audio for 1st octave
  const playC1 = () => {
    audioC1.play();
  };
  const playD1 = () => {
    audioD1.play();
  };
  const playE1 = () => {
    audioE1.play();
  };
  const playF1 = () => {
    audioF1.play();
  };
  const playG1 = () => {
    audioG1.play();
  };
  const playA1 = () => {
    audioA1.play();
  };
  const playB1 = () => {
    audioB1.play();
  };
  const playDb1 = () => {
    audioDb1.play();
  };
  const playEb1 = () => {
    audioEb1.play();
  };
  const playGb1 = () => {
    audioGb1.play();
  };
  const playAb1 = () => {
    audioAb1.play();
  };
  const playBb1 = () => {
    audioBb1.play();
  };
  const playC2 = () => {
    audioC2.play();
  };
  const playD2 = () => {
    audioD2.play();
  };
  const playE2 = () => {
    audioE2.play();
  };
  const playF2 = () => {
    audioF2.play();
  };
  const playG2 = () => {
    audioG2.play();
  };
  const playA2 = () => {
    audioA2.play();
  };
  const playB2 = () => {
    audioB2.play();
  };
  const playDb2 = () => {
    audioDb2.play();
  };
  const playEb2 = () => {
    audioEb2.play();
  };
  const playGb2 = () => {
    audioGb2.play();
  };
  const playAb2 = () => {
    audioAb2.play();
  };
  const playBb2 = () => {
    audioBb2.play();
  };

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

  //play the 6th octave
  const playC6 = () => {
    audioC6.play();
  };
  const playD6 = () => {
    audioD6.play();
  };
  const playE6 = () => {
    audioE6.play();
  };
  const playDb6 = () => {
    audioDb6.play();
  };
  const playEb6 = () => {
    audioEb6.play();
  };

  return (
    <div>
      <div className="relative m-20 flex h-5/6 pt-10 ">
        {/* this is for the white keys */}
        <div className="flex justify-center w-3 sm:w-4 md:w-7 lg:w-9 lg2:w-10 xl:w-12 xl2:w-13 2xl:w-14 2xl:h-3/5">
            {/* play 1st ortave */}
        <Image
            onClick={playC1}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano c1"
          />
           <Image
            onClick={playD1}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano D1"
          />
           <Image
            onClick={playE1}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano E1"
          />
           <Image
            onClick={playF1}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano F1"
          />
            <Image
            onClick={playG1}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano G1"
          />
          <Image
            onClick={playA1}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano A1"
          />
           <Image
            onClick={playB1}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano B1"
          />
                {/* play 2st ortave */}
           <Image
            onClick={playC2}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano c2"
          />
           <Image
            onClick={playD2}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano D2"
          />
           <Image
            onClick={playE2}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano E2"
          />
           <Image
            onClick={playF2}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano F2"
          />
            <Image
            onClick={playG2}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano G2"
          />
          <Image
            onClick={playA2}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano A2"
          />
           <Image
            onClick={playB2}
            className="z-10 cursor-pointer"
            src={white}
            alt="short piano B2"
          />
 {/* play 3rd ortave */}

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
           {/* play 6th ortave */}
            <Image
                onClick={playC6}
                className="z-10 cursor-pointer"
                src={white}
                alt="short piano c6"
                />
                <Image
                onClick={playD6}
                className="z-10 cursor-pointer"
                src={white}
                alt="short piano D6"
                />
                <Image
                onClick={playE6}
                className="z-10 cursor-pointer"
                src={white}
                alt="short piano E6"
                />
        </div>

        {/* Black keys */}
        <div className="flex sm:-ml-[978%] md:-ml-[978%] lg:-ml-[978%] lg2:-ml-[972%] xl:-ml-[963%] xl2:-ml-[963%] 2xl:-ml-[964%] 2xl:h-3/5 w-3 sm:w-4 md:w-7 lg:w-9 lg2:w-10 xl:w-12 xl2:w-13 2xl:w-14 ">
       {/* play the 1st ortave */}
        <Image
            onClick={playDb1}
            className="absolute top-10 z-20 ml-[1%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Db1"
          />
          <Image
            onClick={playEb1}
            className="absolute top-10 z-20 ml-[50%] h-3/5 cursor-pointer "
            src={black}
            alt="short piano Eb1"
          />
          <Image
            onClick={playGb1}
            className="absolute top-10 z-20 ml-[150%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Gb1"
          />
          <Image
            onClick={playAb1}
            className="absolute top-10 z-20 ml-[200%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Ab1"
          />
          <Image
            onClick={playBb1}
            className="absolute top-10 z-20 ml-[250%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Bb1"
          />
            {/* play the 2nd ortave */}
            <Image
            onClick={playDb2}
            className="absolute top-10 z-20 ml-[350%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Db2"
          />
          <Image
            onClick={playEb2}
            className="absolute top-10 z-20 ml-[400%] h-3/5 cursor-pointer "
            src={black}
            alt="short piano Eb2"
          />
          <Image
            onClick={playGb2}
            className="absolute top-10 z-20 ml-[500%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Gb2"
          />
          <Image
            onClick={playAb2}
            className="absolute top-10 z-20 ml-[550%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Ab2"
          />
          <Image
            onClick={playBb2}
            className="absolute top-10 z-20 ml-[600%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Bb2"
          />
{/* play the 3rd ortave */}
          <Image
            onClick={playDb3}
            className="absolute top-10 z-20 ml-[700%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Db3"
          />
          <Image
            onClick={playEb3}
            className="absolute top-10 z-20 ml-[750%] h-3/5 cursor-pointer "
            src={black}
            alt="short piano Eb3"
          />
          <Image
            onClick={playGb3}
            className="absolute top-10 z-20 ml-[850%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Gb3"
          />
          <Image
            onClick={playAb3}
            className="absolute top-10 z-20 ml-[900%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Ab3"
          />
          <Image
            onClick={playBb3}
            className="absolute top-10 z-20 ml-[950%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Bb3"
          />
          {/* play the 4th ortave */}
          <Image
            onClick={playDb4}
            className="absolute top-10 z-20 ml-[1050%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Db4"
          />
          <Image
            onClick={playEb4}
            className="absolute top-10 z-20 ml-[1100%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Eb4"
          />
          <Image
            onClick={playGb4}
            className="absolute top-10 z-20 ml-[1200%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Gb4"
          />
          <Image
            onClick={playAb4}
            className="absolute top-10 z-20 ml-[1250%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Ab4"
          />
          <Image
            onClick={playBb4}
            className="absolute top-10 z-20 ml-[1300%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Bb4"
          />
{/* play the 5th ortave */}
          <Image
            onClick={playDb5}
            className="absolute top-10 z-20 ml-[1400%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Db5"
          />
          <Image
            onClick={playEb5}
            className="absolute top-10 z-20 ml-[1450%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Eb5"
          />
          <Image
            onClick={playGb5}
            className="absolute top-10 z-20 ml-[1550%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Gb5"
          />
          <Image
            onClick={playAb5}
            className="absolute top-10 z-20 ml-[1600%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Ab5"
          />
          <Image
            onClick={playBb5}
            className="absolute top-10 z-20 ml-[1650%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Bb5"
          />
          {/* play the 6th ortave */}
          <Image
            onClick={playDb6}
            className="absolute top-10 z-20 ml-[1750%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Db6"
          />
          <Image
            onClick={playEb6}
            className="absolute top-10 z-20 ml-[1800%] h-3/5 cursor-pointer"
            src={black}
            alt="short piano Eb6"
          />
        </div>
      </div>
    </div>
  );
};

export default LongPiano;
