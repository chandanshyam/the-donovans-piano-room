"use client";
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import {
  authorizedWrapperTitles,
  settingsNavigation,
} from "@/utils/general";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PlanCard from "../components/PlanCard";
import BenefitAccessCard from "../components/BenefitAccessCard";
export default function UpgradePage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  // hardcoded for now
  const commonBenefits = [
    "Voice lessons",
    "Ear training",
    "Games",
    "Benefit 4",
  ];

  // hardcoded for now
  const moreBenefits = [
    "Flexibility: easily choose to continue or cancel based on your needs and satisfaction.",
    "Lower upfront cost: it ideal for budget-conscious individuals or those wanting to test the program before committing long-term.",
    "Reduced commitment: with this plan, you're not tied to a long-term commitment.",
  ];

  // hardcoded for now
  const planPrices = {
    'free': "0", // Scholarship FREE
    'day': "1.99", // 1-Day
    'month': "29.99", // 1-Month 
    'year': "19.99"  // 1-Year
  };

  // Plan-specific benefits for benefit access cards
  const planBenefits = {
    'free': { // Scholarship FREE
      name: "Free access",
      headerColor: "bg-[#e98427]",
      textColor: "text-white",
      benefits: moreBenefits
    },
    'month': { // 1-Month
      name: "Monthly scholarship access", 
      headerColor: "bg-[#FED2AA]",
      textColor: "text-[#8B4513]",
      benefits: moreBenefits
    },
    'day': { // Scholarship $1.99
      name: "Daily scholarship access",
      headerColor: "bg-[#6F219E]", 
      textColor: "text-white",
      benefits: moreBenefits
    },
    'year': { // 1-Year
      name: "Annual access",
      headerColor: "bg-[#E9BB18]",
      textColor: "text-white", 
      benefits: moreBenefits
    }
  };

  // Plan assets
  const scholarshipFreeAssets = [
    {
      src: "/memberships/upgrade/Scholoarship-free/Group 48096278.svg",
      className: "inset-0 object-cover"
    }
  ];

  const monthlyAssets = [
    {
      src: "/memberships/upgrade/1-Month/Group 48096278.svg",
      className: "inset-0 object-cover"
    }
  ];

  const scholarshipPaidAssets = [
    {
      src: "/memberships/upgrade/Scholoarship/Group 48096278.svg", 
      className: "inset-0 object-cover"
    }
  ];

  const yearlyAssets = [
    {
      src: "/memberships/upgrade/1-Year/Group 48095969.svg",
      className: "inset-0 object-cover"
    }
  ];

  return (
    <AuthorizedWrapper1 
      pageTitle={authorizedWrapperTitles.AccountAndSettings}
      openedLink=""
    >
      <AccountAndSettingsNav currentPage={settingsNavigation.membership} />

      <div className="mt-4 w-full">
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
        
        <div className="mt-8 overflow-x-auto">
          <div className="flex gap-6 min-w-fit">
            
            {/* Scholarship FREE */}
            <div className="flex-shrink-0 w-80 md:w-96">
              <div onClick={() => setSelectedPlan(selectedPlan === 0 ? null : 0)} className="cursor-pointer">
              <PlanCard
                planName="Scholarship"
                price="FREE"
                period=""
                headerColor="bg-[#e98427]"
                headerTextColor="text-white"
                priceBackgroundColor="bg-orange-50"
                showChooseButton={true}
                onChooseClick={() => {/* TODO: Handle scholarship free plan selection */}}
                priceBlockSize = "py-14"
                benefits={commonBenefits}
                moreBenefits={moreBenefits}
                successIcon="/memberships/upgrade/Scholoarship-free/Success.svg"
                useSingleColumn={true}
                backgroundAssets={scholarshipFreeAssets}
              />
              </div>
            </div>

            {/* Benefit Access Card for Plan 0 */}
            {selectedPlan === 0 && (
              <div className="flex-shrink-0 w-80 md:w-96">
                <BenefitAccessCard 
                  onClose={() => setSelectedPlan(null)}
                  planName={planBenefits['free'].name}
                  headerColor={planBenefits['free'].headerColor}
                  textColor={planBenefits['free'].textColor}
                  benefits={planBenefits['free'].benefits}
                />
              </div>
            )}
            {/* Scholarship $1.99 */}
            <div className="flex-shrink-0 w-80 md:w-96">
              <div onClick={() => setSelectedPlan(selectedPlan === 2 ? null : 2)} className="cursor-pointer">
              <PlanCard
                planName="1-Day Scholarship"
                price={`$${planPrices['day']}`}
                period="per day"
                headerColor="bg-[#6F219E]"
                headerTextColor="text-white"
                priceBackgroundColor="bg-purple-100"
                showChooseButton={true}
                onChooseClick={() => {/* TODO: Handle scholarship paid plan selection */}}
                priceBlockSize = "py-14"
                benefits={commonBenefits}
                moreBenefits={moreBenefits}
                successIcon="/memberships/upgrade/Scholoarship/Success.svg"
                useSingleColumn={true}
                backgroundAssets={scholarshipPaidAssets}
                yearlyPrice={`$${Number(planPrices['day']) * 365}`}
                billingMessage={"Billed daily"}
              />
              </div>
            </div>

            {/* Benefit Access Card for Plan 2 */}
            {selectedPlan === 2 && (
              <div className="flex-shrink-0 w-80 md:w-96">
                <BenefitAccessCard 
                  onClose={() => setSelectedPlan(null)}
                  planName={planBenefits['day'].name}
                  headerColor={planBenefits['day'].headerColor}
                  textColor={planBenefits['day'].textColor}
                  benefits={planBenefits['day'].benefits}
                />
              </div>
            )}

            {/* 1-Month $29.99 */}
            <div className="flex-shrink-0 w-80 md:w-96">
              <div onClick={() => setSelectedPlan(selectedPlan === 1 ? null : 1)} className="cursor-pointer">
              <PlanCard
                planName="1-Month Scholarship"
                price={`$${planPrices['month']}`}
                period="per month"
                headerColor="bg-[#438342]"
                headerTextColor="text-white"
                priceBackgroundColor="bg-green-10"
                isCurrent={true}
                showCurrentInHeader={false}
                showExpirationMessage={true}
                expirationDays={15}
                priceBlockSize = "py-14"
                benefits={commonBenefits}
                moreBenefits={moreBenefits}
                successIcon="/memberships/upgrade/1-Month/Success.svg"
                useSingleColumn={true}
                backgroundAssets={monthlyAssets}
                yearlyPrice={`$${Number(planPrices['month']) * 12}`}
                billingMessage={"Billed monthly"}
              />
              </div>
            </div>

            {/* Benefit Access Card for Plan 1 */}
            {selectedPlan === 1 && (
              <div className="flex-shrink-0 w-80 md:w-96">
                <BenefitAccessCard 
                  onClose={() => setSelectedPlan(null)}
                  planName={planBenefits[1].name}
                  headerColor={planBenefits['month'].headerColor}
                  textColor={planBenefits['month'].textColor}
                  benefits={planBenefits['month'].benefits}
                />
              </div>
            )}


            {/* 1-Year $19.99 */}
            <div className="flex-shrink-0 w-80 md:w-96">
              <div onClick={() => setSelectedPlan(selectedPlan === 3 ? null : 3)} className="cursor-pointer">
              <PlanCard
                planName="1-Year Scholarship"
                price={`$${planPrices['year']}`}
                period="per month"
                headerColor="bg-[#E9BB18]"
                headerTextColor="text-white"
                priceBackgroundColor="bg-yellow-50"
                isPopular={true}
                showChooseButton={true}
                onChooseClick={() => {/* TODO: Handle yearly plan selection */}}
                priceBlockSize = "py-14"
                benefits={commonBenefits}
                moreBenefits={moreBenefits}
                successIcon="/memberships/upgrade/1-Year/Success.svg"
                useSingleColumn={true}
                backgroundAssets={yearlyAssets}
                yearlyPrice={`$${Number(planPrices['year']) * 12}`}
                billingMessage={"Billed yearly"}
              />
              </div>
            </div>

            {/* Benefit Access Card for Plan 3 */}
            {selectedPlan === 3 && (
              <div className="flex-shrink-0 w-80 md:w-96">
                <BenefitAccessCard 
                  onClose={() => setSelectedPlan(null)}
                  planName={planBenefits['year'].name}
                  headerColor={planBenefits['year'].headerColor}
                  textColor={planBenefits['year'].textColor}
                  benefits={planBenefits['year'].benefits}
                />
              </div>
            )}

          </div>
        </div>

        {/* Horizontal Scroller Indicators */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3">
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedPlan === 0 
                  ? "bg-[#6F219E] w-12" 
                  : "bg-[#B457F5] w-3"
              }`}
            />
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedPlan === 1 
                  ? "bg-[#6F219E] w-12" 
                  : "bg-[#B457F5] w-3"
              }`}
            />
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedPlan === 2 
                  ? "bg-[#6F219E] w-12" 
                  : "bg-[#B457F5] w-3"
              }`}
            />
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedPlan === 3 
                  ? "bg-[#6F219E] w-12" 
                  : "bg-[#B457F5] w-3"
              }`}
            />
          </div>
        </div>
      </div>
    </AuthorizedWrapper1>
  );
}
