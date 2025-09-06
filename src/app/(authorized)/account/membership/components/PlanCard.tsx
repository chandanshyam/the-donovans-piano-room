"use client";
import Image from "next/image";
import { useState } from "react";
import { PlanCardUIConfig, PlanData } from "@/interfaces/membershipInterface";

interface PlanCardProps {
  // Plan Data - centralized plan information
  planData: PlanData;
  
  // UI Configuration - centralized styling
  uiConfig: PlanCardUIConfig;
  
  // Display Controls
  showCurrentInHeader?: boolean; // controls where "Current plan" badge appears
  showChooseButton?: boolean; // shows "Choose plan" button in price block for non-current plans
  onChooseClick?: () => void; // handler for choose button
  showExpirationMessage?: boolean; // whether to show expiration message (only for upgrade page)

  // Benefit access card behavior
  useBenefitAccessCard?: boolean; // if true, shows BenefitAccessCard instead of expanding inline
  onBenefitAccessCardToggle?: () => void; // callback to parent when benefit access card should be toggled
}

export default function PlanCard({
  planData,
  uiConfig,
  showCurrentInHeader = true,
  showChooseButton = false,
  onChooseClick,
  showExpirationMessage = false,
  useBenefitAccessCard = false,
  onBenefitAccessCardToggle,
}: PlanCardProps) {
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);

  const toggleBenefits = () => {
    if (useBenefitAccessCard && onBenefitAccessCardToggle) {
      // For upgrade page: simply notify parent to toggle the card
      onBenefitAccessCardToggle();
    } else {
      // For current membership: expand inline
      setShowMoreBenefits(!showMoreBenefits);
    }
  };

  return (
    <div>
      {/* Card */}
      <div className="w-full rounded-2xl border border-[#FCF0D8] bg-white shadow-custom">
        {/* Header ribbon */}
        <div className={`relative rounded-t-xl px-5 py-3 ${uiConfig.headerColor} ${uiConfig.headerTextColor}`}>
          <div className="text-2xl font-semibold">{planData.planName}</div>
          {planData.isCurrent && showCurrentInHeader && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9D9D9] bg-[#ffffffcc] px-3 py-1 text-xl font-medium text-primary-brown">
                <Image
                  className="cursor-pointer h-5 w-5 shrink-0"
                  src="/memberships/upgrade/request_quote_FILL0_wght400_GRAD0_opsz24 1.svg"
                  alt="Current plan"
                  width={20}
                  height={20}
                />
                Current plan
              </span>
            </div>
          )}
          {planData.isPopular && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="rounded-md bg-[#F8D867] px-3 py-1 text-xl font-medium text-black">
                Popular
              </span>
            </div>
          )}
        </div>

        {/* Price block with background assets */}
        <div className={`relative flex flex-col items-center justify-center overflow-hidden ${uiConfig.priceBlockSize || "py-10"} ${uiConfig.priceBackgroundColor} space-y-2`}>
          {/* Background assets */}
          {uiConfig.backgroundAssets.map((asset, index) => (
            (
              <Image
                key={index}
                src={asset.src}
                alt="background pattern"
                fill
                className={`pointer-events-none opacity-60 ${asset.className}`}
                priority
              />
            )
            )
          )}
          
          <div className="relative z-10 font-montserrat text-4xl font-semibold text-primary-brown 3xl:text-6xl 4xl:text-7xl flex flex-col items-center gap-1">
            {planData.showDiscountIndicator && planData.originalPrice && (
              <p className="text-2xl text-red-500 opacity-80 line-through">
                {planData.originalPrice}
              </p>
            )}
            {planData.price}
          </div>
          <div className="relative z-10 mt-1 text-2xl text-primary-gray min-h-[1.5rem]">{planData.period}</div>
            {/* Yearly price and billing message - only show for paid plans */}
            {planData.yearlyPrice && planData.yearlyPrice !== "FREE" && (
            <div className="relative z-10 text-center">
              <div className="text-lg text-primary-gray font-medium">
                Yearly payment: {planData.yearlyPrice} / year
              </div>
              <div className="text-lg text-primary-gray font-medium">
                {planData.billingMessage}
              </div>
            </div>
          )}
          {planData.isCurrent && !showCurrentInHeader && (
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-gray-200 px-4 py-6 text-2xl font-medium text-black">
                <Image
                  className="h-8 w-8 shrink-0"
                  src="/memberships/upgrade/request_quote_FILL0_wght400_GRAD0_opsz24 1.svg"
                  alt="Current plan"
                  width={16}
                  height={16}
                />
                Current plan
              </div>
              {showExpirationMessage && planData.expirationDays !== undefined && (
                <p className="text-lg text-[#817676]">
                  * Membership expires after {planData.expirationDays} Day{planData.expirationDays !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          )}
          {!planData.isCurrent && showChooseButton && onChooseClick && (
            <button
              type="button"
              onClick={onChooseClick}
              className="relative z-10 mt-3 rounded-full border border-primary-purple px-6 py-3 text-center font-medium bg-primary-purple text-white"
            > 
              Choose plan
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#F4E6CF]"></div>

        {/* Benefits */}
        <div className="py-6 p-4">
        {planData.benefits.length > 0 && 
          <div className={`grid grid-cols-1 gap-y-3 gap-x-6 ${uiConfig.useSingleColumn ? '' : 'md:grid-cols-2'}`}>
            {planData.benefits.map((label) => (
              <div key={label} className="flex items-center gap-3 text-primary-brown">
                <span className="flex h-6 w-6 items-center justify-center rounded-full">
                  <Image
                    className="shrink-0"
                    src={uiConfig.successIcon}
                    alt="Success"
                    width={16}
                    height={16}
                  />
                </span>
                <span className="text-2xl">{label}</span>
              </div>
            ))}
          </div>
        }
          {/* More benefits button */}
          {planData.moreBenefits && planData.moreBenefits.length > 0 && (
            <div className="pb-2 pt-4">
              <button
                type="button"
                onClick={toggleBenefits}
                className="inline-flex select-none items-center gap-2 rounded-lg bg-[#fbf5ff] px-4 py-2 text-xl font-bold text-primary-purple hover:bg-[#E6DAFA] underline"
              >
                See more benefits
                <Image
                  className={`cursor-pointer h-4 w-4 shrink-0 transition-transform duration-200 ${
                    showMoreBenefits ? "rotate-180" : ""
                  }`}
                  src="/memberships/Current Membership/Vector (4).svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          )}

          {/* Expanded benefits */}
          {showMoreBenefits && planData.moreBenefits && planData.moreBenefits.length > 0 && (
            <div className="px-4 pb-6">
              <div className="p-1">
                <ul className="list-disc list-inside text-2xl">
                  {planData.moreBenefits.map((benefit) => (
                    <li key={benefit}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
