import Link from 'next/link'
import { useSetAtom } from 'jotai'
import { singupStepAtom } from '@/utils/stores'

export default function EmailVerificationSuccessForm() {

    const setSingupStep = useSetAtom(singupStepAtom)
    return (
        <section>
            
            <p className='mt-4 text-white text-[14px] 2xl:text-[16px]'>Awesome! Your account has been successfully created and verified. Click below to choose your membership and start learning. </p>
            <div className='flex flex-col justify-center gap-8 mt-8'>
                <button className='w-full text-center bg-primary-yellow py-3 rounded-3xl text-[13px] 2xl:text-[16px] text-primary-purple font-semibold 2xl:py-5 2xl:rounded-full' onClick={()=>setSingupStep(prev => prev+1)}>Continue setting up membership</button>
            </div>
            <p className='w-full text-center text-lg text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full'>Already have an account? <Link href="/login" className='text-primary-yellow underline'>Log in</Link></p>
        </section>
    )
}
