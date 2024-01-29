import Image from "next/image";
import FullScreenIcon from "../../../assets/svg/FullScreen.svg";
import MetronomePendulum from "../../../assets/svg/MetronomePendulum.svg";
import MetronomeTime_1 from "../../../assets/svg/MetronomeTime_1.svg";
import Slider from "@mui/material/Slider";

const Metronome = () => {
  return (
    <div className="flex basis-2/5 flex-col gap-5">
      <div className="metronome__container flex flex-col items-center border-2 p-10">
        <div className="ml-auto">
          <Image
            src={FullScreenIcon}
            alt="full screen icon"
            className="h-8 w-8"
          />
        </div>

        <h1 className="text-black text-5xl font-semibold">Allegro</h1>

        <Image
          src={MetronomeTime_1}
          alt="Metronome 1"
          className="mb-12 mt-6 w-72"
        />

        <div className="relative h-[50rem] w-[50rem] bg-[url('/MetronomeMelody.svg')] bg-contain bg-center bg-no-repeat">
          <Image
            src={MetronomePendulum}
            alt="metronome pendulum"
            className="z-1 absolute left-[-5rem] top-[-4rem] h-[50rem] w-[45rem]"
          />

          <div className="absolute left-1/2 top-[31.5rem] z-10 h-14 w-96 translate-x-[-50%] bg-primary-yellow"></div>
        </div>
      </div>

      <div className="volume__container flex flex-col items-center gap-3">
        <h2 className="text-4xl font-semibold">Volume</h2>

        <Slider
          sx={{
            color: "#E98427",
          }}
        />

        <ul className="flex w-full justify-between">
          <li className="bg-primary-blue-accent rounded-lg px-5 py-3 text-4xl font-semibold tracking-wide">
            Bongo
          </li>
          <li className="bg-primary-blue-accent rounded-lg px-5 py-3 text-4xl font-semibold tracking-wide">
            Click
          </li>
          <li className="bg-primary-blue-accent rounded-lg px-5 py-3 text-4xl font-semibold tracking-wide">
            Electric
          </li>
          <li className="bg-primary-blue-accent rounded-lg px-5 py-3 text-4xl font-semibold tracking-wide">
            Percussion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Metronome;
