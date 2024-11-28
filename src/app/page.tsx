import Button1 from "@/components/atoms/Button1";
import Button2 from "@/components/atoms/Button2";
import Footer2 from "@/components/footers/Footer2";
import Navbar2 from "@/components/navbars/Navbar2";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <div className="flex h-[100vh] w-full items-center justify-center bg-primary-purple">
        <div className="relative z-10 flex h-[70vh] w-[84.7%] items-center justify-between">
          <div className="w-[40%]">
            <div className="w-[70%]">
              <h1 className="font-montserrat text-2xl font-semibold text-white sm:text-4xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-9xl 4xl:text-9xl">
                Ready for your music lesson?
              </h1>
              <p className="mt-[5%] text-xs text-white sm:text-xs lg:text-base xl:text-xl">
                Embark on a fun-filled musical adventure with The Donovan&apos;s
                Piano Room. Unlock the joy of music with our tailored and
                enriching music lessons!
              </p>
              <div className="mt-[10%] flex flex-col gap-[2vh]">
                <Link href="/login">
                  <Button1 text="Login"></Button1>
                </Link>
                <Link href={"/signup"}>
                  <Button2 text="Sign Up"></Button2>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[100%] w-[60%]">
            <Image className="h-full w-full" src="/home/map.svg" fill alt="" />
            <Link href={"/bookstore"}>
              <button className="absolute left-[11.5vw] top-[10.5vh] font-mountains font-bold text-green-accent hover:text-gray-200 sm:max-md:text-[16px] md:max-lg:text-[18px] lg:max-xl:text-[20px] xl:left-[11vw] xl:top-[10.5vh] xl:text-[28px] xl:max-2xl:text-[26px]">
                Bookstore
              </button>
            </Link>
            <Link href={"/about/why-choose-us"}>
              <button className="absolute left-[28vw] top-[16vh] font-mountains font-bold text-green-accent hover:text-gray-200 sm:max-md:text-[16px] md:max-lg:text-[18px] lg:max-xl:text-[20px] xl:text-[28px] xl:max-2xl:text-[26px]">
                About
              </button>
            </Link>
            <Link href={"https://thedonovansmusicgames.netlify.app/"}>
              <button className="absolute left-[19vw] top-[42vh] font-mountains font-bold text-green-accent  hover:text-gray-200 sm:max-md:text-[16px] md:max-lg:text-[18px] lg:max-xl:text-[20px] xl:text-[28px] xl:max-2xl:text-[26px]">
                Games
              </button>
            </Link>
          </div>
        </div>

        {/* background images*/}
        <div className="absolute left-[34vw] top-[15vh]">
          <div className="relative h-[3vw] w-[5vw]">
            <Image
              src="/background-icons/Elipse216DarkPurple.svg"
              fill
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-[29vw] top-[25vh]">
          <div className="relative h-[1.5vw] w-[1.5vw]">
            <Image src="/background-icons/DarkPurpleDot.svg" alt="" fill />
          </div>
        </div>
        <div className="absolute right-0 top-0">
          <div className="relative h-[22vh] w-[15vw]">
            <Image fill src="/background-icons/RightTop1.svg" alt="" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <div className="relative h-[25vh] w-[22vw]">
            <Image
              className=""
              src="/background-icons/LeftBottom.svg"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}
