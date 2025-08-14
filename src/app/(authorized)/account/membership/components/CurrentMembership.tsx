import Image from "next/image";

export default function CurrentMembership() {
  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6">
      <h1 className="font-montserrat text-2xl font-semibold text-primary-brown md:text-3xl">
        Current membership
      </h1>

      {/* Card */}
      <div className="w-full rounded-2xl border border-[#FCF0D8] bg-[#FEF8EE] p-4 shadow-custom">
        {/* Header ribbon */}
        <div className="relative rounded-xl bg-primary-green px-5 py-3 text-white">
          <div className="text-lg font-semibold md:text-xl">1-Month</div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <span className="inline-flex items-center gap-2 rounded-md border border-[#D9D9D9] bg-white px-3 py-1 text-xs font-medium text-primary-brown md:text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6 2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8.828a2 2 0 00-.586-1.414l-3.828-3.828A2 2 0 0014.172 3H6zM14 4v3a1 1 0 001 1h3"/>
              </svg>
              Current plan
            </span>
          </div>
        </div>

        {/* Price block with patterned background assets from /public/memberships/Current Membership */}
        <div className="relative flex flex-col items-center overflow-hidden bg-primary-blue-accent py-10">
          {/* background ornaments */}
          <Image
            src="/memberships/Current Membership/Vector.svg"
            alt="pattern"
            width={140}
            height={120}
            className="pointer-events-none absolute left-6 top-4 opacity-60"
            priority
          />
          <Image
            src="/memberships/Current Membership/Vector (1).svg"
            alt="pattern"
            width={120}
            height={80}
            className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 opacity-60"
            priority
          />
          <Image
            src="/memberships/Current Membership/Vector (2).svg"
            alt="pattern"
            width={200}
            height={200}
            className="pointer-events-none absolute right-2 top-0 opacity-60"
            priority
          />
          <Image
            src="/memberships/Current Membership/Vector (3).svg"
            alt="pattern"
            width={120}
            height={120}
            className="pointer-events-none absolute left-24 bottom-2 opacity-60"
            priority
          />
          <Image
            src="/memberships/Current Membership/Ellipse 214.svg"
            alt="dot"
            width={20}
            height={20}
            className="pointer-events-none absolute left-[45%] top-[35%] opacity-60"
            priority
          />
          <div className="font-montserrat text-4xl font-semibold text-primary-brown md:text-5xl 3xl:text-6xl 4xl:text-7xl">
            $29.99
          </div>
          <div className="mt-1 text-sm text-primary-gray md:text-base">one day</div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#F4E6CF]"></div>

        {/* Benefits */}
        <div className="grid grid-cols-1 gap-y-3 gap-x-6 py-6 md:grid-cols-2">
          {[
            "Voice lessons",
            "Games",
            "Ear training",
            "Benefit 4",
          ].map((label) => (
            <div key={label} className="flex items-center gap-3 text-primary-brown">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-green text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-base md:text-lg 3xl:text-xl">{label}</span>
            </div>
          ))}
        </div>

        {/* See more benefits */}
        <div className="px-2 pb-2 pt-1">
          <button
            type="button"
            className="inline-flex select-none items-center gap-2 rounded-lg bg-[#ECE1FB] px-4 py-2 text-sm font-medium text-primary-purple hover:bg-[#E6DAFA]"
          >
            See more benefits
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Actions */}
        <div className="mt-6 flex w-full flex-col items-center gap-4 md:flex-row">
          <button
            type="button"
            className="w-full rounded-full bg-primary-purple px-6 py-3 text-center font-medium text-white md:flex-1"
          >
            Upgrade membership
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-primary-purple px-6 py-3 text-center font-medium text-primary-purple md:flex-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
