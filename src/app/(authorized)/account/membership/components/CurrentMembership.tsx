import { useRouter } from "next/navigation";
import { useState } from "react";
import PlanCard from "./PlanCard";
import Popup from "./Popup";
import { MembershipLevelId, MembershipStatus, Plan } from "@/interfaces/membershipInterface";
import { MEMBERSHIP_UI_CONFIG } from "@/app/(authorized)/account/membership/membershipConfig";

interface CurrentMembershipProps {
  plan: Plan;
  levelId: MembershipLevelId;
  status: MembershipStatus;
  onCancel?: () => void;
  isCancelling?: boolean;
}

export default function CurrentMembership({
  plan,
  levelId,
  status,
  onCancel,
  isCancelling = false,
}: CurrentMembershipProps) {
  const router = useRouter();
  const [showCancelPopup, setShowCancelPopup] = useState(false);

  const uiConfig = MEMBERSHIP_UI_CONFIG[levelId];

  const isActive = status === MembershipStatus.ACTIVE;

  const handleCancelClick = () => {
    if (!isActive || isCancelling) return;
    setShowCancelPopup(true);
  };

  const handleConfirmCancel = () => {
    setShowCancelPopup(false);
    onCancel && onCancel();
  };

  const handleKeepMembership = () => {
    setShowCancelPopup(false);
  };

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6">
      <h1 className="font-montserrat text-2xl font-semibold text-primary-brown md:text-3xl">
        Current membership
      </h1>

      <PlanCard
        plan={plan}
        uiConfig={uiConfig}
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
          onClick={handleCancelClick}
        >
          {isCancelling ? 'Cancelling...' : (isActive ? 'Cancel' : 'Cancelled')}
        </button>
      </div>

      {/* Cancel Membership Popup */}
      <Popup
        isOpen={showCancelPopup}
        onPrimaryAction={handleConfirmCancel}
        onSecondaryAction={handleKeepMembership}
        type="cancel-membership"
      />
    </div>
  );
}
