"use client";
import { useEffect, useMemo, useState } from "react";
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import {
  authorizedWrapperTitles,
  settingsNavigation,
} from "@/utils/general";
import { getLevelInfo, getUserMembership } from "@/lib/api/membershipService";
import CurrentMembership from "./components/CurrentMembership";
import AutoRenewPayment from "./components/AutoRenewPayment";
import "../../../../styles/primary-purple-scrollbar.css";

type PaymentMethodSummary = {
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
};

type UserMembership = {
  membershipId: string;
  status: string;
  levelId: string;
  nextRenewalAt?: string;
  autoRenew?: boolean;
  paymentMethodSummary?: PaymentMethodSummary;
};

type LevelInfo = {
  levelId: string;
  name: string;
  price: number;
  period: string;
  basic_benefits: string[];
  additional_benefits: string[];
};

export default function Page() {
  const [membership, setMembership] = useState<UserMembership | null>(null);
  const [level, setLevel] = useState<LevelInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setLoading(true);
        const userMembership = await getUserMembership();
        if (!isMounted) return;
        setMembership(userMembership);
        if (userMembership?.levelId) {
          const levelDetails = await getLevelInfo(userMembership.levelId);
          if (!isMounted) return;
          setLevel(levelDetails);
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

  const formattedNextRenewal = useMemo(() => {
    if (!membership?.nextRenewalAt) return "";
    try {
      return new Date(membership.nextRenewalAt).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
    } catch {
      return "";
    }
  }, [membership?.nextRenewalAt]);

  const periodLabel = useMemo(() => {
    if (!level?.period) return "";
    if (level.period === "") return "";
    return `per ${level.period}`;
  }, [level?.period]);

  const priceLabel = useMemo(() => {
    if (level?.price === 0) return "FREE";
    if (typeof level?.price === "number") return `$${level.price.toFixed(2)}`;
    return "";
  }, [level?.price]);

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
        {!loading && !error && membership && (
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
          <CurrentMembership
            planName={level?.name || ""}
            price={priceLabel}
            period={periodLabel}
            benefits={level?.basic_benefits || []}
            moreBenefits={level?.additional_benefits || []}
            levelId={membership?.levelId || ""}
            status={membership?.status || ""}
          />
          <AutoRenewPayment
            membershipId={membership?.membershipId || ""}
            nextRenewalAt={membership?.nextRenewalAt}
            autoRenew={Boolean(membership?.autoRenew)}
            paymentMethodSummary={membership?.paymentMethodSummary}
          />
        </div>
      </div>

    </AuthorizedWrapper1>
  );
}