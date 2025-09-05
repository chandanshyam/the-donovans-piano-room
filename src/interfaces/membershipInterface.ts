// Membership-related TypeScript interfaces and types

// Enums for better type safety
export enum MembershipStatus {
  ACTIVE = 'active',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired',
  PENDING = 'pending'
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
  AMEX = 'amex',
  AMERICAN_EXPRESS = 'american express'
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

// UI-specific types
export interface BackgroundAsset {
  src: string;
  className: string;
}

export interface LevelUI {
  headerColor: string;
  headerTextColor: string;
  successIcon: string;
  priceBackgroundColor: string;
}

// Error handling
export interface MembershipError {
  message: string;
  code?: string;
  field?: string;
}

// Component prop types
export interface MembershipComponentProps {
  membership?: UserMembership | null;
  level?: LevelInfo | null;
  loading?: boolean;
  error?: string | null;
}

export interface PlanCardSharedProps {
  planName: string;
  price: string;
  period: string;
  headerColor: string;
  headerTextColor: string;
  benefits: string[];
  moreBenefits?: string[];
  backgroundAssets: BackgroundAsset[];
  isCurrent?: boolean;
}

// API response types
export interface MembershipApiResponse<T> {
  data?: T;
  error?: MembershipError;
  success: boolean;
}

// UI configuration for membership levels
export interface LevelUIConfig {
  headerColor: string;
  headerTextColor: string;
  successIcon: string;
  priceBackgroundColor: string;
  backgroundAssets: BackgroundAsset[];
}

// Plan configuration for rendering
export interface PlanConfig {
  levelId: MembershipLevelId;
  planKey: string; // for selectedPlan state
  displayName?: string; // custom display name override
  isPopular?: boolean;
  yearlyMultiplier?: number; // for calculating yearly price
  billingMessage: string;
  benefitCardColors: {
    headerColor: string;
    textColor: string;
  };
}
