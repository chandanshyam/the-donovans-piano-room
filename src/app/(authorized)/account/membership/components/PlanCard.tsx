"use client";
import Image from "next/image";
import { useState } from "react";

interface PlanCardProps {
  // Plan details
  planName: string;
  price: string;
  period: string;
  headerColor: string;
  headerTextColor: string;
  priceBackgroundColor?: string;
  
  // Status
  isCurrent?: boolean;
  isPopular?: boolean;
  showCurrentInHeader?: boolean; // controls where "Current plan" badge appears
  showChooseButton?: boolean; // shows "Choose plan" button in price block for non-current plans
  onChooseClick?: () => void; // handler for choose button
  
  // Expiration
  expirationDays?: number; // number of days until membership expires
  showExpirationMessage?: boolean; // whether to show expiration message (only for upgrade page)
  
  // Discount
  originalPrice?: string; // original price to show crossed out
  discountAmount?: string; // amount saved
  showDiscountIndicator?: boolean; // whether to show discount indicator
  
  // Price block styling
  priceBlockSize?: string; // custom size classes for price block
  
  // Benefits
  benefits: string[];
  moreBenefits?: string[];
  successIcon?: string; // custom success icon path
  useSingleColumn?: boolean; // forces single column layout for benefits
  
  // Assets
  backgroundAssets: {
    src: string;
    className: string;
  }[];

  // Yearly price and billing message
  yearlyPrice?: string;
  billingMessage?: string;

  // Benefit access card behavior
  useBenefitAccessCard?: boolean; // if true, shows BenefitAccessCard instead of expanding inline
  onBenefitAccessCardToggle?: () => void; // callback to parent when benefit access card should be toggled
}

export default function PlanCard({
  planName,
  price,
  period,
  headerColor,
  headerTextColor,
  priceBackgroundColor = "",
  isCurrent = false,
  isPopular = false,
  showCurrentInHeader = true,
  showChooseButton = false,
  onChooseClick,
  expirationDays,
  showExpirationMessage = false,
  originalPrice,
  discountAmount,
  showDiscountIndicator = false,
  priceBlockSize = "py-10",
  benefits,
  moreBenefits = [],
  successIcon = "/memberships/Current Membership/Success.svg",
  useSingleColumn = false,
  backgroundAssets,
  yearlyPrice = "",
  billingMessage = "",
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
        <div className={`relative rounded-t-xl px-5 py-3 ${headerColor} ${headerTextColor}`}>
          <div className="text-2xl font-semibold">{planName}</div>
          {isCurrent && showCurrentInHeader && (
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
          {isPopular && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="rounded-md bg-[#F8D867] px-3 py-1 text-xl font-medium text-black">
                Popular
              </span>
            </div>
          )}
        </div>

        {/* Price block with background assets */}
        <div className={`relative flex flex-col items-center justify-center overflow-hidden ${priceBlockSize} ${priceBackgroundColor} space-y-2`}>
          {/* Background assets */}
          {backgroundAssets.map((asset, index) => (
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
            {showDiscountIndicator && originalPrice && (
              <p className="text-2xl text-red-500 opacity-80 line-through">
                {originalPrice}
              </p>
            )}
            {price}
          </div>
          <div className="relative z-10 mt-1 text-2xl text-primary-gray min-h-[1.5rem]">{period}</div>
          {isCurrent && !showCurrentInHeader && (
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
              {showExpirationMessage && expirationDays !== undefined && (
                <p className="text-lg text-[#817676]">
                  * Membership expires after {expirationDays} Day{expirationDays !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          )}
          {!isCurrent && showChooseButton && onChooseClick && (
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
        {benefits.length > 0 && 
          <div className={`grid grid-cols-1 gap-y-3 gap-x-6 ${useSingleColumn ? '' : 'md:grid-cols-2'}`}>
            {benefits.map((label) => (
              <div key={label} className="flex items-center gap-3 text-primary-brown">
                <span className="flex h-6 w-6 items-center justify-center rounded-full">
                  <Image
                    className="shrink-0"
                    src={successIcon}
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
          {moreBenefits.length > 0 && (
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
          {showMoreBenefits && moreBenefits.length > 0 && (
            <div className="px-4 pb-6">
              <div className="p-1">
                <ul className="list-disc list-inside text-2xl">
                  {moreBenefits.map((benefit) => (
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
