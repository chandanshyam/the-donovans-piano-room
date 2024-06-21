"use client";
import AuthContentWrapper from "@/components/auth/AuthContentWrapper";
import AllForgotPasswordSteps from "./components/AllForgotPasswordSteps";

export default function LogIn() {
  return (
    <>
      <AuthContentWrapper>
        <AllForgotPasswordSteps />
      </AuthContentWrapper>
    </>
  );
}

