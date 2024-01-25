import Image from "next/image";
import FullScreenIcon from "../../../assets/svg/FullScreen.svg";
import MetronomePendulum from "../../../assets/svg/MetronomePendulum.svg";
import MetronomeTime_1 from "../../../assets/svg/MetronomeTime_1.svg";

const Metronome = () => {
  return (
    <div className="flex basis-2/5 flex-col items-center border-2 p-10">
      <div className="ml-auto">
        <Image
          src={FullScreenIcon}
          alt="full screen icon"
          className="h-8 w-8"
        />
      </div>

      <h1 className="text-5xl font-semibold text-black">Allegro</h1>

      <Image
        src={MetronomeTime_1}
        alt="Metronome 1"
        className="mb-12 mt-6 w-72"
      />

      <div className="metronome__container relative h-[50rem] w-[50rem] bg-[url('/MetronomeMelody.svg')] bg-contain bg-center bg-no-repeat">
        <Image
          src={MetronomePendulum}
          alt="metronome pendulum"
          className="z-1 absolute left-[-5rem] top-[-4rem] h-[50rem] w-[45rem]"
        />

        <div className="bg-primary-yellow absolute left-1/2 top-[31.5rem] z-10 h-14 w-96 translate-x-[-50%]"></div>
      </div>
    </div>
  );
};

export default Metronome;
