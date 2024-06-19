// "use client";

// import InputForm from "@/components/atoms/form-input";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { useSetAtom } from 'jotai';
// import { forgotPasswordStepAtom } from './forgotPasswordStepAtom';

// export default function ForgotPasswordForm() {
//     const [email, setEmail] = useState("");
//     const setForgotPasswordStep = useSetAtom(forgotPasswordStepAtom);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         setForgotPasswordStep(2);
//     };

//     return (
//         <div className="w-[24vw]">
//             <Link href="/login" className="text-primary-yellow-accent text-xl font-bold flex items-center w-full mb-5">
//                 <Image src="/YellowBackIcon.svg" width={30} height={30} alt="" />
//                 <p className="ml-2 font-roboto font-bold text-xl">Log in</p>
//             </Link>
//             <h1 className="text-8xl font-bold leading-tight tracking-tight text-white mb-5 font-montserrat">
//                 Forgot password
//             </h1>
//             <div className='mb-5 2xl:mt-5 2xl:mb-[20px]'>
//                 <p className='text-white text-xl'>Please enter your email address. You will receive a link to create a new password via email.</p>
//             </div>
//             <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//                 <InputForm
//                     field={{
//                         type: "email",
//                         name: "email",
//                         label: "Email",
//                     }}
//                     onChange={(e: any) => setEmail(e.target.value)}
//                     text={email}
//                     error={""}
//                 />
//                 <div>
//                     <button className='w-full text-center bg-primary-yellow-accent py-4 rounded-full text-primary-purple font-bold text-2xl' type='submit'>
//                         Send code to email
//                     </button>
//                 </div>
//             </form>
//             <p className='w-full text-center text-lg text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full'>
//                 Don&apos;t have an account? <Link href="/signup" className='text-primary-yellow-accent underline'>Sign up</Link>
//             </p>
//         </div>
//     );
// }


"use client";

import InputForm from "@/components/atoms/form-input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSetAtom } from 'jotai';
import { forgotPasswordStepAtom } from './forgotPasswordStepAtom';

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const setForgotPasswordStep = useSetAtom(forgotPasswordStepAtom);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setForgotPasswordStep(2);
    };

    return (
        <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[24vw] mx-auto">
            <Link href="/login" className="text-primary-yellow-accent text-xl font-bold flex items-center w-full mb-5">
                <Image src="/YellowBackIcon.svg" width={30} height={30} alt="" />
                <p className="ml-2 font-roboto font-bold text-xl">Log in</p>
            </Link>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-white mb-5 font-montserrat">
                Forgot password
            </h1>
            <div className='mb-5 2xl:mt-5 2xl:mb-[20px]'>
                <p className='text-white text-lg md:text-xl'>Please enter your email address. You will receive a link to create a new password via email.</p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                <div>
                    <button className='w-full text-center bg-primary-yellow-accent py-3 md:py-4 rounded-full text-primary-purple font-bold text-lg md:text-2xl' type='submit'>
                        Send code to email
                    </button>
                </div>
            </form>
            <p className='w-full text-center text-sm md:text-lg text-white bg-primary-purple py-2 md:py-3 rounded-2xl md:rounded-3xl text-[12px] mt-5 md:mt-9 2xl:py-5 2xl:rounded-full'>
                Don&apos;t have an account? <Link href="/signup" className='text-primary-yellow-accent underline'>Sign up</Link>
            </p>
        </div>
    );
}
