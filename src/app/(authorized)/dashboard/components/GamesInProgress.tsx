import Image from "next/image";
import LinearProgress from '@mui/material/LinearProgress';
import "./GamesInProgress.css"

export default function GamesInProgress() {
  return (
    <div className="w-[45vw] h-[24vh] bg-primary-skin overflow-y-hidden rounded-2xl" style={{boxShadow: "inset -1px 0px 10px 4px  rgb(217, 186, 139, 0.7)"}}>
        <div className="flex items-center gap-[2%] ml-[1vw] mt-[1.7vh] text-primary-brown text-xl 3xl:text-2xl 4xl:text-3xl font-semibold">
            <div className="relative h-[3vh] w-[3vh]">
                <Image src="/dashboard/game-icon.svg" fill alt=""/>
            </div>
            <p>Games in progress</p>
            <p className="bg-[#F8DCB0] p-3 rounded-lg">2</p>
        </div>
        <div className="relative w-[95%] overflow-x-scroll ml-[1vw] pb-[2.2vh] 3xl:pb-[3vh] 4xl:pb-[3.7vh]">

        <div className="flex mt-[2%]">
            {dummydata.map((game, i) => (
                <div key={i} className="flex bg-white h-[13vh] w-[27vw] items-center mr-[3%] cursor-pointer rounded-2xl">
                    <div className="relative h-[8vh] w-[8vh] ml-[5%]">
                        <Image src={game.image} fill alt=""/>
                    </div>
                    <div className="ml-6 w-[20vw]">
                        <p className="text-xl 3xl:text-2xl 4xl:text-3xl">Level: {game.level} | Score: {game.score}</p>
                        <p className="text-2xl 3xl:text-3xl 4xl:text-4xl text-primary-brown font-semibold">{game.name}</p>
                        <div className="flex items-center">
                            <LinearProgress
                                variant="determinate"
                                sx={{bgcolor: "#EAE8E8", height: "1.3vh", width: "50%", borderRadius: "15px",
                                    "& .MuiLinearProgress-bar": {
                                        bgcolor: "#438342",
                                        borderRadius: "15px"
                                    }
                                }}
                                value={game.compeleted}  
                            />
                            <p className="text-xl 3xl:text-2xl 4xl:text-3xl ml-[3%]">{game.compeleted}% completed</p>
                        </div>
                    </div>
                    <div className="float-right bg-[#F5E8FE] w-[15%] h-full rounded-r-2xl flex items-center justify-center">
                        <div className="relative h-[2vh] w-[2vh]"><Image className="rotate-[-90deg]" src="/about/FAQs/DropdownIcon.svg" fill alt=""/></div>
                    </div>

                </div>
            ))}
        </div>
    </div>
    
    </div>
  )
}

const dummydata = [
    {
        name: "Note Identification",
        image: "/games-icons/note-identification.svg",
        level: "easy",
        score: "XX",
        compeleted: 65
    },
    {
        name: "Key Signature",
        image: "/games-icons/key-signature.svg",
        level: "easy",
        score: "XX",
        compeleted: 10
    },
]