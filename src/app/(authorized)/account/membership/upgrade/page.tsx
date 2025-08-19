"use client";
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import {
  authorizedWrapperTitles,
  settingsNavigation,
} from "@/utils/general";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PlanCard from "../components/PlanCard";
export default function UpgradePage() {
  const router = useRouter();

  const commonBenefits = [
    "Voice lessons",
    "Ear training",
    "Games",
    "Benefit 4",
  ];

  const moreBenefits = [
    "Flexibility: easily choose to continue or cancel based on your needs and satisfaction.",
    "Lower upfront cost: it ideal for budget-conscious individuals or those wanting to test the program before committing long-term.",
    "Reduced commitment: with this plan, you're not tied to a long-term commitment.",
  ];

  // Plan assets (you can add more assets as needed)
  const scholarshipFreeAssets = [
    {
      src: "/memberships/upgrade/Vector.svg",
      width: 140,
      height: 120,
      className: "left-6 top-20 scale-[0.7]"
    }
  ];

  const monthlyAssets = [
    {
      src: "/memberships/upgrade/1-Month/Group 48096278.svg",
      width: 200,
      height: 150,
      className: "inset-0 scale-[0.8]"
    }
  ];

  const scholarshipPaidAssets = [
    {
      src: "/memberships/upgrade/Vector.svg", 
      width: 140,
      height: 120,
      className: "left-6 top-20 scale-[0.7]"
    }
  ];

  const yearlyAssets = [
    {
      src: "/memberships/upgrade/1-Year/Group 48095969.svg",
      width: 180,
      height: 140, 
      className: "inset-0 scale-[0.75]"
    }
  ];

  return (
    <AuthorizedWrapper1 
      pageTitle={authorizedWrapperTitles.AccountAndSettings}
      openedLink=""
    >
      <AccountAndSettingsNav currentPage={settingsNavigation.membership} />

      <div className="mt-4 w-full max-w-[1112px]">
        {/* Back button */}
        <button className="mb-6 flex items-center gap-2 text-primary-purple" onClick={() => router.push('/account/membership')}>
          <Image
            className="h-5 w-5 shrink-0"
            src="/memberships/upgrade/arrow_back_FILL0_wght400_GRAD0_opsz24 1.svg"
            alt="Back arrow"
            width={20}
            height={20}
          />
          Your membership
        </button>

        <h1 className="font-montserrat text-5xl font-medium text-primary-brown 3xl:text-6xl 4xl:text-7xl">
          Select your plan
        </h1>
        
        <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium mt-[2%]">
          There are multiple membership you can choose from, select the one that best suits your interests.
        </p>
        <div className='mt-[5vh] mb-[5vh] bg-[#FED2AA] h-1'></div>
        
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          
          {/* Scholarship FREE */}
          <PlanCard
            planName="Scholarship"
            price="FREE"
            period=""
            headerColor="bg-orange-400"
            headerTextColor="text-white"
            priceBackgroundColor="bg-orange-50"
            benefits={commonBenefits}
            moreBenefits={moreBenefits}
            backgroundAssets={scholarshipFreeAssets}
          />

          {/* 1-Month $29.99 */}
          <PlanCard
            planName="1-Month"
            price="$29.99"
            period="per month"
            headerColor="bg-green-600"
            headerTextColor="text-white"
            priceBackgroundColor="bg-green-50"
            isCurrent={true}
            benefits={commonBenefits}
            moreBenefits={moreBenefits}
            backgroundAssets={monthlyAssets}
          />

          {/* Scholarship $1.99 */}
          <PlanCard
            planName="Scholarship"
            price="$1.99"
            period="one day"
            headerColor="bg-purple-600"
            headerTextColor="text-white"
            priceBackgroundColor="bg-purple-50"
            benefits={commonBenefits}
            moreBenefits={moreBenefits}
            backgroundAssets={scholarshipPaidAssets}
          />

          {/* 1-Year $19.99 */}
          <PlanCard
            planName="1 Year"
            price="$19.99"
            period="per month"
            headerColor="bg-yellow-500"
            headerTextColor="text-white"
            priceBackgroundColor="bg-yellow-50"
            isPopular={true}
            benefits={commonBenefits}
            moreBenefits={moreBenefits}
            backgroundAssets={yearlyAssets}
          />

        </div>
      </div>
    </AuthorizedWrapper1>
  );
}
