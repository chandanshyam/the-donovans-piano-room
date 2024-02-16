import Image from "next/image";
import Slider from "@mui/material/Slider";
import { motion } from "framer-motion";

interface MetronomeProps {
  beatsNum: number;
  beatEmp: number;
  animation: boolean;
}

const Metronome = ({ beatsNum, beatEmp, animation }: MetronomeProps) => {
  let innerBeatsNum: number = 1;

  if (beatsNum === 1) {
    innerBeatsNum = 2;
  } else {
    innerBeatsNum = beatsNum;
  }

  return (
    <div className="flex basis-2/5 flex-col justify-between">
      <div className="metronome__container flex flex-col items-center border-2 p-10">
        <div className="ml-auto">
          <Image
            src="./virtual-metronome/FullScreen.svg"
            width={200}
            height={200}
            alt="full screen icon"
            className="h-8 w-8"
          />
        </div>
        <h1
          className="text-5xl font-semibold text-black
                      desktop:text-7xl
                      "
        >
          Allegro
        </h1>
        <div className="mb-12 mt-6 flex w-72 gap-2 desktop:w-96">
          {Array.from({ length: beatsNum }, (_, index) => {
            if (index === beatEmp)
              if (animation) {
                return (
                  <motion.div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      border: `5px solid #FFA500`,
                    }}
                    animate={{
                      backgroundColor: Array.from(
                        { length: innerBeatsNum },
                        (_, innerIndex) => {
                          if (index === innerIndex) {
                            return "rgb(186,85,211)";
                          } else return "#D4D8D4";
                        },
                      ),
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    <div key={index}></div>
                  </motion.div>
                );
              } else
                return (
                  <div
                    key={index}
                    className="h-12 w-12 rounded-full border-4 border-solid text-2xl font-semibold desktop:h-20 desktop:w-20 desktop:text-5xl"
                    style={{
                      borderColor: "#FFA500",
                    }}
                  ></div>
                );

            if (animation) {
              return (
                <motion.div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                  }}
                  animate={{
                    backgroundColor: Array.from(
                      { length: innerBeatsNum },
                      (_, innerIndex) => {
                        if (index === innerIndex) {
                          return "rgb(186,85,211)";
                        } else return "#D4D8D4";
                      },
                    ),
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  <div key={index}></div>
                </motion.div>
              );
            } else
              return (
                <div
                  key={index}
                  className="h-12 w-12 rounded-full border-2 border-solid bg-zinc-300 text-2xl font-semibold desktop:h-20 desktop:w-20 desktop:text-5xl"
                ></div>
              );
          })}
        </div>

        <div
          className="relative h-[35rem] w-[30rem] bg-[url('/virtual-metronome/MetronomeMelody.svg')] bg-contain bg-center 
                        bg-no-repeat
                        laptop:h-[45rem]
                        desktop:h-[55rem] desktop:w-[35rem]
                      "
        >
          {animation ? (
            <motion.div
              animate={{
                rotate: Array.from({ length: 150 }, (_, index) => {
                  if (index < 76) {
                    return index;
                  } else return 150 - index;
                }),
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ originX: 0.5, originY: 0.6 }}
            >
              <Image
                src="./virtual-metronome/MetronomePendulum.svg"
                alt="metronome pendulum"
                width={200}
                height={200}
                className="z-1 relative left-[-4.5rem]
                        top-[-2.5rem]
                        h-[35rem] w-[40rem]
                        laptop:top-[-2rem] laptop:h-[45rem]
                        desktop:top-[1rem] desktop:h-[50rem] desktop:w-[50rem]
                      "
              />
            </motion.div>
          ) : (
            <div>
              <Image
                src="./virtual-metronome/MetronomePendulum.svg"
                alt="metronome pendulum"
                width={200}
                height={200}
                className="z-1 relative left-[-4.5rem]
                    top-[-2.5rem]
                    h-[35rem] w-[40rem]
                    laptop:top-[-2rem] laptop:h-[45rem]
                    desktop:top-[1rem] desktop:h-[50rem] desktop:w-[50rem]
                  "
              />
            </div>
          )}
          <div
            className="absolute left-1/2 top-[22rem] z-10
                          h-8 
                          w-60 translate-x-[-50%]
                          bg-primary-yellow
                          laptop:top-[27.5rem] laptop:h-12
                          desktop:top-[33.5rem]
                        "
          ></div>
        </div>
      </div>

      <div className="volume__container flex flex-col items-center gap-5">
        <h2 className="text-4xl font-semibold desktop:text-5xl">Volume</h2>

        <Slider
          sx={{
            color: "#E98427",
          }}
        />
      </div>

      <div className="soundStyle__container">
        <ul className="flex w-full items-center justify-between text-3xl laptop:text-4xl desktop:text-5xl">
          <li className="rounded-lg bg-primary-blue-accent p-5 font-semibold tracking-wide">
            Bongo
          </li>
          <li className="rounded-lg bg-primary-blue-accent p-5 font-semibold tracking-wide">
            Click
          </li>
          <li className="rounded-lg bg-primary-blue-accent p-5 font-semibold tracking-wide">
            Electric
          </li>
          <li className="rounded-lg bg-primary-blue-accent p-5 font-semibold tracking-wide">
            Percussion
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Metronome;
