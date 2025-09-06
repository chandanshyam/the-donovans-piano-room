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
import { getLevelInfo, getUserMembership } from "@/lib/api/membershipService";
import { UserMembership, LevelInfo, MembershipLevelId, LevelUI, BackgroundAsset, PlanConfig } from "@/interfaces/membershipInterface";
import { PLAN_CONFIGS, getLevelUIConfig, getPlanDisplayNameForLevel } from "@/app/(authorized)/account/membership/membershipConfig";

export default function UpgradePage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [membership, setMembership] = useState<UserMembership | null>(null);
  const [levels, setLevels] = useState<Record<MembershipLevelId, LevelInfo | undefined>>({} as Record<MembershipLevelId, LevelInfo | undefined>);

  const handleBenefitCardToggle = (planKey: string) => {
    // If this plan is already open, close it. Otherwise, open it.
    setSelectedPlan(selectedPlan === planKey ? null : planKey);
  };

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const [m, free, day, month, year] = await Promise.all([
          getUserMembership(),
          getLevelInfo(MembershipLevelId.FREE),
          getLevelInfo(MembershipLevelId.DAY),
          getLevelInfo(MembershipLevelId.MONTH),
          getLevelInfo(MembershipLevelId.YEAR),
        ]);
        if (!isMounted) return;
        setMembership(m);
        setLevels({
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

  const uiForLevel = (levelId: MembershipLevelId): LevelUI => {
    const config = getLevelUIConfig(levelId);
    return {
      headerColor: config.headerColor,
      headerTextColor: config.headerTextColor,
      successIcon: config.successIcon,
      priceBackgroundColor: config.priceBackgroundColor
    };
  };

  const assetsForLevel = (levelId: MembershipLevelId): BackgroundAsset[] => {
    return getLevelUIConfig(levelId).backgroundAssets;
  };

  const isCurrent = (levelId: MembershipLevelId) => membership?.levelId === levelId;

  const priceLabel = (price?: number) => {
    if (price === undefined) return "";
    if (price === 0) return "FREE";
    return `$${price.toFixed(2)}`;
  };

  const periodLabel = (period?: string) => {
    if (!period) return "";
    return `per ${period}`;
  };

  const periodLabelFor = (levelId: MembershipLevelId, period?: string) => {
    if (levelId === MembershipLevelId.FREE) return '';
    return periodLabel(period);
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
  const renderPlan = (config: PlanConfig) => {
    const level = levels[config.levelId as MembershipLevelId];
    if (!level) return null;

    const yearlyPrice = config.yearlyMultiplier && level.price > 0 
      ? `$${(level.price * config.yearlyMultiplier).toFixed(2)}` 
      : '';

    const planDisplayName = getPlanDisplayNameForLevel(config.levelId);

    return (
      <>
        {/* Plan Card */}
        <div className="flex-shrink-0 w-80 md:w-96">
          <PlanCard
            planName={planDisplayName}
            price={priceLabel(level.price)}
            period={periodLabelFor(config.levelId, level.period)}
            headerColor={uiForLevel(config.levelId).headerColor}
            headerTextColor={uiForLevel(config.levelId).headerTextColor}
            priceBackgroundColor={uiForLevel(config.levelId).priceBackgroundColor}
            isCurrent={isCurrent(config.levelId)}
            showCurrentInHeader={false}
            showExpirationMessage={isCurrent(config.levelId)}
            expirationDays={expirationDays}
            showChooseButton={!isCurrent(config.levelId)}
            onChooseClick={() => {/* TODO: Handle plan selection */}}
            priceBlockSize="py-14"
            benefits={level.basic_benefits}
            moreBenefits={level.additional_benefits}
            successIcon={uiForLevel(config.levelId).successIcon}
            useSingleColumn={true}
            backgroundAssets={assetsForLevel(config.levelId)}
            yearlyPrice={yearlyPrice}
            billingMessage={config.billingMessage}
            useBenefitAccessCard={true}
            onBenefitAccessCardToggle={() => handleBenefitCardToggle(config.planKey)}
            isPopular={config.isPopular}
          />
        </div>

        {/* Benefit Access Card */}
        {selectedPlan === config.planKey && (
          <div className="flex-shrink-0 w-80 md:w-96">
            <BenefitAccessCard 
              onClose={() => setSelectedPlan(null)}
              planName={planDisplayName}
              headerColor={config.benefitCardColors.headerColor}
              textColor={config.benefitCardColors.textColor}
              benefits={level.additional_benefits}
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
            {PLAN_CONFIGS.map((config) => renderPlan(config))}
          </div>
        </div>

        {/* Horizontal Scroller Indicators */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-3">
            {PLAN_CONFIGS.map((config) => (
              <div
                key={config.planKey}
                className={`h-3 rounded-full transition-all duration-300 ${
                  selectedPlan === config.planKey 
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
