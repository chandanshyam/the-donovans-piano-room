"use client";

import { forgotPasswordStepAtom } from './forgotPasswordStepAtom';
import { useAtomValue } from 'jotai';
import ForgotPasswordForm from './ForgotPasswordForm';
import EmailSentConfirmation from './EmailSentConfirmation';

export default function AllForgotPasswordSteps() {
    const forgotPasswordStep = useAtomValue(forgotPasswordStepAtom);

    return (
        <>
            {forgotPasswordStep === 1 && <ForgotPasswordForm />}
            {forgotPasswordStep === 2 && <EmailSentConfirmation />}
        </>
    );
}
