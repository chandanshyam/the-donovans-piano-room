"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import AccountAndSettingsNav from "@/components/atoms/AccountAndSettingsNav";
import AuthorizedWrapper1 from "@/components/ContentWrappers/authorized-1/AuthorizedWrapper1";
import {
  authorizedWrapperTitles,
  settingsNavigation,
} from "@/utils/general";
import { getPlanInfo, getUserMembership } from "@/lib/api/membershipService";
import Payment from "../../components/Payment";
import PlanCard from "../../components/PlanCard";
import Popup from "../../components/Popup";
import { UserMembership, MembershipStatus, MembershipLevelId, Plan } from "@/interfaces/membershipInterface";
import { MEMBERSHIP_UI_CONFIG, PopupType } from "../../config";
import "../../../../../../styles/primary-purple-scrollbar.css";
import Image from "next/image";

// Map planId from URL to MembershipLevelId
const PLAN_ID_MAP: Record<string, MembershipLevelId> = {
  'yearly': MembershipLevelId.YEAR,
  'monthly': MembershipLevelId.MONTH,
  'daily': MembershipLevelId.DAY,
  'free': MembershipLevelId.FREE,
};

export default function UpgradeConfirmationPage() {
  const router = useRouter();
  const params = useParams();
  const planId = params.planId as string;
  
  const [membership, setMembership] = useState<UserMembership | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showBackConfirmationPopup, setShowBackConfirmationPopup] = useState(false);

  // Get the MembershipLevelId from the URL parameter
  const levelId = PLAN_ID_MAP[planId];

  useEffect(() => {
    let isMounted = true;
    
    // Validate planId
    if (!levelId) {
      setError("Invalid plan selected");
      setLoading(false);
      return;
    }

    (async () => {
      try {
        setLoading(true);
        const [userMembership, planDetails] = await Promise.all([
          getUserMembership(),
          getPlanInfo(levelId)
        ]);
        
        if (!isMounted) return;
        
        setMembership(userMembership);
        setSelectedPlan({ 
          ...planDetails, 
          isCurrent: false, // This is a selected plan, not current
          isPopular: planDetails.levelId === MembershipLevelId.YEAR,
          yearlyPrice: (planDetails.price * (levelId === MembershipLevelId.DAY ? 365 : (levelId === MembershipLevelId.MONTH || levelId === MembershipLevelId.YEAR ? 12 : 0))).toFixed(2)
        });
      } catch (e: any) {
        if (!isMounted) return;
        setError(e?.message || "Failed to load plan details");
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    })();
    
    return () => {
      isMounted = false;
    };
  }, [levelId]);

  const handleBackButton = () => {
    router.push('/account/membership/upgrade');
  };

  const handleBackClick = () => {
    setShowBackConfirmationPopup(true);
  };

  const handleConfirmBack = () => {
    setShowBackConfirmationPopup(false);
    handleBackButton();
  };

  const handleCancelBack = () => {
    setShowBackConfirmationPopup(false);
  };

  // Button configuration for Payment component
  const paymentButtons = [
    {
      onClick: () => router.push('/account/payments'),
      text: 'Add payment method',
      disabled: false,
      loading: false,
      style: 'w-full rounded-full bg-primary-purple px-6 py-5 text-center text-white'
    },
    {
      onClick: handleBackClick,
      text: 'Back',
      disabled: false,
      loading: false,
      style: 'w-full rounded-full px-6 py-5 text-center border border-primary-purple text-primary-purple'
    }
  ];

  if (loading) {
    return (
      <AuthorizedWrapper1
        pageTitle={authorizedWrapperTitles.AccountAndSettings}
        openedLink=""
      >
        <AccountAndSettingsNav currentPage={settingsNavigation.membership} />
        <div className="mt-4 w-full">
          <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium pt-[1%]">
            Loading plan details...
          </p>
        </div>
      </AuthorizedWrapper1>
    );
  }

  if (error || !selectedPlan) {
    return (
      <AuthorizedWrapper1
        pageTitle={authorizedWrapperTitles.AccountAndSettings}
        openedLink=""
      >
        <AccountAndSettingsNav currentPage={settingsNavigation.membership} />
        <div className="mt-4 w-full">
          <p className="text-red-600 text-2xl 3xl:text-3xl 4xl:text-4xl font-medium pt-[1%]">
            {error || "Plan not found"}
          </p>
          <button 
            onClick={handleBackButton}
            className="mt-4 text-primary-purple text-xl underline"
          >
            ← Back to membership
          </button>
        </div>
      </AuthorizedWrapper1>
    );
  }

  return (
    <AuthorizedWrapper1
      pageTitle={authorizedWrapperTitles.AccountAndSettings}
      openedLink=""
    >
      <AccountAndSettingsNav currentPage={settingsNavigation.membership} />

      <div className="mt-4 w-full">
        {/* Back button */}
        <button 
          className="mb-6 flex items-center gap-2 text-primary-purple" 
          onClick={handleBackButton}
        >
          <Image
            className="h-5 w-5 shrink-0"
            src="../../../../memberships/upgrade/arrow_back_FILL0_wght400_GRAD0_opsz24 1.svg"
            alt="Back arrow"
            width={20}
            height={20}
          />
          Your membership
        </button>

        <h1 className="font-montserrat text-5xl font-medium text-primary-brown 3xl:text-6xl 4xl:text-7xl">
          Select your plan
        </h1>
        <p className="text-primary-gray text-2xl 3xl:text-3xl 4xl:text-4xl font-medium mt-[2%]">
            There are multiple membership you can choose from, select the one that best suits your interests.
          </p>
        <div className='mt-[5vh] mb-[5vh] bg-[#FED2AA] h-1'></div>

        <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-9 md:max-w-[1000px]">
          <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6">
            <h1 className="font-montserrat text-2xl font-semibold text-primary-brown md:text-3xl">
              Selected plan
            </h1>

            <PlanCard
              plan={selectedPlan}
              uiConfig={MEMBERSHIP_UI_CONFIG[levelId]}
            />
            
            {/* Confirm Plan Selection Button */}
            <div className="mt-4 flex w-full justify-end text-3xl gap-4 font-semibold">
              <button
                type="button"
                className="w-auto rounded-full bg-primary-purple px-6 py-5 text-center text-white"
                onClick={() => {
                  // TODO: need to send a POST request to the backend to update the membership info)
                  console.log("Button clicked for plan:", selectedPlan?.planName);
                }}
              >
                Confirm Plan Selection
              </button>
            </div>
            
          </div>
          <Payment
            mode="upgrade"
            membershipId={membership?.membershipId || ""}
            nextRenewalAt={membership?.nextRenewalAt}
            autoRenew={Boolean(membership?.autoRenew)}
            paymentMethodSummary={membership?.paymentMethodSummary}
            selectedPlan={selectedPlan}
            buttons={paymentButtons}
          />
        </div>
      </div>

      {/* Back Confirmation Popup */}
      <Popup
        isOpen={showBackConfirmationPopup}
        type={PopupType.CANCEL_SWITCH}
        primaryButton={{
          onClick: handleCancelBack,
          text: "Continue with Transaction"
        }}
        secondaryButton={{
          onClick: handleConfirmBack,
          text: "Go Back"
        }}
      />
    </AuthorizedWrapper1>
  );
}
