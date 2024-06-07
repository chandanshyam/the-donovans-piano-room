import InputForm from '@/components/auth/form-input'
import PasswordInput from '@/components/auth/password-input'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function SignupForm() {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [confirmPassword, setConfirmPassword] = useState("")
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  return (
    <section className="">
        <Link href="/" className="text-primary-yellow text-xl font-bold flex relative"><Image src="/YellowBackIcon.svg" width={30} height={30} alt=""/><p className="mt-2">Home</p></Link>
        <h1 className="text-7xl font-bold leading-tight tracking-tight text-white">
        Sign Up
        </h1>
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
            error={"sdf"}
        />
        <PasswordInput 
            toggleShowPassword={()=>setShowPassword(prev => !prev)}
            onChange={(e: any) => setPassword(e.target.value)}
            showPassword={showPassword}
            name='password'
        />
        <PasswordInput 
            toggleShowPassword={()=>setShowConfirmPassword(prev => !prev)}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
            showPassword={showConfirmPassword}
            name='confirm password'
        />
        
        <button className='w-full text-center bg-primary-yellow py-3 rounded-3xl text-[12px] text-primary-purple font-semibold' type='submit'>Continue to verify account</button>
        </form>
    </section>
  )
}
