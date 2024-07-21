import Button1 from "@/components/atoms/Button1";
import Button2 from "@/components/atoms/Button2";
import Footer2 from "@/components/footers/Footer2";
import Navbar2 from "@/components/navbars/Navbar2";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar2/>
      <div className="w-full h-[100vh] bg-primary-purple flex items-center justify-center">
        <div className="w-[84.7%] h-[70vh] flex items-center justify-between">
          <div className="w-[30%]">
            <h1 className="text-white text-8xl 3xl:text-9xl 4xl:text-[100px] font-semibold font-montserrat">Ready for your music lesson?</h1>
            <p className="text-white text-2xl mt-[5%]">Embark on a fun-filled musical adventure with The Donovan&apos;s Piano Room. Unlock the joy of music with our tailored and enriching music lessons!</p>
            <div className="flex flex-col gap-[3vh] mt-[10%] ">
              <Link href="/login"><Button1 text="Login"></Button1></Link>
              <Link href={"/signup"}><Button2 text="Sign Up"></Button2></Link>
            </div>
          </div>
          <div className="relative w-[80%] h-[90%]">
            <Image src="/home/map.svg" fill alt=""/>
            <div className="absolute bottom-[-10vh] right-[10vw]">
              <div className="relative w-[30vh] h-[30vh]">
                <Image src="/home/listen-music.svg" alt="" fill />
              </div>
            </div>
          </div>
        </div>
      
      {/* background images*/}
      <div className="absolute top-[15vh] left-[34vw]">
        <div className="relative w-[5vw] h-[3vw]">
          <Image src="/background-icons/Elipse216DarkPurple.svg" fill alt=""/>
        </div>
      </div>
      <div className="absolute top-[25vh] left-[29vw]">
        <div className="relative w-[1.5vw] h-[1.5vw]">
          <Image src="/background-icons/DarkPurpleDot.svg" alt="" fill/>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <div className="relative w-[15vw] h-[22vh]">
          <Image fill src="/background-icons/RightTop1.svg" alt=''/>
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="relative w-[22vw] h-[25vh]">
            <Image className='' src="/background-icons/LeftBottom.svg" alt='' fill/>
        </div>
      </div>
          
      </div>
      <Footer2/>
    </>
  );
}
