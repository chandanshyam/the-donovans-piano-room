import MembershipIncludes from "./MembershipIncludes";
import MembershipSelctionLayout from "./MembershipSelctionLayout";

export default function SignupMembershipContent() {
  return (
    <div className="flex gap-7">
        <MembershipSelctionLayout />
        <MembershipIncludes />
    </div>
  )
}



