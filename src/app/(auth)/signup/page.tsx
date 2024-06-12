"use client";
import SignupContentWrapper from "@/components/auth/signup/SignupContentWrapper";
// import SignupForm from "./components/SignupForm";
import SignupMembershipContent from "./components/membership/SignupMembershipContent";
export default function SignUp() {

  return (
    <SignupContentWrapper>
      {/* <SignupForm/> */}
      <SignupMembershipContent />
    </SignupContentWrapper>
    
  );
}
