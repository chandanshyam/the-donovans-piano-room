"use client";
import SignupContentWrapper from "@/components/auth/signup/SignupContentWrapper";
import SignupForm from "./components/SignupForm";
import MembershipSelctionLayout from "./components/membership/MembershipSelctionLayout";
export default function SignUp() {

  return (
    <SignupContentWrapper>
      {/* <SignupForm/> */}
      <MembershipSelctionLayout/>
    </SignupContentWrapper>
    
  );
}
