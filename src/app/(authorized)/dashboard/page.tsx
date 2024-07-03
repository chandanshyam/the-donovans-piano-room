"use client"
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import Button3 from "@/components/atoms/Button3";
import { authorizedWrapperTitles, profile } from "@/utils/general";
import { nav4leftLinks, profileAtom } from "@/utils/stores";
import { useSetAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";
import FirstLesson from "./components/FirstLesson";

export default function page() {
    const setProfile = useSetAtom(profileAtom)
    const [displayName, setDisplayName] = useState('')
    useEffect(()=>{
        setProfile(profile)
        const name = profile.fullName.split(" ")[0]
        setDisplayName(name)
    })
  return (
    <AuthorizedWrapper1 pageTitle={authorizedWrapperTitles.Dashboard} openedLink={nav4leftLinks.dashboard}>
        <div className="relative flex h-[94%] mt-[1.5%] overflow-y-auto z-30">
            <div className="w-[60%]">
                <h1 className="text-primary-brown text-6xl 3xl:text-7xl 4xl:text-8xl font-semibold">Morning {displayName}!</h1>
                <p className="text-3xl 3xl:text-4xl 4xl:text-5xl">Check out the latest stuff we have ready for you.</p>
                <FirstLesson/>
            </div>
        </div>
    </AuthorizedWrapper1>
  )
}
