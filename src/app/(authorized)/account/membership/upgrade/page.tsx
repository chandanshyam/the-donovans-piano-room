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
import { UserMembership, LevelInfo, MembershipLevelId, BackgroundAsset, LevelUI } from "@/interfaces/membershipInterface";

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
    switch (levelId) {
      case MembershipLevelId.FREE:
        return { headerColor: 'bg-[#e98427]', headerTextColor: 'text-white', successIcon: '/memberships/upgrade/Scholoarship-free/Success.svg', priceBackgroundColor: 'bg-orange-50' };
      case MembershipLevelId.DAY:
        return { headerColor: 'bg-[#6F219E]', headerTextColor: 'text-white', successIcon: '/memberships/upgrade/Scholoarship/Success.svg', priceBackgroundColor: 'bg-purple-100' };
      case MembershipLevelId.YEAR:
        return { headerColor: 'bg-[#E9BB18]', headerTextColor: 'text-white', successIcon: '/memberships/upgrade/1-Year/Success.svg', priceBackgroundColor: 'bg-yellow-50' };
      case MembershipLevelId.MONTH:
      default:
        return { headerColor: 'bg-[#438342]', headerTextColor: 'text-white', successIcon: '/memberships/upgrade/1-Month/Success.svg', priceBackgroundColor: 'bg-green-10' };
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

  const assetsForLevel = (levelId: MembershipLevelId): BackgroundAsset[] => {
    switch (levelId) {
      case MembershipLevelId.DAY:
        return scholarshipPaidAssets;
      case MembershipLevelId.MONTH:
        return monthlyAssets;
      case MembershipLevelId.YEAR:
        return yearlyAssets;
      case MembershipLevelId.FREE:
      default: 
        return scholarshipFreeAssets;
    }
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

  const displayNameFor = (levelId: MembershipLevelId, name?: string) => {
    if (levelId === MembershipLevelId.FREE) return 'Scholarship';
    return name || '';
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
            
            {/* Scholarship FREE */}
            <div className="flex-shrink-0 w-80 md:w-96">
              {levels[MembershipLevelId.FREE] && (
                <PlanCard
                  planName={displayNameFor(MembershipLevelId.FREE, levels[MembershipLevelId.FREE]!.name)}
                  price={priceLabel(levels[MembershipLevelId.FREE]!.price)}
                  period={periodLabelFor(MembershipLevelId.FREE, levels[MembershipLevelId.FREE]!.period)}
                  headerColor={uiForLevel(MembershipLevelId.FREE).headerColor}
                  headerTextColor={uiForLevel(MembershipLevelId.FREE).headerTextColor}
                  priceBackgroundColor={uiForLevel(MembershipLevelId.FREE).priceBackgroundColor}
                  isCurrent={isCurrent(MembershipLevelId.FREE)}
                  showCurrentInHeader={false}
                  showExpirationMessage={isCurrent(MembershipLevelId.FREE)}
                  expirationDays={expirationDays}
                  showChooseButton={!isCurrent(MembershipLevelId.FREE)}
                  onChooseClick={() => {/* TODO: Handle scholarship free plan selection */}}
                  priceBlockSize = "py-14"
                  benefits={levels[MembershipLevelId.FREE]!.basic_benefits}
                  moreBenefits={levels[MembershipLevelId.FREE]!.additional_benefits}
                  successIcon={uiForLevel(MembershipLevelId.FREE).successIcon}
                  useSingleColumn={true}
                  backgroundAssets={assetsForLevel(MembershipLevelId.FREE)}
                  useBenefitAccessCard={true}
                  onBenefitAccessCardToggle={() => handleBenefitCardToggle('free')}
                />
              )}
            </div>

            {/* Benefit Access Card for FREE */}
            {selectedPlan === 'free' && (
              <div className="flex-shrink-0 w-80 md:w-96">
                <BenefitAccessCard 
                  onClose={() => setSelectedPlan(null)}
                  planName={displayNameFor(MembershipLevelId.FREE, levels[MembershipLevelId.FREE]?.name) || 'Scholarship'}
                  headerColor="bg-[#FED2AA]"
                  textColor="text-[#8B4513]"
                  benefits={levels[MembershipLevelId.FREE]?.additional_benefits || []}
                />
              </div>
            )}

            {/* Scholarship $1.99/day*/}
            <div className="flex-shrink-0 w-80 md:w-96">
              {levels[MembershipLevelId.DAY] && (
                <PlanCard
                  planName={levels[MembershipLevelId.DAY]!.name}
                  price={priceLabel(levels[MembershipLevelId.DAY]!.price)}
                  period={periodLabel(levels[MembershipLevelId.DAY]!.period)}
                  headerColor={uiForLevel(MembershipLevelId.DAY).headerColor}
                  headerTextColor={uiForLevel(MembershipLevelId.DAY).headerTextColor}
                  priceBackgroundColor={uiForLevel(MembershipLevelId.DAY).priceBackgroundColor}
                  isCurrent={isCurrent(MembershipLevelId.DAY)}
                  showCurrentInHeader={false}
                  showExpirationMessage={isCurrent(MembershipLevelId.DAY)}
                  expirationDays={expirationDays}
                  showChooseButton={!isCurrent(MembershipLevelId.DAY)}
                  onChooseClick={() => {/* TODO: Handle daily plan selection */}}
                  priceBlockSize = "py-14"
                  benefits={levels[MembershipLevelId.DAY]!.basic_benefits}
                  moreBenefits={levels[MembershipLevelId.DAY]!.additional_benefits}
                  successIcon={uiForLevel(MembershipLevelId.DAY).successIcon}
                  useSingleColumn={true}
                  backgroundAssets={assetsForLevel(MembershipLevelId.DAY)}
                  yearlyPrice={levels[MembershipLevelId.DAY]!.price ? `$${(levels[MembershipLevelId.DAY]!.price * 365).toFixed(2)}` : ''}
                  billingMessage={"Billed daily"}
                  useBenefitAccessCard={true}
                  onBenefitAccessCardToggle={() => handleBenefitCardToggle('day')}
                />
              )}
            </div>

            {/* Benefit Access Card for Scholarship $1.99 per day */}
            {selectedPlan === 'day' && (
              <div className="flex-shrink-0 w-80 md:w-96">
                <BenefitAccessCard 
                  onClose={() => setSelectedPlan(null)}
                  planName={levels[MembershipLevelId.DAY]?.name || 'Daily scholarship access'}
                  headerColor="bg-[#6F219E]"
                  textColor="text-white"
                  benefits={levels[MembershipLevelId.DAY]?.additional_benefits || []}
                />
              </div>
            )}

            {/* 1-Month: $29.99/month */}
            <div className="flex-shrink-0 w-80 md:w-96">
              {levels[MembershipLevelId.MONTH] && (
                <PlanCard
                  planName={levels[MembershipLevelId.MONTH]!.name}
                  price={priceLabel(levels[MembershipLevelId.MONTH]!.price)}
                  period={periodLabel(levels[MembershipLevelId.MONTH]!.period)}
                  headerColor={uiForLevel(MembershipLevelId.MONTH).headerColor}
                  headerTextColor={uiForLevel(MembershipLevelId.MONTH).headerTextColor}
                  priceBackgroundColor={uiForLevel(MembershipLevelId.MONTH).priceBackgroundColor}
                  isCurrent={isCurrent(MembershipLevelId.MONTH)}
                  showCurrentInHeader={false}
                  showExpirationMessage={isCurrent(MembershipLevelId.MONTH)}
                  expirationDays={expirationDays}
                  showChooseButton={!isCurrent(MembershipLevelId.MONTH)}
                  onChooseClick={() => { /* TODO: Handle monthly plan selection */ }}
                  priceBlockSize = "py-14"
                  benefits={levels[MembershipLevelId.MONTH]!.basic_benefits}
                  moreBenefits={levels[MembershipLevelId.MONTH]!.additional_benefits}
                  successIcon={uiForLevel(MembershipLevelId.MONTH).successIcon}
                  useSingleColumn={true}
                  backgroundAssets={assetsForLevel(MembershipLevelId.MONTH)}
                  yearlyPrice={levels[MembershipLevelId.MONTH]!.price ? `$${(levels[MembershipLevelId.MONTH]!.price * 12).toFixed(2)}` : ''}
                  billingMessage={"Billed monthly"}
                  useBenefitAccessCard={true}
                  onBenefitAccessCardToggle={() => handleBenefitCardToggle('month')}
                />
              )}
            </div>

            {/* Benefit Access Card for 1-Month $29.99 */}
            {selectedPlan === 'month' && (
              <div className="flex-shrink-0 w-80 md:w-96">
                <BenefitAccessCard 
                  onClose={() => setSelectedPlan(null)}
                  planName={levels[MembershipLevelId.MONTH]?.name || 'Monthly scholarship access'}
                  headerColor="bg-[#FED2AA]"
                  textColor="text-[#8B4513]"
                  benefits={levels[MembershipLevelId.MONTH]?.additional_benefits || []}
                />
              </div>
            )}

            {/* 1-Year: $19.99/month */}
            <div className="flex-shrink-0 w-80 md:w-96">
              {levels[MembershipLevelId.YEAR] && (
                <PlanCard
                  planName={levels[MembershipLevelId.YEAR]!.name}
                  price={priceLabel(levels[MembershipLevelId.YEAR]!.price)}
                  period={periodLabel(levels[MembershipLevelId.YEAR]!.period)}
                  headerColor={uiForLevel(MembershipLevelId.YEAR).headerColor}
                  headerTextColor={uiForLevel(MembershipLevelId.YEAR).headerTextColor}
                  priceBackgroundColor={uiForLevel(MembershipLevelId.YEAR).priceBackgroundColor}
                  isCurrent={isCurrent(MembershipLevelId.YEAR)}
                  showCurrentInHeader={false}
                  showExpirationMessage={isCurrent(MembershipLevelId.YEAR)}
                  expirationDays={expirationDays}
                  isPopular={true}
                  showChooseButton={!isCurrent(MembershipLevelId.YEAR)}
                  onChooseClick={() => {/* TODO: Handle yearly plan selection */}}
                  priceBlockSize = "py-14"
                  benefits={levels[MembershipLevelId.YEAR]!.basic_benefits}
                  moreBenefits={levels[MembershipLevelId.YEAR]!.additional_benefits}
                  successIcon={uiForLevel(MembershipLevelId.YEAR).successIcon}
                  useSingleColumn={true}
                  backgroundAssets={assetsForLevel(MembershipLevelId.YEAR)}
                  yearlyPrice={levels[MembershipLevelId.YEAR]!.price ? `$${(levels[MembershipLevelId.YEAR]!.price * 12).toFixed(2)}` : ''}
                  billingMessage={"Billed yearly"}
                  useBenefitAccessCard={true}
                  onBenefitAccessCardToggle={() => handleBenefitCardToggle('year')}
                />
              )}
            </div>

            {/* Benefit Access Card for 1-Year $19.99 */}
            {selectedPlan === 'year' && (
              <div className="flex-shrink-0 w-80 md:w-96">
                <BenefitAccessCard 
                  onClose={() => setSelectedPlan(null)}
                  planName={levels[MembershipLevelId.YEAR]?.name || 'Annual access'}
                  headerColor="bg-[#E9BB18]"
                  textColor="text-white"
                  benefits={levels[MembershipLevelId.YEAR]?.additional_benefits || []}
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
                selectedPlan === 'free' 
                  ? "bg-[#6F219E] w-12" 
                  : "bg-[#B457F5] w-3"
              }`}
            />
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedPlan === 'day' 
                  ? "bg-[#6F219E] w-12" 
                  : "bg-[#B457F5] w-3"
              }`}
            />
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedPlan === 'month' 
                  ? "bg-[#6F219E] w-12" 
                  : "bg-[#B457F5] w-3"
              }`}
            />
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                selectedPlan === 'year' 
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
