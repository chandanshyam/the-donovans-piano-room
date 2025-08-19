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
      src: "/memberships/Current Membership/Vector.svg",
      width: 140,
      height: 120,
      className: "left-6 top-20 scale-[0.7]"
    },
    {
      src: "/memberships/Current Membership/Vector (1).svg", 
      width: 120,
      height: 80,
      className: "-right-8 -top-2 -translate-x-1/2 scale-[0.2]"
    },
    {
      src: "/memberships/Current Membership/Vector (2).svg",
      width: 200, 
      height: 200,
      className: "-right-10 -top-8 scale-[0.75]"
    },
    {
      src: "/memberships/Current Membership/Vector (3).svg",
      width: 120,
      height: 120, 
      className: "-left-8 -top-3 scale-[0.8]"
    },
    {
      src: "/memberships/Current Membership/Ellipse 214.svg",
      width: 20,
      height: 20,
      className: "left-[45%] top-[35%] scale-[0.5]"
    },
    {
      src: "/memberships/Current Membership/Ellipse 215.svg",
      width: 30,
      height: 30,
      className: "left-[20%] top-2 scale-[0.6]"
    },
    {
      src: "/memberships/Current Membership/Ellipse 217.svg",
      width: 25,
      height: 25,
      className: "left-1/2 top-0 scale-[0.3]"
    },
    {
      src: "/memberships/Current Membership/Ellipse 218.svg",
      width: 60,
      height: 60,
      className: "left-[35%] -top-1 scale-[0.7]"
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
        headerColor="bg-primary-green"
        headerTextColor="text-white"
        priceBackgroundColor="bg-[#F5F9F4]"
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
