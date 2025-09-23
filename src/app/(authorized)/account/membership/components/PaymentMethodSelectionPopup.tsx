"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PaymentMethod } from "@/interfaces/membershipInterface";
import { getPaymentMethodIcon } from "../config";

interface PaymentMethodSelectionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  paymentMethods: PaymentMethod[];
  selectedPaymentMethod: PaymentMethod | null;
  onPaymentMethodSelect: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelectionPopup({
  isOpen,
  onClose,
  paymentMethods,
  selectedPaymentMethod,
  onPaymentMethodSelect,
}: PaymentMethodSelectionPopupProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleMethodSelect = (method: PaymentMethod) => {
    onPaymentMethodSelect(method);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#FFF2E5] rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-black">Select Payment Method</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Image src="/Close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>
        
        <div className="space-y-4 mb-8">
          {paymentMethods.filter(method => method && method.maskedDetails).map((method) => (
            <div
              key={method.vaultTokenId}
              className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                selectedPaymentMethod?.vaultTokenId === method.vaultTokenId
                  ? 'border-primary-purple bg-purple-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
              onClick={() => handleMethodSelect(method)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5">
                    <input
                      type="radio"
                      checked={selectedPaymentMethod?.vaultTokenId === method.vaultTokenId}
                      onChange={() => handleMethodSelect(method)}
                      className="w-5 h-5 text-primary-purple"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                      <Image
                        src={getPaymentMethodIcon(method.maskedDetails?.brand || '')}
                        fill
                        alt={method.maskedDetails?.brand || 'Card'}
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-black text-lg">
                        {method.maskedDetails?.displayName || 'Payment Method'}
                      </div>
                      {method.isDefault && (
                        <div className="text-sm text-primary-purple font-medium">Default</div>
                      )}
                    </div>
                  </div>
                </div>
                {method.isExpired && (
                  <div className="text-sm text-red-600 font-medium bg-red-50 px-2 py-1 rounded">Expired</div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => {
              onClose();
              router.push('/account/payments');
            }}
            className="flex-1 px-6 py-3 rounded-full font-medium transition-colors border-2 border-primary-purple text-primary-purple hover:bg-purple-50"
          >
            Manage Payment Methods
          </button>
          <button
            onClick={onClose}
            className="flex-1 text-white px-6 py-3 rounded-full font-medium transition-colors bg-primary-purple hover:bg-purple-700"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
