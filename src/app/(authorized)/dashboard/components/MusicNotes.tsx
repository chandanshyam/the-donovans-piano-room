import Image from "next/image";
import Button3 from "@/components/atoms/Button3";
import Link from "next/link";
export default function MusicNotes() {
  const displayBlank = () => <div className="relative h-[2.5vw] w-[2.5vw] bg-[#DDDADA] rounded-full" />
  const displayProgress = () => (
    <div className="relative h-[2.5vw] w-[2.5vw]">
      <Image src="/dashboard/tone.svg" alt="" fill></Image>
    </div>
  )
    function cardTile(toolImagePath: string = "", title: string = "", isNew: Boolean = false) {
        return (
            <div className="flex justify-between items-center gap-[2%] text-xl 3xl:text-2xl 4xl:text-3xl font-semibold text-primary-brown 3xl:text-2xl 4xl:text-3xl">
               <div className="flex items-center">
                    <div className="relative h-[3vh] w-[3vh]">
                        <Image src={toolImagePath} fill alt="" />
                    </div>
                    <p>{title}</p>
               </div>
                
                {isNew && 
                    <div className="flex gap-[9%] items-center p-2 pr-4 rounded-xl bg-secondary-yellow">
                        <div className="svg-icon">
                            <div className="relative h-[2vh] w-[2vh]">

                              <Image src="/dashboard/tick-vector.svg" alt="Icon" fill />
                            </div>
                        </div>
                        <p className="text-xl 3xl:text-2xl 4xl:text-3xl">New</p>
                    </div>
                }
            </div>
            
        )
    }
        

  return (
    <div className="p-12 rounded-2xl border-2 border-white h-[91vh] w-[28vw] ml-[-3vw] overflow-y-auto" style={{boxShadow: "inset -1px 0px 10px 4px  #DFC9F9",}}>
      <h4 className="text-primary-brown font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold">
      Things you need to know (2)
      </h4>
      <div className="bg-white p-6 rounded-2xl my-[5%]">

        {cardTile("/dashboard/bolt.svg", "Acheivements")}
        <p className="text-xl 3xl:text-2xl 4xl:text-3xl mt-4 mb-4 font-semibold text-[#3F3B3C]">STREAKS (3 DAY-AVG)</p>
        <div>

        <div className="flex justify-between">
          <div className="flex flex-col justify-center text-center gap-4">
            <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-center">S</h4>
            {displayProgress()}
          </div>
          <div className="flex flex-col justify-center text-center gap-4">
            <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-center">M</h4>
            {displayProgress()}
          </div>
          <div className="flex flex-col justify-center text-center gap-4">
            <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-center">T</h4>
            {displayProgress()}
          </div>
          <div className="flex flex-col justify-center text-center gap-4">
            <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-center">W</h4>
            {displayBlank()}
          </div>
          <div className="flex flex-col justify-center text-center gap-4">
            <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-center">T</h4>

              {displayBlank()}
          </div>
          <div className="flex flex-col justify-center text-center gap-4">
            <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-center">F</h4>

              {displayBlank()}
          </div>
          <div className="flex flex-col justify-center text-center gap-4">
          <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-center">S</h4>
            {displayBlank()}
        </div>
      </div>  
      <div className="h-1 w-full my-[5%] bg-[#FED2AA]"></div>
        
      <div className="mb-[5%]">
        <p className="text-xl 3xl:text-2xl 4xl:text-3xl font-semibold text-left text-[#3F3B3C]">
          SCORE
        </p>
        <div className="flex justify-between">
          <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-left mt-[2%]">
          Your average score has increased <span className="text-[#438242]">15%</span> this week</h4>
          <div className="relative h-[4vw] w-[7vw]">
            <Image src="/dashboard/arrow.svg" alt="" fill />
          </div>
        </div>
      </div>

    </div>

    </div>
    <div className="bg-white p-6 rounded-2xl">
      {cardTile("/dashboard/tool-image.svg", "Music Notes", true)}

      <div className="relative h-[24vh] mt-[2%]">
        <Image
          src="/dashboard/pianoss.svg"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="">
        <h4 className="text-left text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold text-[#59371D]">
          The Piano is now available
        </h4>
        <p className="font-roboto my-[3%] text-2xl 3xl:text-3xl 4xl:text-4xl font-normal">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Link className="mt-[2%]" href="/virtual-piano">
        <Button3 text="Try it Now"  style={{width: "8vw", height : "5vh"}}/>
      </Link>
      
    </div>
    </div>
    
  );
}
