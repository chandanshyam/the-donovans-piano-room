import { useRouter } from "next/navigation";
import PlanCard from "./PlanCard";
import { MembershipLevelId, MembershipStatus, PlanDisplayName } from "@/interfaces/membershipInterface";
import { getLevelUIConfig, getPlanDisplayNameForLevel, getPlanCardUIConfig } from "@/app/(authorized)/account/membership/membershipConfig";

interface CurrentMembershipProps {
  price: string;
  period: string;
  benefits: string[];
  moreBenefits: string[];
  levelId: MembershipLevelId;
  status: MembershipStatus;
  onCancel?: () => void;
  isCancelling?: boolean;
}

export default function CurrentMembership({
  price,
  period,
  benefits,
  moreBenefits,
  levelId,
  status,
  onCancel,
  isCancelling = false,
}: CurrentMembershipProps) {
  const router = useRouter();

  const uiConfig = getPlanCardUIConfig(levelId);
  const planDisplayName = getPlanDisplayNameForLevel(levelId);

  const isActive = status === MembershipStatus.ACTIVE;

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6">
      <h1 className="font-montserrat text-2xl font-semibold text-primary-brown md:text-3xl">
        Current membership
      </h1>

      <PlanCard
        planName={planDisplayName}
        price={price}
        period={period}
        uiConfig={uiConfig}
        isCurrent={true}
        benefits={benefits}
        moreBenefits={moreBenefits}
      />
      {/* Actions */}
      <div className="mt-4 flex w-full flex-col items-center text-3xl gap-4 md:flex-row font-semibold">
        <button
          type="button"
          className="w-full rounded-full bg-primary-purple px-6 py-5 text-center text-white md:flex-1"
          onClick={() => router.push('/account/membership/upgrade')}
        >
          Upgrade membership
        </button>
        <button
          type="button"
          disabled={!isActive || isCancelling}
          className={`w-full rounded-full border px-6 py-5 text-center md:flex-1 ${
            isActive && !isCancelling
              ? "border-primary-purple text-primary-purple"
              : "border-gray-300 text-gray-400 cursor-not-allowed"
          }`}
          onClick={() => {
            if (!isActive || isCancelling) return;
            onCancel && onCancel();
          }}
        >
          {isCancelling ? 'Cancelling...' : (isActive ? 'Cancel' : 'Cancelled')}
        </button>
      </div>
    </div>
  );
}
