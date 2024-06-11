import PasswordCases from '@/components/auth/PasswordCases'
import InputForm from '@/components/auth/form-input'
import PasswordInput from '@/components/auth/password-input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SignupForm() {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [allPasswordCasesCorrect, setAllPasswordCasesCorrect] = useState(false)

  return (
    <section>
        <Link href="/" className="text-primary-yellow text-xl font-bold flex relative w-[15%]"><Image src="/YellowBackIcon.svg" width={30} height={30} alt=""/><p className="mt-2">Home</p></Link>
        <h1 className="text-7xl font-bold leading-tight tracking-tight text-white">
        Sign Up
        </h1>
        <div className='mb-[10px] 2xl:mt-[20px] 2xl:mb-[20px]'>
            <p className='text-white text-lg font-semibold'>Step of 4</p>
            <p className='text-primary-yellow text-2xl font-semibold'>Create your account</p>
        </div>
        <form
        className="w-[22vw] space-y-4 md:space-y-6"
        >
        <InputForm
        field={{
            type: "text",
            name: "fullName",
            label: "Full name",
        }}
        onChange={(e: any) => setFullName(e.target.value)}
        text={fullName}
        error={''}
        />
        <InputForm
            field={{
                type: "email",
                name: "email",
                label: "Email",
            }}
            onChange={(e: any) => setEmail(e.target.value)}
            text={email}
            error={""}
        />
        <PasswordInput 
            onChange={(e: any) => setPassword(e.target.value)}
            name='password'
            label='Password'
            error={(allPasswordCasesCorrect && confirmPassword.length && password !== confirmPassword) ? "The password you entered does not match" : ""}
            inputValue={password}
        />
        <PasswordCases password={password} testCasesCB={setAllPasswordCasesCorrect} allCasesIsCorrect={allPasswordCasesCorrect}/>
        {(allPasswordCasesCorrect || !password) && 
        <PasswordInput
            onChange={(e: any) => setConfirmPassword(e.target.value)}
            name='confirm password'
            label='Confirm password'
            error={(allPasswordCasesCorrect && confirmPassword.length && password !== confirmPassword) ? "The password you entered does not match" : ""}
            inputValue={confirmPassword}
        />}
        <div> 
            <button className='w-full text-center bg-primary-yellow py-3 rounded-3xl text-[12px] text-primary-purple font-semibold 2xl:py-5 2xl:rounded-full' type='submit'>Continue to verify account</button>
        </div>
        <div className="flex items-center">
            <input required type="checkbox" value="" className="w-6 h-6 ring-yellow-600 bg-gray-100 border-yellow-600 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-yellow-600 dark:border-yellow-600"/>
            <label className="ms-2 text-l font-medium text-white mt-4 2xl:mt-6 2xl:text-xl">I agree to The Donovan&apos;s piano room <Link href="#" className='text-primary-yellow underline'>terms of use</Link> and <Link href="#" className='text-primary-yellow underline'>privacy policy</Link>.</label>
        </div>
        </form>
        <p className='w-full text-center mt-[10px] text-lg text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full'>Already have an account? <Link href="/login" className='text-primary-yellow underline'>Log in</Link></p>
    </section>
  )
}
