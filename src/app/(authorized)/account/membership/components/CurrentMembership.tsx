import { useRouter } from "next/navigation";
import PlanCard from "./PlanCard";

interface CurrentMembershipProps {
  planName: string;
  price: string;
  period: string;
  benefits: string[];
  moreBenefits: string[];
  levelId: string; // e.g., lvl_free, lvl_day, lvl_month, lvl_year
  status: string; // e.g., active, inactive
}

export default function CurrentMembership({
  planName,
  price,
  period,
  benefits,
  moreBenefits,
  levelId,
  status,
}: CurrentMembershipProps) {
  const router = useRouter();

  const { headerColor, headerTextColor, backgroundAssets } = (() => {
    switch (levelId) {
      case "lvl_free":
        return {
          headerColor: "bg-[#e98427]",
          headerTextColor: "text-white",
          backgroundAssets: [
            { src: "/memberships/upgrade/Scholoarship-free/Group 48096278.svg", className: "inset-0 object-cover" },
          ],
        };
      case "lvl_day":
        return {
          headerColor: "bg-[#6F219E]",
          headerTextColor: "text-white",
          backgroundAssets: [
            { src: "/memberships/upgrade/Scholoarship/Group 48096278.svg", className: "inset-0 object-cover" },
          ],
        };
      case "lvl_year":
        return {
          headerColor: "bg-[#E9BB18]",
          headerTextColor: "text-white",
          backgroundAssets: [
            { src: "/memberships/upgrade/1-Year/Group 48095969.svg", className: "inset-0 object-cover" },
          ],
        };
      case "lvl_month":
      default:
        return {
          headerColor: "bg-[#438342]",
          headerTextColor: "text-white",
          backgroundAssets: [
            { src: "/memberships/upgrade/1-Month/Group 48096278.svg", className: "inset-0 object-cover" },
          ],
        };
    }
  })();

  const isActive = status === "active";

  return (
    <div className="flex flex-1 flex-col gap-6 rounded-xl bg-primary-skin p-6">
      <h1 className="font-montserrat text-2xl font-semibold text-primary-brown md:text-3xl">
        Current membership
      </h1>

      <PlanCard
        planName={planName}
        price={price}
        period={period}
        headerColor={headerColor}
        headerTextColor={headerTextColor}
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
          disabled={!isActive}
          className={`w-full rounded-full border px-6 py-5 text-center md:flex-1 ${
            isActive
              ? "border-primary-purple text-primary-purple"
              : "border-gray-300 text-gray-400 cursor-not-allowed"
          }`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
