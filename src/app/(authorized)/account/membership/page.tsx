"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import {
  authorizedWrapperTitles,
  settingsNavigation,
} from "@/utils/general";
import { getPlanInfo, getUserMembership, cancelUserMembership, toggleAutoRenew } from "@/lib/api/membershipService";
import Payment from "./components/Payment";
import Popup from "./components/Popup";
import PlanCard from "./components/PlanCard";
import { UserMembership, MembershipStatus, MembershipLevelId, Plan } from "@/interfaces/membershipInterface";
import { formatRenewalDate, MEMBERSHIP_UI_CONFIG } from "./membershipConfig";
import "../../../../styles/primary-purple-scrollbar.css";

export default function Page() {
  const router = useRouter();
  const [membership, setMembership] = useState<UserMembership | null>(null);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCancelling, setIsCancelling] = useState<boolean>(false);
  const [isUpdatingAuto, setIsUpdatingAuto] = useState<boolean>(false);
  const [showCancelPopup, setShowCancelPopup] = useState<boolean>(false);
  const [showCancelAutopayPopup, setShowCancelAutopayPopup] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const userMembership = await getUserMembership();
        if (!isMounted) return;
        setMembership(userMembership);
        if (userMembership?.levelId) {
          const planDetails = await getPlanInfo(userMembership.levelId);
          if (!isMounted) return;
          setPlan({ 
            ...planDetails, 
            isCurrent: true,
            isPopular: planDetails.levelId === MembershipLevelId.YEAR,
            yearlyPrice: (planDetails.price * (userMembership.levelId === MembershipLevelId.DAY ? 365 : (userMembership.levelId === MembershipLevelId.MONTH || userMembership.levelId === MembershipLevelId.YEAR ? 12 : 0))).toFixed(2)
          });
        }
      } catch (e: any) {
        if (!isMounted) return;
        setError(e?.message || "Failed to load membership info");
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  const refresh = async () => {
    try {
      const userMembership = await getUserMembership();
      setMembership(userMembership);
      if (userMembership?.levelId) {
        const planDetails = await getPlanInfo(userMembership.levelId);
        setPlan({ 
          ...planDetails, 
          isCurrent: true,
          isPopular: planDetails.levelId === MembershipLevelId.YEAR
        });
      }
    } catch (e) {}
  };

  const handleCancel = async () => {
    try {
      setIsCancelling(true);
      await cancelUserMembership();
      await refresh();
    } catch (e: any) {
      setError(e?.message || 'Failed to cancel membership');
    } finally {
      setIsCancelling(false);
    }
  };

  const handleCancelClick = () => {
    const isActive = membership?.status === MembershipStatus.ACTIVE;
    if (!isActive || isCancelling) return;
    setShowCancelPopup(true);
  };

  const handleConfirmCancel = () => {
    setShowCancelPopup(false);
    handleCancel();
  };

  const handleKeepMembership = () => {
    setShowCancelPopup(false);
  };

  const handleToggleAutoRenew = async (nextEnable: boolean) => {
    try {
      setIsUpdatingAuto(true);
      await toggleAutoRenew(nextEnable);
      await refresh();
    } catch (e: any) {
      setError(e?.message || 'Failed to update auto renew');
    } finally {
      setIsUpdatingAuto(false);
    }
  };

  const handleToggleClick = () => {
    if (!membership || isUpdatingAuto) return;
    
    if (membership.autoRenew) {
      // Show popup when trying to cancel autopay
      setShowCancelAutopayPopup(true);
    } else {
      // Enable autopay directly
      handleToggleAutoRenew(true);
    }
  };

  const handleConfirmCancelAutopay = () => {
    setShowCancelAutopayPopup(false);
    handleToggleAutoRenew(false);
  };

  const handleKeepAutopay = () => {
    setShowCancelAutopayPopup(false);
  };

  const formattedNextRenewal = useMemo(() => {
    return formatRenewalDate(membership?.nextRenewalAt);
  }, [membership?.nextRenewalAt]);

  const uiConfig = membership?.levelId ? MEMBERSHIP_UI_CONFIG[membership.levelId] : null;
  const isActive = membership?.status === MembershipStatus.ACTIVE;

  return (
    <AuthorizedWrapper1
      pageTitle={authorizedWrapperTitles.AccountAndSettings}
      openedLink=""
    >
      <AccountAndSettingsNav currentPage={settingsNavigation.membership} />

      <div className="w-full">
        <h1 className="mt-[3vh] font-montserrat text-5xl font-medium text-primary-brown 3xl:text-6xl 4xl:text-7xl">
          Your membership
        </h1>

        {loading && (
          <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium pt-[1%]">
            Loading your membership...
          </p>
        )}
        {!loading && error && (
          <p className="text-red-600 text-2xl 3xl:text-3xl 4xl:text-4xl font-medium pt-[1%]">
            {error}
          </p>
        )}
        {!loading && !error && membership && membership.status === MembershipStatus.CANCELLED && (
          <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium pt-[1%]">
            Your membership has been cancelled. You&apos;ll keep access until {formattedNextRenewal && (
              <span className="font-semibold text-primary-orange">{formattedNextRenewal}</span>
            )}. You can rejoin anytime from Upgrade membership.
          </p>
        )}

        {!loading && !error && membership && membership.status !== MembershipStatus.CANCELLED && (
          <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium pt-[1%]">
            As a valued member, your membership #{membership.membershipId}
            {membership.autoRenew && formattedNextRenewal ? (
              <>
                {" "}will be auto renewed on <span className="font-semibold text-primary-orange">{formattedNextRenewal}.</span>
              </>
            ) : (
              <>
                {" "}will not auto renew. You can enable auto-renewal below to ensure uninterrupted access.
              </>
            )}
          </p>
        )}
        <div className='mt-[4vh] mb-[4vh] bg-[#FED2AA] h-1'></div>

        <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-9 md:max-w-[1000px]">
          {plan && uiConfig && (
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
            </div>
          )}
          <Payment
            mode="membership"
            membershipId={membership?.membershipId || ""}
            nextRenewalAt={membership?.nextRenewalAt}
            autoRenew={Boolean(membership?.autoRenew)}
            paymentMethodSummary={membership?.paymentMethodSummary}
            onToggleAutoRenew={handleToggleAutoRenew}
            onToggleClick={handleToggleClick}
            isUpdating={isUpdatingAuto}
            isMembershipActive={membership?.status === MembershipStatus.ACTIVE}
          />
        </div>
      </div>

      {/* Cancel Membership Popup */}
      <Popup
        isOpen={showCancelPopup}
        onPrimaryAction={handleConfirmCancel}
        onSecondaryAction={handleKeepMembership}
        type="cancel-membership"
      />

      {/* Cancel Autopay Popup */}
      <Popup
        isOpen={showCancelAutopayPopup}
        onPrimaryAction={handleConfirmCancelAutopay}
        onSecondaryAction={handleKeepAutopay}
        type="cancel-autopay"
      />
    </AuthorizedWrapper1>
  );
}