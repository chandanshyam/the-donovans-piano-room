"use client"
import { authorizedWrapperTitles, profile, settingsNavigation } from "@/utils/general";
import AccountForm from "./components/AccountForm"
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import { useState } from "react";
import AvatarSelectPopup from "./components/AvatarSelectPopup";
export default function page() {

  const [avatar, setAvatar] = useState(profile.imageSrc)
  const [selectingAvatar, setSelectingAvatar] = useState(true)
  const closeSelectingAvatar = () => {
    setSelectingAvatar(false)
  }
  return (
    <AuthorizedWrapper1 pageTitle={authorizedWrapperTitles.AccountAndSettings}>
      <AccountAndSettingsNav currentPage={settingsNavigation.profile}/>
        <div className="w-full h-[85%] mt-[1%]">
          <div className="flex w-full">
            <AccountForm />
            {selectingAvatar && <AvatarSelectPopup avatar={avatar} setAvatar={setAvatar} closeSelectingAvatar={closeSelectingAvatar} />}
    
          </div>
        </div>
    </AuthorizedWrapper1>
  )
}
