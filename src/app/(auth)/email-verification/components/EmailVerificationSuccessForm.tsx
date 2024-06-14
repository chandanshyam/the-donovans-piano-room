import Image from 'next/image'
import Link from 'next/link'

export default function EmailVerificationSuccessForm() {

    return (
        <section className='w-1/5'>
            <Link href="/" className="text-primary-yellow text-xl font-bold flex relative w-[15%]">
                <Image src="/YellowBackIcon.svg" width={30} height={30} alt="" />
                <p className="mt-2">Home</p></Link>
            <h1 className="text-7xl font-bold leading-tight tracking-tight text-white">
                Sign Up
            </h1>
            <div className='mb-[10px] 2xl:mt-[20px] 2xl:mb-[20px]'>
                <p className='text-white text-lg font-semibold'>Step 2 of 4</p>
                <p className='text-primary-yellow text-2xl font-semibold'>Verify your account</p>
                <p className='mt-4 text-white text-2xl'>Awesome! Your account has been successfully created and verified. Click below to choose your membership and start learning. </p>
            </div>
            <div className='flex flex-col justify-center gap-8 mt-8'>
                <button className='w-full text-center bg-primary-yellow py-3 rounded-3xl text-2xl text-primary-purple font-semibold 2xl:py-5 2xl:rounded-full' type='submit'>Continue setting up membership</button>
            </div>
            <p className='w-full text-center text-lg text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full'>Already have an account? <Link href="/login" className='text-primary-yellow underline'>Log in</Link></p>
        </section>
    )
}
