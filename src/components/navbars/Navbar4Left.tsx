import { profile } from "@/utils/general";
import Image from "next/image";
import Link from "next/link";

export default function Navbar4Left() {
  return (
    <div className="w-[8vw] h-[100vh]">
        <div className="flex items-center justify-center bg-[#601d86] w-full h-[12vh] rounded-tr-[20px]">
            <div className="relative w-[60%] h-[60%]">
                <Image src="/navbar/MiniLogo.svg" fill alt=""/>

            </div>
        </div>
        <div className="bg-primary-purple w-full h-[79vh] flex justify-center">
          <div className="w-[50%] h-[80%] mt-[5vh]">
            <div className="relative h-[8vh]">
              <Image src={profile.imageSrc} fill alt="" /> 
            </div>
            <p className="text-center text-4xl 3xl:text-5xl 4xl:text-6xl font-montserrat text-white font-bold mt-[1vh]">{profile.fullName[0]}</p>
            <p className="text-primary-yellow-accent text-center underline text-xl 3xl:text-2xl 4xl:text-3xl font-bold mt-[0.5vh]"><Link href="/account/settings/profile">Edit</Link></p>
            <div className="flex flex-col gap-[1vh] mt-[1vh]">
              <Link href="">
                <div className="bg-white w-full h-[8vh] rounded-2xl flex items-center justify-center">
                  <div className="relative h-[4vh] w-[4vh]">
                    <Image src="/navbar/NavBar4Left/Dashboard.svg" fill alt="D" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="bg-white w-full h-[8vh] rounded-2xl flex items-center justify-center">
                  <div className="relative h-[4vh] w-[4vh]">
                    <Image src="/navbar/NavBar4Left/Lessons.svg" fill alt="L" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="bg-white w-full h-[8vh] rounded-2xl flex items-center justify-center">
                  <div className="relative h-[4vh] w-[4vh]">
                    <Image src="/navbar/NavBar4Left/Games.svg" fill alt="G" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="bg-white w-full h-[8vh] rounded-2xl flex items-center justify-center">
                  <div className="relative h-[4vh] w-[4vh]">
                    <Image src="/navbar/NavBar4Left/MusicTools.svg" fill alt="MT" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="bg-white w-full h-[8vh] rounded-2xl flex items-center justify-center">
                  <div className="relative h-[4vh] w-[4vh]">
                    <Image src="/navbar/NavBar4Left/Planner.svg" fill alt="P" />
                  </div>
                </div>
              </Link>
              <Link href="">
                <div className="bg-white w-full h-[8vh] rounded-2xl flex items-center justify-center">
                  <div className="relative h-[4vh] w-[4vh]">
                    <Image src="/navbar/NavBar4Left/Contact.svg" fill alt="C" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#601d86] w-full h-[9vh] rounded-br-[20px] flex items-center justify-center">
          <button className="border border-primary-yellow py-1 px-6 rounded-full text-[12px] 2xl:text-2xl 4xl:text-3xl font-semibold text-primary-yellow">
            <div className="relative h-[3vh] w-[3vh]">
              <Image src="/navbar/Logout.svg" fill alt="" />
            </div>
          </button>
        </div>
    </div>
  )
}
