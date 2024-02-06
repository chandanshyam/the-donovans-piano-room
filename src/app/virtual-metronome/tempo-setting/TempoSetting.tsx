import Image from "next/image";
import Slider from "@mui/material/Slider";

const TempoSetting = () => {
  let tempoNum = 25;
  let beatsNum = 1;
  let beatEmp = 0;
  let timeSeg = 0;

  return (
    <div className="flex basis-3/5 flex-col justify-around px-10">
      <div className="tempo__container flex flex-col desktop:gap-5">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-4xl font-semibold desktop:text-6xl">Tempo</h2>
          <h2 className="text-5xl font-semibold desktop:text-8xl">
            {tempoNum}
          </h2>
        </div>

        <div className="flex gap-10">
          <div className="flex gap-5">
            <button className="bg-light-orange flex h-12 w-16 items-center justify-center rounded-full text-2xl font-semibold desktop:scale-125">
              -5
            </button>

            <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold desktop:scale-125">
              -
            </button>
          </div>
          <Slider
            sx={{
              color: "#E98427",
            }}
          />
          <div className="flex gap-5">
            <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold desktop:scale-125">
              +
            </button>
            <button className="bg-light-orange flex h-12 w-16 items-center justify-center rounded-full text-2xl font-semibold desktop:scale-125">
              +5
            </button>
          </div>
        </div>
      </div>

      <div className="beats__container flex flex-col desktop:gap-5">
        <div className="flex items-center justify-center gap-5">
          <h2 className="text-4xl font-semibold desktop:text-6xl">Beats</h2>
          <h2 className="text-4xl font-semibold desktop:text-7xl">
            {beatsNum}
          </h2>
        </div>

        <div className="flex gap-10">
          <div className="flex gap-5">
            <button className="bg-light-orange flex h-12 w-16 items-center justify-center rounded-full text-2xl font-semibold desktop:scale-125">
              -5
            </button>

            <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold desktop:scale-125">
              -
            </button>
          </div>
          <Slider
            sx={{
              color: "#E98427",
            }}
          />
          <div className="flex gap-5">
            <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold desktop:scale-125">
              +
            </button>
            <button className="bg-light-orange flex h-12 w-16 items-center justify-center rounded-full text-2xl font-semibold desktop:scale-125">
              +5
            </button>
          </div>
        </div>
      </div>

      <div className="beatEmphasis__container flex flex-col gap-5 desktop:gap-10">
        <div className="flex items-center justify-center gap-5">
          <h2 className="text-3xl font-semibold desktop:text-5xl">
            Beat Emphasis
          </h2>
        </div>

        <div className="flex items-center justify-center gap-10 desktop:scale-125">
          <div className="flex gap-5">
            <button className="bg-light-orange flex h-12 w-16 items-center justify-center rounded-full text-2xl font-semibold">
              -5
            </button>

            <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold">
              -
            </button>
          </div>

          <h2 className="text-5xl font-semibold">{beatEmp}</h2>

          <div className="flex gap-5">
            <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold">
              +
            </button>
            <button className="bg-light-orange flex h-12 w-16 items-center justify-center rounded-full text-2xl font-semibold">
              +5
            </button>
          </div>
        </div>
      </div>

      <div className="timeSignature__container flex flex-col items-center space-y-5 desktop:scale-125 desktop:gap-4">
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold desktop:text-4xl">
            Time Signature
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-5">
            <div className="flex">
              <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold">
                -
              </button>
            </div>
            <h2 className="text-5xl font-semibold">{timeSeg}</h2>
            <div className="flex">
              <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold">
                +
              </button>
            </div>
          </div>
        </div>
        <hr className="h-1 w-3/12 bg-yellow-500"></hr>
        <div className="flex justify-center">
          <div className="flex gap-5">
            <div className="flex">
              <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold">
                -
              </button>
            </div>
            <h2 className="text-5xl font-semibold">{timeSeg}</h2>
            <div className="flex">
              <button className="bg-light-orange flex h-12 w-12 items-center justify-center rounded-full text-2xl font-semibold">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tapTempo__container flex justify-center gap-10 desktop:scale-125">
        <div className="flex items-center justify-center rounded-full bg-primary-yellow p-5">
          <Image
            src="/virtual-metronome/PlayButton.svg"
            width={80}
            height={80}
            alt="PlayButton"
            className="ml-2 h-24 w-24"
          />
        </div>

        <button className="rounded-full bg-primary-yellow px-16 text-6xl font-semibold">
          Tap Tempo
        </button>
      </div>

      <div className="metronomePresets__container flex justify-between">
        <div className="flex items-center gap-4 text-3xl font-semibold desktop:text-5xl">
          <p>Metronome Presets</p>
          <button className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold desktop:h-20 desktop:w-20 desktop:text-5xl">
            1
          </button>
          <button className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold desktop:h-20 desktop:w-20 desktop:text-5xl">
            2
          </button>
          <button className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold desktop:h-20 desktop:w-20 desktop:text-5xl">
            3
          </button>
          <button className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold desktop:h-20 desktop:w-20 desktop:text-5xl">
            4
          </button>
        </div>
        <button className="rounded-lg border-2 border-solid border-orange-400 px-4 py-2 text-lg font-semibold desktop:text-5xl">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TempoSetting;
