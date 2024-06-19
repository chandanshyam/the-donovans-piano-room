"use client";

import React from "react";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import AuthContentWrapper from "@/components/auth/AuthContentWrapper";
import AllForgotPasswordSteps from "./components/AllForgotPasswordSteps";

export default function LogIn() {
  return (
    <div>
      <AuthContentWrapper>
        <AllForgotPasswordSteps />
      </AuthContentWrapper>
    </div>
  );
}

