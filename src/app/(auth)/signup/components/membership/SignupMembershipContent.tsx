import { Provider } from "jotai";
import MembershipIncludes from "./MembershipIncludes";
import MembershipSelctionLayout from "./MembershipSelctionLayout";

export default function SignupMembershipContent() {
  return (
    <Provider>
        <MembershipSelctionLayout />
        <MembershipIncludes />
    </Provider>
  )
}



