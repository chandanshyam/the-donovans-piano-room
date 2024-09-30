"use client"
import { authorizedWrapperTitles, profile } from "@/utils/general";
import { nav4leftLinks, profileAtom } from "@/utils/stores";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import FirstLesson from "./components/FirstLesson";
import GamesHighlights from "./components/GamesHighlights";
import MusicNotes from "./components/MusicNotes";
import "../../../styles/primary-purple-scrollbar.css"
import AuthorizedWrapper2 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper2";

export default function Page() {
    const setProfile = useSetAtom(profileAtom)
    const [displayName, setDisplayName] = useState('')
    useEffect(()=>{
        const fetchUserData = async () =>{
           try{
                const response = await fetch('http://localhost:3333/api/user/',{
                    method: 'GET', 
                    credentials: "include",
                }).then( async (response) =>{
                    const data = await response.json()
                    console.log(data)
                })
                setProfile(profile)
                const name = profile.fullName.split(" ")[0]
                setDisplayName(name)

           }catch(e){
            console.log('Error fecthing user Data: ', e)
           }

        } 
        fetchUserData();  
    },[])
  return (
    <AuthorizedWrapper2 pageTitle={authorizedWrapperTitles.Dashboard} openedLink={nav4leftLinks.dashboard}>
        <div className="relative flex h-[75vh] mt-[1.5%] overflow-y-auto z-[30] gap-[8%]">
            <div className="w-[60%]">
                <h1 className="text-primary-brown text-6xl 3xl:text-7xl 4xl:text-8xl font-semibold montserrat">Morning {displayName}!</h1>
                <p className="text-3xl 3xl:text-4xl 4xl:text-5xl mt-[2%]">Check out the latest stuff we have ready for you.</p>
                <FirstLesson/>
                <GamesHighlights/>
                
            </div>
            <div>
                <MusicNotes/>
            </div>
            
        </div>
    </AuthorizedWrapper2>
  )
}
