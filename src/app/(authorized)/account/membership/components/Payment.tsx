import Image from "next/image";
import { useRouter } from "next/navigation";
import { PaymentMethodSummary, PaymentMethodBrand, Plan } from "@/interfaces/membershipInterface";
import { getPaymentMethodIcon, formatRenewalDate } from "@/app/(authorized)/account/membership/membershipConfig";

type PaymentMode = 'membership' | 'upgrade';

interface ButtonConfig {
  primary?: {
    onClick?: () => void;
    text?: string;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
  };
  secondary?: {
    onClick?: () => void;
    text?: string;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
  };
}

interface PaymentProps {
  mode: PaymentMode;
  membershipId: string;
  nextRenewalAt?: string;
  autoRenew?: boolean;
  paymentMethodSummary?: PaymentMethodSummary;
  buttons?: ButtonConfig;

  selectedPlan?: Plan; // for upgrade mode
}

export default function Payment({
  mode,
  membershipId,
  nextRenewalAt,
  autoRenew,
  paymentMethodSummary,
  selectedPlan,
  buttons,
}: PaymentProps) {
  const router = useRouter();
  const formattedDate = formatRenewalDate(nextRenewalAt);
  const brandImageSrc = getPaymentMethodIcon(paymentMethodSummary?.brand || '');

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6 h-full">
      <h1 className="font-montserrat text-3xl font-semibold text-primary-brown md:text-3xl flex items-center">
        {mode === 'membership' ? (
          <>
            <Image src="/memberships/Payment/ic_round-autorenew.svg" alt="Auto renew payment" width={20} height={20} />
            <span className="ml-2">Auto renew payment</span>
          </>
        ) : (
          'Select Payment Method'
        )}
      </h1>

      {mode === 'membership' ? (
        autoRenew && formattedDate ? (
          <p className="text-2xl text-primary-black">
            Your Membership <span className="font-medium">#{membershipId}</span> will be
            auto renewed on <span className="font-semibold text-tertiary-orange">{formattedDate}</span>.
          </p>
        ) : (
          <p className="text-2xl text-primary-black">
            Auto renew is currently disabled.
          </p>
        )
      ) : (
        <p className="text-2xl text-primary-black">
          Select a payment method or add new to change your membership to a <span className="font-semibold text-tertiary-orange">{selectedPlan?.planName || 'Yearly'} Plan</span>.
        </p>
      )}

      {/* Payment method card */}
      <div className="rounded-2xl border border-[#F6E2D1] bg-[#FFEBD5] p-4 shadow-custom">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative flex h-[38px] w-[58px] items-center justify-center rounded-3xl border-[#CCCCCC] bg-white">
              <Image
                src={brandImageSrc}
                fill
                alt={paymentMethodSummary?.brand || 'Card'}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold text-primary-brown leading-6">
                Ending in <span className="text-tertiary-orange">{paymentMethodSummary?.last4 || '----'}</span>
              </div>
              <div className="text-xl text-primary-gray">
                Expires {paymentMethodSummary?.expMonth?.toString().padStart(2, '0') || '--'}/{paymentMethodSummary?.expYear || '----'}
              </div>
            </div>
          </div>

          <button type="button" className="inline-flex items-center gap-2 text-primary-purple" onClick={() => router.push('/account/payments')}>
            <span className="text-xl font-medium">Edit</span>
            <Image
              src="/memberships/Payment/pencil-outline.svg"
              width={14}
              height={14}
              alt="Edit payment method"
            />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex w-full flex-col items-center text-3xl gap-4 md:flex-row font-semibold">
        {/* Primary Button */}
        {buttons?.primary && (
          <button
            type="button"
            disabled={buttons.primary.disabled || buttons.primary.loading}
            className={`w-full rounded-full px-6 py-5 text-center text-white md:flex-1 ${
              (buttons.primary.disabled || buttons.primary.loading)
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary-purple'
            }`}
            onClick={buttons.primary.onClick}
          >
            {buttons.primary.loading 
              ? (buttons.primary.loadingText || 'Loading...')
              : buttons.primary.text || 'Button'
            }
          </button>
        )}
        
        {/* Secondary Button */}
        {buttons?.secondary && (
          <button
            type="button"
            disabled={buttons.secondary.disabled || buttons.secondary.loading}
            className={`w-full rounded-full px-6 py-5 text-center md:flex-1 border ${
              (buttons.secondary.disabled || buttons.secondary.loading)
                ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-primary-purple text-primary-purple'
            }`}
            onClick={buttons.secondary.onClick}
          >
            {buttons.secondary.loading 
              ? (buttons.secondary.loadingText || 'Loading...')
              : buttons.secondary.text || 'Button'
            }
          </button>
        )}
      </div>
    </div>
  );
}
