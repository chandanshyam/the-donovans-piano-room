import { testPassword } from "@/utils/general";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PasswordCases({password, testCasesCB, allCasesIsCorrect}: {password: string, testCasesCB?: any, allCasesIsCorrect?: boolean}) {
    const renderCorrect = () => (<Image src="/auth/CorrectPasswordCase.svg" width={13} height={13} alt=""/>)
    const renderWrong = () => (<Image src="/auth/WrongPasswordCase.svg" width={13} height={13} alt=""/>)
    const [hasLowerCase, setHasLowerCase] = useState(false)
    const [hasUpperCase, setHasUpperCase] = useState(false)
    const [hasNumber, setHasNumber] = useState(false)
    const [hasSymbol, setHasSymbol] = useState(false)
    
    useEffect(()=>{
        const passwordCases = testPassword(password)
        setHasLowerCase(passwordCases.lowerCase)
        setHasUpperCase(passwordCases.upperCase)
        setHasNumber(passwordCases.numberCase)
        setHasSymbol(passwordCases.symbolCase)
        if(testCasesCB) { 
            testCasesCB(!!(
                passwordCases.correctLength && passwordCases.lowerCase &&
                passwordCases.upperCase && passwordCases.numberCase &&
                passwordCases.symbolCase
            ))
            
        }
    }, [password])

    return (
        <div style={(allCasesIsCorrect || !password) ? {display: "none"} : {}}>
            <div className="flex gap-4">
                {password.length >= 12 ? renderCorrect() : renderWrong()}
                <p className="text-white text-[12px]">Must be at least 12 characters long</p>
            </div>
            <div className="flex gap-4">
                {hasLowerCase ? renderCorrect() : renderWrong()}
                <p className="text-white text-[12px]">Must use at least 1 lowercase letter</p>
            </div>
            <div className="flex gap-4">
                {hasUpperCase ? renderCorrect() : renderWrong()}
                <p className="text-white text-[12px]">Must use at least 1 uppercase letter</p>
            </div>
            <div className="flex gap-4">
                {hasNumber ? renderCorrect() : renderWrong()}
                <p className="text-white text-[12px]">Must use at least  1 number</p>
            </div>
            <div className="flex gap-4">
                {hasSymbol ? renderCorrect() : renderWrong()}
                <p className="text-white text-[12px]">May use symbols like ! ” ? $ % ^ &</p>
            </div>
        </div>
    )
}
