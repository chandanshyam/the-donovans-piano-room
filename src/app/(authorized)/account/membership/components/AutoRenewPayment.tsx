import Image from "next/image";

type PaymentMethodSummary = {
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
};

interface AutoRenewPaymentProps {
  membershipId: string;
  nextRenewalAt?: string;
  autoRenew?: boolean;
  paymentMethodSummary?: PaymentMethodSummary;
  onToggleAutoRenew?: (nextEnable: boolean) => void;
  isUpdating?: boolean;
}

export default function AutoRenewPayment({
  membershipId,
  nextRenewalAt,
  autoRenew,
  paymentMethodSummary,
  onToggleAutoRenew,
  isUpdating = false,
}: AutoRenewPaymentProps) {
  const formattedDate = nextRenewalAt
    ? new Date(nextRenewalAt).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      })
    : "";

  const brandImageSrc = (() => {
    switch ((paymentMethodSummary?.brand || '').toLowerCase()) {
      case 'visa':
        return "/memberships/Auto Renew Payment/Visa.svg";
      case 'mastercard':
      case 'amex':
      case 'american express':
      default:
        return "/memberships/Auto Renew Payment/Visa.svg";
    }
  })();

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6 h-full">
      <h1 className="font-montserrat text-3xl font-semibold text-primary-brown md:text-3xl">
        Auto renew payment
      </h1>

      {autoRenew && formattedDate ? (
        <p className="text-2xl text-primary-black">
          Your Membership <span className="font-medium">#{membershipId}</span> will be
          auto renewed on <span className="font-semibold text-tertiary-orange">{formattedDate}</span>.
        </p>
      ) : (
        <p className="text-2xl text-primary-black">
          Auto renew is currently disabled.
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

          <button type="button" className="inline-flex items-center gap-2 text-primary-purple">
            <span className="text-xl font-medium">Edit</span>
            <Image
              src="/memberships/Auto Renew Payment/pencil-outline.svg"
              width={14}
              height={14}
              alt="Edit payment method"
            />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex w-full flex-col items-center text-3xl gap-4 md:flex-row font-semibold">
          <button
            type="button"
            className="w-full rounded-full bg-primary-purple px-6 py-5 text-center text-white md:flex-1"
          >
            Add payment method
          </button>
          <button
            type="button"
            disabled={isUpdating}
            className={`w-full rounded-full px-6 py-5 text-center md:flex-1 border ${
              isUpdating ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'border-primary-purple text-primary-purple'
            }`}
            onClick={() => onToggleAutoRenew && onToggleAutoRenew(!autoRenew)}
          >
            {isUpdating ? 'Updating...' : autoRenew ? 'Cancel auto pay' : 'Enable auto pay'}
          </button>
      </div>
    </div>
  );
}
