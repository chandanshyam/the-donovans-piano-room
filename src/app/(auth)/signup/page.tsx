"use client";
import SignupContentWrapper from "@/components/auth/signup/SignupContentWrapper";
// import SignupForm from "./components/SignupForm";
import SignupMembershipContent from "./components/membership/SignupMembershipContent";
import { Providers } from "@/app/providers";
export default function SignUp() {

  return (
    <>
      <Providers>

        <SignupContentWrapper>
          {/* <SignupForm/> */}
          <SignupMembershipContent />
        </SignupContentWrapper>
      </Providers>
    </>
    
  );
}
