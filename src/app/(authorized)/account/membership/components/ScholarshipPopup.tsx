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
        This is the scholarship popup.
      </div>
    </div>
  );
}
