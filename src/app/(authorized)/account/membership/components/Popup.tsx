"use client";

export type PopupType = 
  | "cancel-membership"
  | "cancel-upgrade" 
  | "cancel-autopay"
  | "apply-scholarship"
  | "switch-from-scholarship";

interface PopupProps {
  isOpen: boolean;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
  type: PopupType;
}

const popupConfig = {
  "cancel-membership": {
    title: "Cancel Membership",
    content: "We're sorry to see you go. Canceling now means you'll lose access to all member benefits at the end of your billing period.\n\nAre you sure you want to continue?",
    primaryButton: "Cancel Anyway",
    secondaryButton: "Keep Membership",
    primaryButtonStyle: "bg-red-600 hover:bg-red-700",
    secondaryButtonStyle: "border-2 border-primary-purple text-primary-purple hover:bg-purple-50"
  },
  "cancel-upgrade": {
    title: "Go Back",
    content: "Are you sure you want to cancel the upgrade and go back?",
    primaryButton: "Continue with Transaction",
    secondaryButton: "Go Back",
    primaryButtonStyle: "bg-primary-purple hover:bg-purple-700",
    secondaryButtonStyle: "border-2 border-primary-purple text-primary-purple hover:bg-purple-50"
  },
  "cancel-autopay": {
    title: "Cancel Autopay?",
    content: "If you cancel autopay, your future payments won't be charged automatically. You'll need to make payments manually to keep your account active and avoid service interruptions.",
    primaryButton: "Cancel Autopay",
    secondaryButton: "Keep Autopay",
    primaryButtonStyle: "bg-red-600 hover:bg-red-700",
    secondaryButtonStyle: "border-2 border-primary-purple text-primary-purple hover:bg-purple-50"
  },
  "apply-scholarship": {
    title: "Apply for Scholarship",
    content: "Scholarships are available for families with household income below the Federal Poverty Level (FPL).\n\nIf you choose to apply, you'll be directed to an external form to provide your details. Please note that your application will be reviewed and subject to approval.",
    primaryButton: "Apply for Scholarship",
    secondaryButton: "Go Back",
    primaryButtonStyle: "bg-primary-purple hover:bg-purple-700",
    secondaryButtonStyle: "border-2 border-primary-purple text-primary-purple hover:bg-purple-50"
  },
  "switch-from-scholarship": {
    title: "⚠️ Switching from Scholarship Plan",
    content: "You're currently on a scholarship plan. If you switch to another plan, your scholarship will no longer apply.\n\nTo return to the scholarship plan in the future, you'll need to submit a new application and meet eligibility requirements again.",
    primaryButton: "Change Plan",
    secondaryButton: "Stay on Scholarship",
    primaryButtonStyle: "bg-primary-purple hover:bg-purple-700",
    secondaryButtonStyle: "border-2 border-primary-purple text-primary-purple hover:bg-purple-50"
  }
};

export default function Popup({ isOpen, onPrimaryAction, onSecondaryAction, type }: PopupProps) {
  if (!isOpen) return null;

  const config = popupConfig[type];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#FFF2E5] rounded-2xl p-8 max-w-3xl shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-black mb-6">
          {config.title}
        </h2>
        
        {/* Content */}
        <div className="space-y-4 mb-8">
          {config.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-black">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onPrimaryAction}
            className={`flex-1 text-white px-6 py-3 rounded-full font-medium transition-colors ${config.primaryButtonStyle}`}
          >
            {config.primaryButton}
          </button>
          <button
            onClick={onSecondaryAction}
            className={`flex-1 px-6 py-3 rounded-full font-medium transition-colors ${config.secondaryButtonStyle}`}
          >
            {config.secondaryButton}
          </button>
        </div>
      </div>
    </div>
  );
}
