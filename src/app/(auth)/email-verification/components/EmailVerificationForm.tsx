import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'

export default function EmailVerificationForm() {
    const [verificationCode, setVerificationCode] = useState(Array(6).fill(''))
    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newVerificationCode = [...verificationCode]
        newVerificationCode[index] = event.target.value
        setVerificationCode(newVerificationCode)
    }
    return (
        <section>
            <Link href="/" className="text-primary-yellow text-xl font-bold flex relative w-[15%]">
                <Image src="/YellowBackIcon.svg" width={30} height={30} alt="" />
                <p className="mt-2">Home</p></Link>
            <h1 className="text-7xl font-bold leading-tight tracking-tight text-white">
                Sign Up
            </h1>
            <div className='mb-[10px] 2xl:mt-[20px] 2xl:mb-[20px]'>
                <p className='text-white text-lg font-semibold'>Step 2 of 4</p>
                <p className='text-primary-yellow text-2xl font-semibold'>Verify your account</p>
                <p className='mt-4 text-white text-2xl'>Enter the verification 6 digit-code we sent to jacks@email.com</p>
            </div>
            <div className='w-full text-center bg-[#FEF8EE] py-3 rounded-xl text-[16px] text-black font-semibold 2xl:py-5 2xl:rounded-xl'>
                <span className='mr-4'><TimerOutlinedIcon className='text-4xl' /></span> This code expires in 10:00 minutes
            </div>
            <form className="mt-8 space-y-4 md:space-y-6">
                <p className='text-primary-yellow text-sm'>Enter the 6 digit code</p>
                <div className='flex align-center gap-11 w-full'>
                    {verificationCode.map((code, index) => (
                        <input
                            key={index}
                            pattern="[0-9]{1}"
                            type='text'
                            value={code}
                            onChange={(event) => handleChange(index, event)}
                            className='focus:bg-white text-center text-2xl rounded-lg bg-[#FEF8EE] w-20 p-5'
                            required
                        />
                    ))}
                </div>
                <div className='flex flex-col justify-center gap-8 mt-44'>
                    <button className='w-full text-center bg-primary-yellow py-3 rounded-3xl text-2xl text-primary-purple font-semibold 2xl:py-5 2xl:rounded-full' type='submit'>Verify</button>
                    <button className='w-full text-center text-primary-yellow py-3 rounded-3xl text-2xl border border-primary-yellow font-semibold 2xl:py-5 2xl:rounded-full' type='submit'>Send a new code</button>
                </div>
            </form>
            <p className='w-full text-center text-lg text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full'>Already have an account? <Link href="/login" className='text-primary-yellow underline'>Log in</Link></p>
        </section>
    )
}
