"use client";
import AuthContentWrapper from "@/components/auth/AuthContentWrapper";
import { Providers } from "@/app/providers";
import AllSignupSteps from "./components/AllSignupSteps";
import SignupPayment from "./components/SignupPayment";
export default function SignUp() {
  return (
    <>
      <Providers>

        <AuthContentWrapper>
          <SignupPayment/>
        </AuthContentWrapper>
      </Providers>
    </>
    
  );
}
