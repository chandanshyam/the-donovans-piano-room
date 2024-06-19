import { useState } from 'react'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'

export default function EmailVerificationForm({setToIsVerified}: {setToIsVerified: any}) {
    const [verificationCode, setVerificationCode] = useState(Array(6).fill(''))
    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newVerificationCode = [...verificationCode]
        newVerificationCode[index] = event.target.value
        setVerificationCode(newVerificationCode)
    }
    const handleVerify = (e: any) =>{
        e.preventDefault()
        setToIsVerified()
    }
    return (
        <section>
            <p className='mt-4 text-white text-[13px] 2xl:text-[16px] 3xl:text-[18px] mb-5'>Enter the verification 6 digit-code we sent to jacks@email.com</p>
            <div className='w-full flex py-4 gap-4 justify-center text-center bg-[#FEF8EE] py-3 rounded-xl text-[16px] text-black font-semibold 2xl:py-5 2xl:rounded-xl'>
                <TimerOutlinedIcon className=' text-3xl' />
                <p className='text-[13px] 2xl:text-[16px]'>This code expires in 10:00 minutes</p>
            </div>
            <form className="mt-8 w-full" onSubmit={handleVerify}>
                <p className='text-primary-yellow text-lg 3xl:text-2xl mb-3'>Enter the 6 digit code</p>
                <div className='flex align-center gap-2 w-full justify-between'>
                    {verificationCode.map((code, index) => (
                        <input
                            key={index}
                            maxLength={1}
                            type='text'
                            value={code}
                            onChange={(event) => handleChange(index, event)}
                            className='focus:bg-white text-center text-2xl 3xl:text-4xl rounded-lg bg-[#FEF8EE] outline-none focus:border-primary-brown border border-primary-brown border 2xl:w-20 4xl:w-24 4xl:h-28 w-16 p-5'
                            required
                        />
                    ))}
                </div>
                <button className='w-full mt-6 text-center bg-primary-yellow py-3 rounded-3xl text-[13px] 2xl:text-[16px] text-primary-purple font-semibold 2xl:py-5 2xl:rounded-full' type='submit'>Verify</button>
                
            </form>
            <button className='w-full mt-6 text-center text-primary-yellow py-3 rounded-3xl text-[13px] 2xl:text-[16px] border border-primary-yellow font-semibold 2xl:py-5 2xl:rounded-full'>Send a new code</button>
            </section>
    )
}
