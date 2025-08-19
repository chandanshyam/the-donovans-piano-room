import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function CurrentMembership() {
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);
  const router = useRouter();
  const benefits = [
    "Voice lessons",
    "Ear training",
    "Games",
    "Benefit 4",
  ];
  const moreBenefits = [
    "Flexibility: easily choose to continue or cancel based on your needs and satisfaction.",
    "Lower upfront cost: it ideal for budget-conscious individuals or those wanting to test the program before committing long-term.",
    "Reduced commitment: with this plan, you&apos;re not tied to a long-term commitment.",
  ];
  const toggleBenefits = () => {
    setShowMoreBenefits(!showMoreBenefits);
  };
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6">
      <h1 className="font-montserrat text-2xl font-semibold text-primary-brown md:text-3xl">
        Current membership
      </h1>

      {/* Card */}
      <div className="w-full rounded-2xl border border-[#FCF0D8] bg-[#ffffff] shadow-custom">
        {/* Header ribbon */}
        <div className="relative rounded-t-xl bg-primary-green px-5 py-3 text-white">
          <div className="text-2xl font-semibold">1-Month</div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9D9D9] bg-[#ffffffcc] px-3 py-1 text-xl font-medium text-primary-brown">

              <Image
                className="cursor-pointer h-5 w-5 shrink-0"
                src="/memberships/Current Membership/request_quote_FILL0_wght400_GRAD0_opsz24 1.svg"
                alt="Current plan"
                width={20}
                height={20}
              />
              Current plan
            </span>
          </div>
        </div>

        {/* Price block with patterned background assets from /public/memberships/Current Membership */}
        <div className="relative flex flex-col items-center overflow-hidden bg-[#F5F9F4] py-10">
          {/* background music notes */}

          <Image
            src="/memberships/Current Membership/Vector.svg"
            alt="pattern"
            width={140}
            height={120}
            className="pointer-events-none absolute left-6 top-20 opacity-60 scale-[0.7]"
            priority
          />
          <Image
            src="/memberships/Current Membership/Vector (1).svg"
            alt="pattern"
            width={120}
            height={80}
            className="pointer-events-none absolute -right-8 -top-2 -translate-x-1/2 opacity-60 scale-[0.2]"
            priority
          />
          <Image
            src="/memberships/Current Membership/Vector (2).svg"
            alt="pattern"
            width={200}
            height={200}
            className="pointer-events-none absolute -right-10 -top-8 opacity-60 scale-[0.75]"
            priority
          />
          <Image
            src="/memberships/Current Membership/Vector (3).svg"
            alt="pattern"
            width={120}
            height={120}
            className="pointer-events-none absolute -left-8 -top-3 opacity-60 scale-[0.8]"
            priority
          />
          <Image
            src="/memberships/Current Membership/Ellipse 214.svg"
            alt="dot"
            width={20}
            height={20}
            className="pointer-events-none absolute left-[45%] top-[35%] opacity-60 scale-[0.5]"
            priority
          />
          <Image
            src="/memberships/Current Membership/Ellipse 215.svg"
            alt="eclipse pattern"
            width={30}
            height={30}
            className="pointer-events-none absolute left-[20%] top-2 opacity-50 scale-[0.6]"
            priority
          />
          <Image
            src="/memberships/Current Membership/Ellipse 217.svg"
            alt="eclipse pattern"
            width={25}
            height={25}
            className="pointer-events-none absolute left-1/2 top-0 opacity-45 scale-[0.3]"
            priority
          />
          <Image
            src="/memberships/Current Membership/Ellipse 218.svg"
            alt="eclipse pattern"
            width={60}
            height={60}
            className="pointer-events-none absolute left-[35%] -top-1 opacity-40 scale-[0.7]"
            priority
          />
          <div className="relative z-10 font-montserrat text-4xl font-semibold text-primary-brown md:text-5xl 3xl:text-6xl 4xl:text-7xl">
            $29.99
          </div>
          <div className="relative z-10 mt-1 text-sm text-primary-gray md:text-base">one day</div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#F4E6CF]"></div>

        <div className="py-6 p-4 ">
          {/* Benefits */}
          <div className="grid grid-cols-1 gap-y-3 gap-x-6 md:grid-cols-2">
            {benefits.map((label) => (
              <div key={label} className="flex items-center gap-3 text-primary-brown">
                <span className="flex h-6 w-6 items-center justify-center rounded-full ">
                  <Image
                    className="shrink-0"
                    src="/memberships/Current Membership/Success.svg"
                    alt="Success"
                    width={16}
                    height={16}
                  />
                </span>
                <span className="text-2xl">{label}</span>
              </div>
            ))}
          </div>

          {/* More benefits */}
          <div className="pb-2 pt-4">
            <button
              type="button"
              onClick={toggleBenefits}
              className="inline-flex select-none items-center gap-2 rounded-lg bg-[#fbf5ff] px-4 py-2 text-xl font-bold text-primary-purple hover:bg-[#E6DAFA] underline"
            >
              See more benefits
              <Image
                className={`cursor-pointer h-4 w-4 shrink-0 transition-transform duration-200 ${
                  showMoreBenefits ? "rotate-180" : ""
                }`}
                src="/memberships/Current Membership/Vector (4).svg"
                alt="Arrow"
                width={16}
                height={16}
              />
            </button>
          </div>
            
          {showMoreBenefits && (
            <div className="px-4 pb-6">
              <div className="p-1">
                <ul className="list-disc list-inside text-2xl">
                  {moreBenefits.map((benefit) => (
                    <li key={benefit}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>
      </div>

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
            className="w-full rounded-full border border-primary-purple px-6 py-5 text-center text-primary-purple md:flex-1"
          >
            Cancel
          </button>
      </div>
    </div>
  );
}
