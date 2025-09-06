// Membership-related TypeScript interfaces and types

// Enums for better type safety
export enum MembershipStatus {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
}

export enum MembershipLevelId {
  FREE = 'lvl_free',
  DAY = 'lvl_day',
  MONTH = 'lvl_month',
  YEAR = 'lvl_year'
}

export enum PaymentMethodBrand {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  AMEX = 'amex'// 'american express'
}

export enum PlanDisplayName {
  SCHOLARSHIP = 'Scholarship',
  ONE_DAY = '1-Day',
  ONE_MONTH = '1-Month',
  ONE_YEAR = '1-Year'
}

// Mapping function to get display name for membership level
export const getPlanDisplayName = (levelId: MembershipLevelId): PlanDisplayName => {
  switch (levelId) {
    case MembershipLevelId.FREE:
      return PlanDisplayName.SCHOLARSHIP;
    case MembershipLevelId.DAY:
      return PlanDisplayName.ONE_DAY;
    case MembershipLevelId.MONTH:
      return PlanDisplayName.ONE_MONTH;
    case MembershipLevelId.YEAR:
      return PlanDisplayName.ONE_YEAR;
    default:
      return PlanDisplayName.SCHOLARSHIP;
  }
};

// Core data structures
export interface PaymentMethodSummary {
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
}

export interface UserMembership {
  membershipId: string;
  status: MembershipStatus;
  levelId: MembershipLevelId;
  nextRenewalAt?: string;
  autoRenew?: boolean;
  paymentMethodSummary?: PaymentMethodSummary;
}

export interface LevelInfo {
  levelId: MembershipLevelId;
  name: string;
  price: number;
  period: string;
  basic_benefits: string[];
  additional_benefits: string[];
}

// Comprehensive UI styling configuration for PlanCard
export interface PlanCardUIConfig {
  useSingleColumn?: boolean;
  priceBlockSize?: string;
  benefitCardColors?: {
    headerColor: string;
    textColor: string;
  };
  headerColor: string;
  headerTextColor: string;
  successIcon: string;
  priceBackgroundColor: string;
  backgroundAssets: { src: string; className: string }[];
}

// Comprehensive plan data for PlanCard
export interface PlanData {
  planName: string;
  price: string;
  period: string;
  isCurrent?: boolean;
  isPopular?: boolean;
  expirationDays?: number;
  originalPrice?: string;
  discountAmount?: string;
  showDiscountIndicator?: boolean;
  benefits: string[];
  moreBenefits?: string[];
  yearlyPrice?: string;
  billingMessage?: string;
}

