"use client";
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import {
  authorizedWrapperTitles,
  settingsNavigation,
} from "@/utils/general";
 
import CurrentMembership from "./components/CurrentMembership";
import AutoRenewPayment from "./components/AutoRenewPayment";
import "../../../../styles/primary-purple-scrollbar.css";

export default function Page() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  
  return (
    <AuthorizedWrapper1
      pageTitle={authorizedWrapperTitles.AccountAndSettings}
      openedLink=""
    >
      <AccountAndSettingsNav currentPage={settingsNavigation.membership} />

        <div className="mt-4 w-full max-w-[1112px]">
        <h1 className="mt-[3vh] font-montserrat text-5xl font-medium text-primary-brown 3xl:text-6xl 4xl:text-7xl">
          Your membership
          </h1>

          <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium mt-[2%]">As a valued monthly 
          paying member, your membership #123456789 will be auto renewed on <span className="font-semibold 
          text-primary-orange">{formattedDate}.</span></p>
          <div className='mt-[5vh] mb-[5vh] bg-[#FED2AA] h-1'></div>

          <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-9">
            <CurrentMembership />
            <AutoRenewPayment />
          </div>
        

        </div>

    </AuthorizedWrapper1>
  );
}