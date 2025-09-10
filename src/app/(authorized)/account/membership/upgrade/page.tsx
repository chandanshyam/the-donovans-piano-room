"use client";
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import {
  authorizedWrapperTitles,
  settingsNavigation,
} from "@/utils/general";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import PlanCard from "../components/PlanCard";
import BenefitAccessCard from "../components/BenefitAccessCard";
import { getPlanInfo, getUserMembership } from "@/lib/api/membershipService";
import { UserMembership, MembershipLevelId, MembershipStatus, Plan } from "@/interfaces/membershipInterface";
import { MEMBERSHIP_UI_CONFIG } from "@/app/(authorized)/account/membership/membershipConfig";

export default function UpgradePage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<MembershipLevelId | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [membership, setMembership] = useState<UserMembership | null>(null);
  const [plans, setPlans] = useState<Record<MembershipLevelId, Plan | undefined>>({} as Record<MembershipLevelId, Plan | undefined>);

  const handleBenefitCardToggle = (levelId: MembershipLevelId) => {
    // If this plan is already open, close it. Otherwise, open it.
    setSelectedPlan(selectedPlan === levelId ? null : levelId);
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const [m, free, day, month, year] = await Promise.all([
          getUserMembership(),
          getPlanInfo(MembershipLevelId.FREE),
          getPlanInfo(MembershipLevelId.DAY),
          getPlanInfo(MembershipLevelId.MONTH),
          getPlanInfo(MembershipLevelId.YEAR),
        ]);
        if (!isMounted) return;
        setMembership(m);
        setPlans({
          [MembershipLevelId.FREE]: free,
          [MembershipLevelId.DAY]: day,
          [MembershipLevelId.MONTH]: month,
          [MembershipLevelId.YEAR]: year,
        });
      } catch (e: any) {
        if (!isMounted) return;
        setError(e?.message || "Failed to load plans");
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  // Helper function to get yearly multiplier for a plan
  const getYearlyMultiplier = (levelId: MembershipLevelId): number | undefined => {
    switch (levelId) {
      case MembershipLevelId.DAY:
        return 365;
      case MembershipLevelId.MONTH:
      case MembershipLevelId.YEAR:
        return 12;
      case MembershipLevelId.FREE:
      default:
        return undefined;
    }
  };

  const expirationDays = useMemo(() => {
    if (!membership?.nextRenewalAt) return undefined;
    const now = new Date();
    const end = new Date(membership.nextRenewalAt);
    const ms = end.getTime() - now.getTime();
    if (Number.isNaN(ms)) return undefined;
    return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
  }, [membership?.nextRenewalAt]);

  // Helper function to render a single plan
  const renderPlan = (levelId: MembershipLevelId) => {
    const planInfo = plans[levelId];
    if (!planInfo) return null;

    const yearlyMultiplier = getYearlyMultiplier(levelId);
    const yearlyPrice = yearlyMultiplier && planInfo.price > 0 
      ? `$${(planInfo.price * yearlyMultiplier).toFixed(2)}` 
      : '';

    // Create the plan data with current status and yearly price
    const isCurrent = planInfo.levelId === membership?.levelId;
    const plan: Plan = {
      ...planInfo,
      isPopular: planInfo.levelId === MembershipLevelId.YEAR,
      isCurrent: isCurrent,
      expirationDays: isCurrent ? expirationDays : undefined,
      yearlyPrice
    };

    return (
      <>
        {/* Plan Card */}
        <div className="flex-shrink-0 w-80 md:w-96">
          <PlanCard
            plan={plan}
            uiConfig={{
              ...MEMBERSHIP_UI_CONFIG[levelId],
              useSingleColumn: true,
              priceBlockSize: "py-14"
            }}
            showCurrentInHeader={plan.isCurrent && membership?.status === MembershipStatus.CANCELLED}
            showExpirationMessage={plan.isCurrent}
            showChooseButton={!plan.isCurrent || (plan.isCurrent && membership?.status === MembershipStatus.CANCELLED)}
            onChooseClick={() => {/* TODO: Handle plan selection */}}
            useBenefitAccessCard={true}
            onBenefitAccessCardToggle={() => handleBenefitCardToggle(levelId)}
          />
        </div>

        {/* Benefit Access Card */}
        {selectedPlan === levelId && (
          <div className="flex-shrink-0 w-80 md:w-96">
            <BenefitAccessCard 
              onClose={() => setSelectedPlan(null)}
              planName={plan.planName}
              headerColor={MEMBERSHIP_UI_CONFIG[levelId].benefitCardColors?.headerColor || 'bg-gray-500'}
              textColor={MEMBERSHIP_UI_CONFIG[levelId].benefitCardColors?.textColor || 'text-white'}
              benefits={plan.moreBenefits}
            />
          </div>
        )}
      </>
    );
  };

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
        
        {loading && (
          <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium mt-[2%]">Loading plans...</p>
        )}
        {!loading && error && (
          <p className="text-red-600 text-2xl 3xl:text-3xl 4xl:text-4xl font-medium mt-[2%]">{error}</p>
        )}
        {!loading && !error && (
          <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium mt-[2%]">
            There are multiple membership you can choose from, select the one that best suits your interests.
          </p>
        )}
        <div className='mt-[5vh] mb-[5vh] bg-[#FED2AA] h-1'></div>
        
        <div className="mt-8 overflow-x-auto">
          <div className="flex gap-6 min-w-fit">
            {Object.values(MembershipLevelId).map((levelId) => renderPlan(levelId))}
          </div>
        </div>

        {/* Horizontal Scroller Indicators */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3">
            {Object.values(MembershipLevelId).map((levelId) => (
            <div
              key={levelId}
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedPlan === levelId 
                ? "bg-[#6F219E] w-12" 
                : "bg-[#B457F5] w-3"
              }`}
            />
            ))}
          </div>
        </div>
      </div>
    </AuthorizedWrapper1>
  );
}
