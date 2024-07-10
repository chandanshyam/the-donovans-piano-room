"use client"
import AccountWrapper from "@/components/ContentWrappers/account/AccountWrapper";
import { settingsNavigation } from "@/utils/general";
import AccountForm from "./components/AccountForm"
import Calender from "./components/Calender";

export default function page() {
  return (
    <AccountWrapper currentPage={settingsNavigation.profile}>
      <div className="flex w-full">
        <AccountForm />
        <Calender />
      </div>
    </AccountWrapper>
  )
}

