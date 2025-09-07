"use client";
import { useEffect, useMemo, useState } from "react";
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import {
  authorizedWrapperTitles,
  settingsNavigation,
} from "@/utils/general";
import { getPlanInfo, getUserMembership, cancelUserMembership, toggleAutoRenew } from "@/lib/api/membershipService";
import CurrentMembership from "./components/CurrentMembership";
import AutoRenewPayment from "./components/AutoRenewPayment";
import { UserMembership, MembershipStatus, MembershipLevelId, PlanData } from "@/interfaces/membershipInterface";
import { formatRenewalDate } from "./membershipConfig";
import "../../../../styles/primary-purple-scrollbar.css";

export default function Page() {
  const [membership, setMembership] = useState<UserMembership | null>(null);
  const [plan, setPlan] = useState<PlanData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCancelling, setIsCancelling] = useState<boolean>(false);
  const [isUpdatingAuto, setIsUpdatingAuto] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const userMembership = await getUserMembership();
        if (!isMounted) return;
        setMembership(userMembership);
        if (userMembership?.levelId) {
          const levelDetails = await getPlanInfo(userMembership.levelId);
          if (!isMounted) return;
          setPlan(levelDetails);
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
        const levelDetails = await getPlanInfo(userMembership.levelId);
        setPlan(levelDetails);
      }
    } catch (e) {}
  };

  const handleCancel = async () => {
    try {
      setIsCancelling(true);
      await cancelUserMembership();
      await refresh();
      setSuccessMessage("Your membership has been successfully cancelled.");
      setTimeout(() => setSuccessMessage(""), 4000);
    } catch (e: any) {
      setError(e?.message || 'Failed to cancel membership');
    } finally {
      setIsCancelling(false);
    }
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

  const formattedNextRenewal = useMemo(() => {
    return formatRenewalDate(membership?.nextRenewalAt);
  }, [membership?.nextRenewalAt]);

  const planData: PlanData | null = plan;

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

        {!!successMessage && (
          <p className="mt-3 rounded-md bg-emerald-500/15 p-3 text-xl font-medium text-emerald-600 3xl:text-2xl 4xl:text-3xl">
            {successMessage}
          </p>
        )}

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
            )}. Auto‑renew is off and no further charges will occur. You can rejoin anytime from Upgrade membership.
          </p>
        )}

        {!loading && !error && membership && membership.status !== MembershipStatus.CANCELLED && (
          <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium pt-[1%]">
            As a valued member, your membership #{membership.membershipId}
            {membership.autoRenew && formattedNextRenewal && (
              <>
                {" "}will be auto renewed on <span className="font-semibold text-primary-orange">{formattedNextRenewal}.</span>
              </>
            )}
          </p>
        )}
        <div className='mt-[4vh] mb-[4vh] bg-[#FED2AA] h-1'></div>

        <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-9 md:max-w-[1000px]">
          {planData && (
            <CurrentMembership
              planData={planData}
              levelId={membership?.levelId || MembershipLevelId.FREE}
              status={membership?.status || MembershipStatus.ACTIVE}
              onCancel={handleCancel}
              isCancelling={isCancelling}
            />
          )}
          <AutoRenewPayment
            membershipId={membership?.membershipId || ""}
            nextRenewalAt={membership?.nextRenewalAt}
            autoRenew={Boolean(membership?.autoRenew)}
            paymentMethodSummary={membership?.paymentMethodSummary}
            onToggleAutoRenew={handleToggleAutoRenew}
            isUpdating={isUpdatingAuto}
            isMembershipActive={membership?.status === MembershipStatus.ACTIVE}
          />
        </div>
      </div>

    </AuthorizedWrapper1>
  );
}