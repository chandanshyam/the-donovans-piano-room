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

export default function UpgradePage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  type LevelInfo = {
    levelId: string;
    name: string;
    price: number;
    period: string;
    basic_benefits: string[];
    additional_benefits: string[];
  };

  type Membership = {
    membershipId: string;
    status: string;
    levelId: string;
    nextRenewalAt?: string;
    autoRenew?: boolean;
  };

  const [membership, setMembership] = useState<Membership | null>(null);
  const [levels, setLevels] = useState<Record<string, LevelInfo | undefined>>({});

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
          getLevelInfo("lvl_free"),
          getLevelInfo("lvl_day"),
          getLevelInfo("lvl_month"),
          getLevelInfo("lvl_year"),
        ]);
        if (!isMounted) return;
        setMembership(m);
        setLevels({
          lvl_free: free,
          lvl_day: day,
          lvl_month: month,
          lvl_year: year,
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

  const uiForLevel = (levelId: string) => {
    switch (levelId) {
      case 'lvl_free':
        return { headerColor: 'bg-[#e98427]', headerTextColor: 'text-white', successIcon: '/memberships/upgrade/Scholoarship-free/Success.svg', priceBackgroundColor: 'bg-orange-50' };
      case 'lvl_day':
        return { headerColor: 'bg-[#6F219E]', headerTextColor: 'text-white', successIcon: '/memberships/upgrade/Scholoarship/Success.svg', priceBackgroundColor: 'bg-purple-100' };
      case 'lvl_year':
        return { headerColor: 'bg-[#E9BB18]', headerTextColor: 'text-white', successIcon: '/memberships/upgrade/1-Year/Success.svg', priceBackgroundColor: 'bg-yellow-50' };
      case 'lvl_month':
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

  const assetsForLevel = (levelId: string) => {
    switch (levelId) {
      case 'lvl_day':
        return scholarshipPaidAssets;
      case 'lvl_month':
        return monthlyAssets;
      case 'lvl_year':
        return yearlyAssets;
      case 'lvl_free':
      default: 
        return scholarshipFreeAssets;
    }
  };

  const isCurrent = (levelId: string) => membership?.levelId === levelId;

  const priceLabel = (price?: number) => {
    if (price === undefined) return "";
    if (price === 0) return "FREE";
    return `$${price.toFixed(2)}`;
  };

  const periodLabel = (period?: string) => {
    if (!period) return "";
    return `per ${period}`;
  };

  const displayNameFor = (levelId: string, name?: string) => {
    if (levelId === 'lvl_free') return 'Scholarship';
    return name || '';
  };

  const periodLabelFor = (levelId: string, period?: string) => {
    if (levelId === 'lvl_free') return '';
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
              {levels['lvl_free'] && (
                <PlanCard
                  planName={displayNameFor('lvl_free', levels['lvl_free']!.name)}
                  price={priceLabel(levels['lvl_free']!.price)}
                  period={periodLabelFor('lvl_free', levels['lvl_free']!.period)}
                  headerColor={uiForLevel('lvl_free').headerColor}
                  headerTextColor={uiForLevel('lvl_free').headerTextColor}
                  priceBackgroundColor={uiForLevel('lvl_free').priceBackgroundColor}
                  isCurrent={isCurrent('lvl_free')}
                  showCurrentInHeader={false}
                  showExpirationMessage={isCurrent('lvl_free')}
                  expirationDays={expirationDays}
                  showChooseButton={!isCurrent('lvl_free')}
                  onChooseClick={() => {/* TODO: Handle scholarship free plan selection */}}
                  priceBlockSize = "py-14"
                  benefits={levels['lvl_free']!.basic_benefits}
                  moreBenefits={levels['lvl_free']!.additional_benefits}
                  successIcon={uiForLevel('lvl_free').successIcon}
                  useSingleColumn={true}
                  backgroundAssets={assetsForLevel('lvl_free')}
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
                  planName={displayNameFor('lvl_free', levels['lvl_free']?.name) || 'Scholarship'}
                  headerColor="bg-[#FED2AA]"
                  textColor="text-[#8B4513]"
                  benefits={levels['lvl_free']?.additional_benefits || []}
                />
              </div>
            )}

            {/* Scholarship $1.99/day*/}
            <div className="flex-shrink-0 w-80 md:w-96">
              {levels['lvl_day'] && (
                <PlanCard
                  planName={levels['lvl_day']!.name}
                  price={priceLabel(levels['lvl_day']!.price)}
                  period={periodLabel(levels['lvl_day']!.period)}
                  headerColor={uiForLevel('lvl_day').headerColor}
                  headerTextColor={uiForLevel('lvl_day').headerTextColor}
                  priceBackgroundColor={uiForLevel('lvl_day').priceBackgroundColor}
                  isCurrent={isCurrent('lvl_day')}
                  showCurrentInHeader={false}
                  showExpirationMessage={isCurrent('lvl_day')}
                  expirationDays={expirationDays}
                  showChooseButton={!isCurrent('lvl_day')}
                  onChooseClick={() => {/* TODO: Handle daily plan selection */}}
                  priceBlockSize = "py-14"
                  benefits={levels['lvl_day']!.basic_benefits}
                  moreBenefits={levels['lvl_day']!.additional_benefits}
                  successIcon={uiForLevel('lvl_day').successIcon}
                  useSingleColumn={true}
                  backgroundAssets={assetsForLevel('lvl_day')}
                  yearlyPrice={levels['lvl_day']!.price ? `$${(levels['lvl_day']!.price * 365).toFixed(2)}` : ''}
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
                  planName={levels['lvl_day']?.name || 'Daily scholarship access'}
                  headerColor="bg-[#6F219E]"
                  textColor="text-white"
                  benefits={levels['lvl_day']?.additional_benefits || []}
                />
              </div>
            )}

            {/* 1-Month: $29.99/month */}
            <div className="flex-shrink-0 w-80 md:w-96">
              {levels['lvl_month'] && (
                <PlanCard
                  planName={levels['lvl_month']!.name}
                  price={priceLabel(levels['lvl_month']!.price)}
                  period={periodLabel(levels['lvl_month']!.period)}
                  headerColor={uiForLevel('lvl_month').headerColor}
                  headerTextColor={uiForLevel('lvl_month').headerTextColor}
                  priceBackgroundColor={uiForLevel('lvl_month').priceBackgroundColor}
                  isCurrent={isCurrent('lvl_month')}
                  showCurrentInHeader={false}
                  showExpirationMessage={isCurrent('lvl_month')}
                  expirationDays={expirationDays}
                  showChooseButton={!isCurrent('lvl_month')}
                  onChooseClick={() => { /* TODO: Handle monthly plan selection */ }}
                  priceBlockSize = "py-14"
                  benefits={levels['lvl_month']!.basic_benefits}
                  moreBenefits={levels['lvl_month']!.additional_benefits}
                  successIcon={uiForLevel('lvl_month').successIcon}
                  useSingleColumn={true}
                  backgroundAssets={assetsForLevel('lvl_month')}
                  yearlyPrice={levels['lvl_month']!.price ? `$${(levels['lvl_month']!.price * 12).toFixed(2)}` : ''}
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
                  planName={levels['lvl_month']?.name || 'Monthly scholarship access'}
                  headerColor="bg-[#FED2AA]"
                  textColor="text-[#8B4513]"
                  benefits={levels['lvl_month']?.additional_benefits || []}
                />
              </div>
            )}

            {/* 1-Year: $19.99/month */}
            <div className="flex-shrink-0 w-80 md:w-96">
              {levels['lvl_year'] && (
                <PlanCard
                  planName={levels['lvl_year']!.name}
                  price={priceLabel(levels['lvl_year']!.price)}
                  period={periodLabel(levels['lvl_year']!.period)}
                  headerColor={uiForLevel('lvl_year').headerColor}
                  headerTextColor={uiForLevel('lvl_year').headerTextColor}
                  priceBackgroundColor={uiForLevel('lvl_year').priceBackgroundColor}
                  isCurrent={isCurrent('lvl_year')}
                  showCurrentInHeader={false}
                  showExpirationMessage={isCurrent('lvl_year')}
                  expirationDays={expirationDays}
                  isPopular={true}
                  showChooseButton={!isCurrent('lvl_year')}
                  onChooseClick={() => {/* TODO: Handle yearly plan selection */}}
                  priceBlockSize = "py-14"
                  benefits={levels['lvl_year']!.basic_benefits}
                  moreBenefits={levels['lvl_year']!.additional_benefits}
                  successIcon={uiForLevel('lvl_year').successIcon}
                  useSingleColumn={true}
                  backgroundAssets={assetsForLevel('lvl_year')}
                  yearlyPrice={levels['lvl_year']!.price ? `$${(levels['lvl_year']!.price * 12).toFixed(2)}` : ''}
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
                  planName={levels['lvl_year']?.name || 'Annual access'}
                  headerColor="bg-[#E9BB18]"
                  textColor="text-white"
                  benefits={levels['lvl_year']?.additional_benefits || []}
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
