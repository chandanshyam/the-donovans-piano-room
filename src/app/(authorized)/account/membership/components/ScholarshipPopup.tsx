"use client";
import Image from "next/image";

interface ScholarshipPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export default function ScholarshipPopup({ isOpen, onClose, onApply }: ScholarshipPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#FFF2E5] rounded-2xl p-8 max-w-3xl shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-black mb-6">
          Apply for Scholarship
        </h2>
        
        {/* Content */}
        <div className="space-y-4 mb-8">
          <p className="text-lg text-black">
            Scholarships are available for families with household income below the Federal Poverty Level (FPL).
          </p>
          <p className="text-lg text-black">
            If you choose to apply, you'll be directed to an external form to provide your details. Please note that your application will be reviewed and subject to approval.
          </p>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onApply}
            className="flex-1 bg-primary-purple text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
          >
            Apply for Scholarship
          </button>
          <button
            onClick={onClose}
            className="flex-1 border-2 border-primary-purple text-primary-purple px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
