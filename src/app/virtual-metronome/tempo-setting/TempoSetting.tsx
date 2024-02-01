import Image from "next/image";
import Slider from "@mui/material/Slider";
import PlayButton from "../../../assets/svg/PauseButton.svg";
import minusFive from "../../../assets/svg/-5 button.svg";
import plusFive from "../../../assets/svg/+5 button.svg";
import decreaseButton from "../../../assets/svg/DecreaseButton.svg";
import increaseButton from "../../../assets/svg/IncreaseButton.svg";
import tempoButton from "../../../assets/svg/Tap Tempo.svg";
import metronomePreseets from "../../../assets/svg/Metronome Preseets 1-4.svg";

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
            <Image src={minusFive} alt="minusFive" className="h-14 w-14" />
            <Image
              src={decreaseButton}
              alt="decreaseButton"
              className="relative top-1.5 h-10 w-10"
            />
          </div>
          <Slider
            sx={{
              color: "#E98427",
            }}
          />
          <div className="flex space-x-2">
            <Image
              src={increaseButton}
              alt="increaseButton"
              className="relative top-1.5 h-10 w-10"
            />
            <Image src={plusFive} alt="plusFive" className="h-14 w-14" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold">Beats {beatsNum}</h2>
        </div>
        <div className="flex space-x-14">
          <div className="flex space-x-2">
            <Image src={minusFive} alt="minusFive" className="h-14 w-14" />
            <Image
              src={decreaseButton}
              alt="decreaseButton"
              className="relative top-1.5 h-10 w-10"
            />
          </div>
          <Slider
            sx={{
              color: "#E98427",
            }}
          />
          <div className="flex space-x-2">
            <Image
              src={increaseButton}
              alt="increaseButton"
              className="relative top-1.5 h-10 w-10"
            />
            <Image src={plusFive} alt="plusFive" className="h-14 w-14" />
          </div>
        </div>
      </div>

      <div className=" space-y-5">
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold">Beat Emphasis</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex space-x-12">
            <div className="flex space-x-2">
              <Image src={minusFive} alt="minusFive" className="h-14 w-14" />
              <Image
                src={decreaseButton}
                alt="decreaseButton"
                className="relative top-1.5 h-10 w-10"
              />
            </div>
            <h2 className="text-5xl font-semibold">{beatEmp}</h2>
            <div className="flex space-x-2">
              <Image
                src={increaseButton}
                alt="increaseButton"
                className="relative top-1.5 h-10 w-10"
              />
              <Image src={plusFive} alt="plusFive" className="h-14 w-14" />
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
              <Image
                src={decreaseButton}
                alt="decreaseButton"
                className="relative top-1.5 h-10 w-10"
              />
            </div>
            <h2 className="text-5xl font-semibold">{timeSeg}</h2>
            <div className="flex space-x-2">
              <Image
                src={increaseButton}
                alt="increaseButton"
                className="relative top-1.5 h-10 w-10"
              />
            </div>
          </div>
        </div>
        <hr className="h-1 w-3/12 bg-yellow-500"></hr>
        <div className="flex justify-center">
          <div className="flex space-x-12">
            <div className="flex space-x-2">
              <Image
                src={decreaseButton}
                alt="decreaseButton"
                className="relative top-1.5 h-10 w-10"
              />
            </div>
            <h2 className="text-5xl font-semibold">{timeSeg}</h2>
            <div className="flex space-x-2">
              <Image
                src={increaseButton}
                alt="increaseButton"
                className="relative top-1.5 h-10 w-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-40">
        <div className="relative left-60 flex space-x-8">
          <Image src={PlayButton} alt="PlayButton" />
          <Image src={tempoButton} alt="tempoButton" />
        </div>

        <div className="flex space-x-24">
          <Image
            src={metronomePreseets}
            alt="metronomePreseets"
            className="h-15 w-15 relative right-10"
          />
          <button className="rounded-lg border-2 border-solid border-orange-400 px-4 py-2 text-lg font-semibold">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempoSetting;
