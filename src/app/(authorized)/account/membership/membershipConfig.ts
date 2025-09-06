import { MembershipLevelId, PaymentMethodBrand, PlanCardUIConfig } from "@/interfaces/membershipInterface";

// Unified UI configuration for all membership levels
export const MEMBERSHIP_UI_CONFIG: Record<MembershipLevelId, PlanCardUIConfig> = {
  [MembershipLevelId.FREE]: {
    headerColor: "bg-[#e98427]",
    headerTextColor: "text-white",
    successIcon: "/memberships/upgrade/Scholoarship-free/Success.svg",
    priceBackgroundColor: "bg-orange-50",
    backgroundAssets: [
      { src: "/memberships/upgrade/Scholoarship-free/Group 48096278.svg", className: "inset-0 object-cover" }
    ],
    useSingleColumn: false,
    priceBlockSize: "py-10",
    benefitCardColors: {
      headerColor: 'bg-[#FED2AA]',
      textColor: 'text-[#8B4513]'
    }
  },
  [MembershipLevelId.DAY]: {
    headerColor: "bg-[#6F219E]",
    headerTextColor: "text-white",
    successIcon: "/memberships/upgrade/Scholoarship/Success.svg",
    priceBackgroundColor: "bg-purple-100",
    backgroundAssets: [
      { src: "/memberships/upgrade/Scholoarship/Group 48096278.svg", className: "inset-0 object-cover" }
    ],
    useSingleColumn: false,
    priceBlockSize: "py-10",
    benefitCardColors: {
      headerColor: 'bg-[#6F219E]',
      textColor: 'text-white'
    }
  },
  [MembershipLevelId.MONTH]: {
    headerColor: "bg-[#438342]",
    headerTextColor: "text-white",
    successIcon: "/memberships/upgrade/1-Month/Success.svg",
    priceBackgroundColor: "bg-green-10",
    backgroundAssets: [
      { src: "/memberships/upgrade/1-Month/Group 48096278.svg", className: "inset-0 object-cover" }
    ],
    useSingleColumn: false,
    priceBlockSize: "py-10",
    benefitCardColors: {
      headerColor: 'bg-[#FED2AA]',
      textColor: 'text-[#8B4513]'
    }
  },
  [MembershipLevelId.YEAR]: {
    headerColor: "bg-[#E9BB18]",
    headerTextColor: "text-white",
    successIcon: "/memberships/upgrade/1-Year/Success.svg",
    priceBackgroundColor: "bg-yellow-50",
    backgroundAssets: [
      { src: "/memberships/upgrade/1-Year/Group 48095969.svg", className: "inset-0 object-cover" }
    ],
    useSingleColumn: false,
    priceBlockSize: "py-10",
    benefitCardColors: {
      headerColor: 'bg-[#E9BB18]',
      textColor: 'text-white'
    }
  }
};


// Payment method brand icons configuration
export const PAYMENT_METHOD_ICONS: Record<PaymentMethodBrand, string> = {
  [PaymentMethodBrand.VISA]: "/memberships/Auto Renew Payment/Visa.svg",
  [PaymentMethodBrand.MASTERCARD]: "/memberships/Auto Renew Payment/Visa.svg", // fallback to Visa icon
  [PaymentMethodBrand.AMEX]: "/memberships/Auto Renew Payment/Visa.svg", // fallback to Visa icon
  [PaymentMethodBrand.AMERICAN_EXPRESS]: "/memberships/Auto Renew Payment/Visa.svg" // fallback to Visa icon
};

// Date formatting configuration
export const DATE_FORMATS = {
  renewalDate: {
    locale: "en-US",
    options: {
      month: "2-digit",
      day: "2-digit",
      year: "numeric"
    }
  }
} as const;

// Helper function to get payment method icon
export const getPaymentMethodIcon = (brand: string): string => {
  const normalizedBrand = brand.toLowerCase() as PaymentMethodBrand;
  return PAYMENT_METHOD_ICONS[normalizedBrand] || PAYMENT_METHOD_ICONS[PaymentMethodBrand.VISA];
};

// Helper function to format renewal date
export const formatRenewalDate = (dateString?: string): string => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString(
      DATE_FORMATS.renewalDate.locale,
      DATE_FORMATS.renewalDate.options
    );
  } catch {
    return "";
  }
};
