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
  // Raw API data
  levelId: MembershipLevelId;
  name: string;
  price: number;
  period: string;
  benefits: string[];
  moreBenefits: string[];
  
  // Formatted display data
  planName: string;
  formattedPrice: string;
  formattedPeriod: string;
  
  // Display state
  isCurrent?: boolean;
  isPopular?: boolean;
  expirationDays?: number;
  originalPrice?: string;
  discountAmount?: string;
  showDiscountIndicator?: boolean;
  yearlyPrice?: string;
  billingMessage?: string;
}

