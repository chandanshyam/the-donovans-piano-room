import Image from "next/image";

export default function AutoRenewPayment() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6 h-full">
      <h1 className="font-montserrat text-3xl font-semibold text-primary-brown md:text-3xl">
        Auto renew payment
      </h1>

      <p className="text-2xl text-primary-black">
        Your Monthly Membership <span className="font-medium">#123456789</span> will be
        auto renewed on <span className="font-semibold text-tertiary-orange">{formattedDate}</span>.
      </p>

      {/* Payment method card */}
      <div className="rounded-2xl border border-[#F6E2D1] bg-[#FFEBD5] p-4 shadow-custom">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative flex h-[38px] w-[58px] items-center justify-center rounded-3xl border-[#CCCCCC] bg-white">
              <Image
                src="/memberships/Auto Renew Payment/Visa.svg"
                fill
                alt="Visa"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold text-primary-brown leading-6">
                Ending in <span className="text-tertiary-orange">1234</span>
              </div>
              <div className="text-xl text-primary-gray">Expires 02/28</div>
            </div>
          </div>

          <button type="button" className="inline-flex items-center gap-2 text-primary-purple">
            <span className="text-xl font-medium">Edit</span>
            <Image
              src="/memberships/Auto Renew Payment/pencil-outline.svg"
              width={14}
              height={14}
              alt="Edit payment method"
            />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex w-full flex-col items-center text-3xl gap-4 md:flex-row font-semibold">
          <button
            type="button"
            className="w-full rounded-full bg-primary-purple px-6 py-5 text-center text-white md:flex-1"
          >
            Add payment method
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-primary-purple px-6 py-5 text-center text-primary-purple md:flex-1"
          >
            Cancel auto pay
          </button>
      </div>
    </div>
  );
}
