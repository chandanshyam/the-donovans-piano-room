"use client";
import AuthContentWrapper from "@/components/auth/AuthContentWrapper";
import { Providers } from "@/app/providers";
import AllSignupSteps from "./components/AllSignupSteps";
export default function SignUp() {
  return (
    <>
      <Providers>

        <AuthContentWrapper>
          <AllSignupSteps/>
        </AuthContentWrapper>
      </Providers>
    </>
    
  );
}
