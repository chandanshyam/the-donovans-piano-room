'use client'
import AuthContentWrapper from "@/components/auth/AuthContentWrapper";
import ResetPasswordContent from "./components/ResetPasswordContent";

export default function page() {
  return (
    <AuthContentWrapper>
      <ResetPasswordContent/>
    </AuthContentWrapper>
  )
}
