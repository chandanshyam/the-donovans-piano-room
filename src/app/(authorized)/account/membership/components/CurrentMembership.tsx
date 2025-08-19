import { useRouter } from "next/navigation";
import PlanCard from "./PlanCard";

export default function CurrentMembership() {
  const router = useRouter();

  // hardcoded for now
  const benefits = [
    "Voice lessons",
    "Ear training", 
    "Games",
    "Benefit 4",
  ];
  // hardcoded for now
  const moreBenefits = [
    "Flexibility: easily choose to continue or cancel based on your needs and satisfaction.",
    "Lower upfront cost: it ideal for budget-conscious individuals or those wanting to test the program before committing long-term.",
    "Reduced commitment: with this plan, you're not tied to a long-term commitment.",
  ];

  const backgroundAssets = [
    {
      src: "/memberships/upgrade/1-Month/Group 48096278.svg",
      className: "inset-0 object-cover"
    }
  ];

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6">
      <h1 className="font-montserrat text-2xl font-semibold text-primary-brown md:text-3xl">
        Current membership
      </h1>
      
      <PlanCard
        planName="1-Month"
        price="$29.99"
        period="per month"
        headerColor="bg-[#438342]"
        headerTextColor="text-white"
        isCurrent={true}
        benefits={benefits}
        moreBenefits={moreBenefits}
        backgroundAssets={backgroundAssets}
      />
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
