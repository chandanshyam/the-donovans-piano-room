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
    <div>
      This is the scholarship popup.
    </div>
  );
}
