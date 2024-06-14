"use client";
import SignupContentWrapper from "@/components/auth/signup/SignupContentWrapper";
import EmailVerificationForm from "./components/EmailVerificationForm";
import EmailVerificationSuccessForm from "./components/EmailVerificationSuccessForm";
import { useState } from "react";

export default function SignUp() {

  const [isVerificaded, setIsverificaded] = useState(false) // switch between the components 

  return (
    <SignupContentWrapper>
      {
        !isVerificaded ? <EmailVerificationForm /> : <EmailVerificationSuccessForm />
      }
    </SignupContentWrapper>
  );
};
