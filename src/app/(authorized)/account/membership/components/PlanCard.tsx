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
  priceBackgroundColor: string;
  
  // Status
  isCurrent?: boolean;
  isPopular?: boolean;
  showCurrentInHeader?: boolean; // controls where "Current plan" badge appears
  showChooseButton?: boolean; // shows "Choose plan" button in price block for non-current plans
  onChooseClick?: () => void; // handler for choose button
  
  // Benefits
  benefits: string[];
  moreBenefits?: string[];
  
  // Assets
  backgroundAssets: {
    src: string;
    width: number;
    height: number;
    className: string;
  }[];
  

}

export default function PlanCard({
  planName,
  price,
  period,
  headerColor,
  headerTextColor,
  priceBackgroundColor,
  isCurrent = false,
  isPopular = false,
  showCurrentInHeader = true,
  showChooseButton = false,
  onChooseClick,
  benefits,
  moreBenefits = [],
  backgroundAssets,
}: PlanCardProps) {
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);

  const toggleBenefits = () => {
    setShowMoreBenefits(!showMoreBenefits);
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
              <span className="inline-flex items-center gap-2 rounded-md border border-[#D9D9D9] bg-[#ffffffcc] px-3 py-1 text-xl font-medium text-primary-brown">
                Popular
              </span>
            </div>
          )}
        </div>

        {/* Price block with background assets */}
        <div className={`relative flex flex-col items-center overflow-hidden py-10 ${priceBackgroundColor}`}>
          {/* Background assets */}
          {backgroundAssets.map((asset, index) => (
            <Image
              key={index}
              src={asset.src}
              alt="background pattern"
              width={asset.width}
              height={asset.height}
              className={`pointer-events-none absolute opacity-60 ${asset.className}`}
              priority
            />
          ))}
          
          <div className="relative z-10 font-montserrat text-4xl font-semibold text-primary-brown md:text-5xl 3xl:text-6xl 4xl:text-7xl">
            {price}
          </div>
          <div className="relative z-10 mt-1 text-sm text-primary-gray md:text-base">{period}</div>
          {isCurrent && !showCurrentInHeader && (
            <div className="relative z-10 mt-2 inline-flex items-center gap-2 rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
              <Image
                className="h-4 w-4 shrink-0"
                src="/memberships/upgrade/request_quote_FILL0_wght400_GRAD0_opsz24 1.svg"
                alt="Current plan"
                width={16}
                height={16}
              />
              Current plan
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
          <div className="grid grid-cols-1 gap-y-3 gap-x-6 md:grid-cols-2">
            {benefits.map((label) => (
              <div key={label} className="flex items-center gap-3 text-primary-brown">
                <span className="flex h-6 w-6 items-center justify-center rounded-full">
                  <Image
                    className="shrink-0"
                    src="/memberships/Current Membership/Success.svg"
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
