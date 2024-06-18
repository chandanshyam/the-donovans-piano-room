import SignupHeader from "../../SignupHeader";
import EmailVerificationForm from "./EmailVerificationForm";
import EmailVerificationSuccessForm from "./EmailVerificationSuccessForm";
import { useState } from "react";

export default function EmailVerificationContent() {

  const [isVerified, setIsVerified] = useState(false) // switch between the components 
  const setToIsVerified = () => { setIsVerified(true) }
  return (
    <section className="w-[24vw]">
      <SignupHeader  navName="Home" navLink="/" stepNum={2} stepName="Verify your account" />      
      {!isVerified ? <EmailVerificationForm setToIsVerified={setToIsVerified}/> : <EmailVerificationSuccessForm />}
    </section>
  )
};
