import { MembershipLevelId, LevelUIConfig, PlanConfig, PlanDisplayName, getPlanDisplayName } from "@/interfaces/membershipInterface";

// Shared UI configuration for all membership levels
export const LEVEL_UI_CONFIG: Record<MembershipLevelId, LevelUIConfig> = {
  [MembershipLevelId.FREE]: {
    headerColor: "bg-[#e98427]",
    headerTextColor: "text-white",
    successIcon: "/memberships/upgrade/Scholoarship-free/Success.svg",
    priceBackgroundColor: "bg-orange-50",
    backgroundAssets: [
      { src: "/memberships/upgrade/Scholoarship-free/Group 48096278.svg", className: "inset-0 object-cover" }
    ]
  },
  [MembershipLevelId.DAY]: {
    headerColor: "bg-[#6F219E]",
    headerTextColor: "text-white",
    successIcon: "/memberships/upgrade/Scholoarship/Success.svg",
    priceBackgroundColor: "bg-purple-100",
    backgroundAssets: [
      { src: "/memberships/upgrade/Scholoarship/Group 48096278.svg", className: "inset-0 object-cover" }
    ]
  },
  [MembershipLevelId.MONTH]: {
    headerColor: "bg-[#438342]",
    headerTextColor: "text-white",
    successIcon: "/memberships/upgrade/1-Month/Success.svg",
    priceBackgroundColor: "bg-green-10",
    backgroundAssets: [
      { src: "/memberships/upgrade/1-Month/Group 48096278.svg", className: "inset-0 object-cover" }
    ]
  },
  [MembershipLevelId.YEAR]: {
    headerColor: "bg-[#E9BB18]",
    headerTextColor: "text-white",
    successIcon: "/memberships/upgrade/1-Year/Success.svg",
    priceBackgroundColor: "bg-yellow-50",
    backgroundAssets: [
      { src: "/memberships/upgrade/1-Year/Group 48095969.svg", className: "inset-0 object-cover" }
    ]
  }
};

// Plan configuration for upgrade page
export const PLAN_CONFIGS: PlanConfig[] = [
  {
    levelId: MembershipLevelId.FREE,
    planKey: 'free',
    displayName: PlanDisplayName.SCHOLARSHIP,
    billingMessage: 'Free access',
    benefitCardColors: {
      headerColor: 'bg-[#FED2AA]',
      textColor: 'text-[#8B4513]'
    }
  },
  {
    levelId: MembershipLevelId.DAY,
    planKey: 'day',
    displayName: PlanDisplayName.ONE_DAY,
    yearlyMultiplier: 365,
    billingMessage: 'Billed daily',
    benefitCardColors: {
      headerColor: 'bg-[#6F219E]',
      textColor: 'text-white'
    }
  },
  {
    levelId: MembershipLevelId.MONTH,
    planKey: 'month',
    displayName: PlanDisplayName.ONE_MONTH,
    yearlyMultiplier: 12,
    billingMessage: 'Billed monthly',
    benefitCardColors: {
      headerColor: 'bg-[#FED2AA]',
      textColor: 'text-[#8B4513]'
    }
  },
  {
    levelId: MembershipLevelId.YEAR,
    planKey: 'year',
    displayName: PlanDisplayName.ONE_YEAR,
    isPopular: true,
    yearlyMultiplier: 12,
    billingMessage: 'Billed yearly',
    benefitCardColors: {
      headerColor: 'bg-[#E9BB18]',
      textColor: 'text-white'
    }
  }
];

// Helper function to get UI config for a level
export const getLevelUIConfig = (levelId: MembershipLevelId): LevelUIConfig => {
  return LEVEL_UI_CONFIG[levelId];
};

// Helper function to get plan display name for a level
export const getPlanDisplayNameForLevel = (levelId: MembershipLevelId): PlanDisplayName => {
  return getPlanDisplayName(levelId);
};
