"use client"
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import { authorizedWrapperTitles, profile } from "@/utils/general";
import { nav4leftLinks, profileAtom } from "@/utils/stores";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export default function page() {
    const setProfile = useSetAtom(profileAtom)
    useEffect(()=>{
        setProfile(profile)
    })
  return (
    <AuthorizedWrapper1 pageTitle={authorizedWrapperTitles.Dashboard} openedLink={nav4leftLinks.dashboard}>
        <></>
    </AuthorizedWrapper1>
  )
}
