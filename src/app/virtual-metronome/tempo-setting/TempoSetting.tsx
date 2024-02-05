import Image from "next/image";
import Slider from "@mui/material/Slider";
// import PlayButton from "../../../assets/svg/PauseButton.svg";
// import tempoButton from "../../../assets/svg/Tap Tempo.svg";

const TempoSetting = () => {
  let tempoNum = 25;
  let beatsNum = 1;
  let beatEmp = 0;
  let timeSeg = 0;

  return (
    <div className="basis-3/5 space-y-10 p-36">
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold">Tempo</h2>
          <h2 className="text-5xl font-semibold">{tempoNum}</h2>
        </div>
        <div className="flex space-x-14">
          <div className="flex space-x-2">
            <button className="h-12 w-16 rounded-3xl border-2 border-solid bg-orange-400 text-2xl font-semibold">
              -5
            </button>

            <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
              -
            </button>
          </div>
          <Slider
            sx={{
              color: "#E98427",
            }}
          />
          <div className="flex space-x-2">
            <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
              +
            </button>
            <button className="h-12 w-16 rounded-3xl border-2 border-solid bg-orange-400 text-2xl font-semibold">
              +5
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold">Beats {beatsNum}</h2>
        </div>
        <div className="flex space-x-14">
          <div className="flex space-x-2">
            <button className="h-12 w-16 rounded-3xl border-2 border-solid bg-orange-400 text-2xl font-semibold">
              -5
            </button>

            <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
              -
            </button>
          </div>
          <Slider
            sx={{
              color: "#E98427",
            }}
          />
          <div className="flex space-x-2">
            <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
              +
            </button>
            <button className="h-12 w-16 rounded-3xl border-2 border-solid bg-orange-400 text-2xl font-semibold">
              +5
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold">Beat Emphasis</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex space-x-12">
            <div className="flex space-x-2">
              <button className="h-12 w-16 rounded-3xl border-2 border-solid bg-orange-400 text-2xl font-semibold">
                -5
              </button>

              <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
                -
              </button>
            </div>
            <h2 className="text-5xl font-semibold">{beatEmp}</h2>
            <div className="flex space-x-2">
              <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
                +
              </button>
              <button className="h-12 w-16 rounded-3xl border-2 border-solid bg-orange-400 text-2xl font-semibold">
                +5
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold">Time Signature</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex space-x-12">
            <div className="flex space-x-2">
              <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
                -
              </button>
            </div>
            <h2 className="text-5xl font-semibold">{timeSeg}</h2>
            <div className="flex space-x-2">
              <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
                +
              </button>
            </div>
          </div>
        </div>
        <hr className="h-1 w-3/12 bg-yellow-500"></hr>
        <div className="flex justify-center">
          <div className="flex space-x-12">
            <div className="flex space-x-2">
              <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
                -
              </button>
            </div>
            <h2 className="text-5xl font-semibold">{timeSeg}</h2>
            <div className="flex space-x-2">
              <button className="h-12 w-12 rounded-full border-2 border-solid bg-orange-400 text-2xl font-semibold">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-40">
        <div className="relative left-60 flex space-x-8">
          {/* <Image src={PlayButton} alt="PlayButton" />
          <Image src={tempoButton} alt="tempoButton" /> */}
        </div>

        <div className="flex space-x-24">
          <div className="flex items-center space-x-5 text-3xl font-semibold">
            <p>Metronome Presets</p>
            <button className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold">
              1
            </button>
            <button className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold">
              2
            </button>
            <button className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold">
              3
            </button>
            <button className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold">
              4
            </button>
          </div>
          <button className="rounded-lg border-2 border-solid border-orange-400 px-4 py-2 text-lg font-semibold">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempoSetting;
