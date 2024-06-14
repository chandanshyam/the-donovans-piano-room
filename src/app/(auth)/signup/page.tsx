"use client";
import SignupContentWrapper from "@/components/auth/signup/SignupContentWrapper";
import { Providers } from "@/app/providers";
import AllSignupSteps from "./components/AllSignupSteps";
export default function SignUp() {
  return (
    <>
      <Providers>

        <SignupContentWrapper>
          <AllSignupSteps/>
        </SignupContentWrapper>
      </Providers>
    </>
    
  );
}
