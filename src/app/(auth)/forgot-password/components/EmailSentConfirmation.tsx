// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import stars from "../../../../../public/auth/stars.svg";
// import character from "../../../../../public/auth/smilingcharacter.svg";

// export default function ForgotPasswordForm() {
//     return (
//         <div className="relative w-[24vw]">
//             <div className="absolute top-[90px] left-[-250px] w-[150px] h-[150px] rotate-[-8deg]">
//             <Image src={character} alt="Character" layout="fill" objectFit="contain" />
//             <Image src={stars} alt="Stars" layout="fill" objectFit="contain" className="mt-[70%] ml-[30%]"/>
//             </div>
//             <div className="absolute top-[-60px] right-[-130px] w-[150px] h-[150px] rotate-[-110deg]">
//             <Image src={stars} alt="Stars" layout="fill" objectFit="contain" />
//             </div>
//             <h1 className="text-8xl font-extrabold leading-tight tracking-tight text-white mb-5 font-montserrat">
//                 Check your email
//             </h1>
//             <div className='mb-5 2xl:mt-5 2xl:mb-[20px]'>
//                 <p className='text-white text-xl'>You requested to reset your password and so a link has been sent to your email.</p>
//                 <p className='mt-9 w-full text-xl text-white'>
//                     Didn’t receive the link? <Link href="#" className='text-primary-yellow-accent underline'>Resend one</Link>
//                 </p>
//             </div>
//             <p className='w-full text-center bg-primary-yellow-accent py-4 rounded-full text-primary-purple font-bold text-2xl'>
//                 <Link href="/login">Back to log in</Link>
//             </p>
//             <p className='w-full text-center text-lg text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full'>
//                 Don&apos;t have an account? <Link href="/signup" className='text-primary-yellow-accent underline'>Sign up</Link>
//             </p>
//         </div>
//     );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import stars from "../../../../../public/auth/stars.svg";
import character from "../../../../../public/auth/smilingcharacter.svg";

export default function ForgotPasswordForm() {
    return (
        <div className="relative w-full max-w-[24vw] p-4 md:w-[24vw]">
            <div className="absolute top-[90px] left-[-150px] md:left-[-250px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] rotate-[-8deg]">
                <Image src={character} alt="Character" layout="fill" objectFit="contain" />
                <Image src={stars} alt="Stars" layout="fill" objectFit="contain" className="mt-[70%] ml-[30%]" />
            </div>
            <div className="absolute top-[-60px] right-[-80px] md:right-[-130px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] rotate-[-110deg]">
                <Image src={stars} alt="Stars" layout="fill" objectFit="contain" />
            </div>
            <h1 className="text-4xl md:text-8xl font-extrabold leading-tight tracking-tight text-white mb-5 font-montserrat">
                Check your email
            </h1>
            <div className="mb-5 2xl:mt-5 2xl:mb-[20px]">
                <p className="text-white text-lg md:text-xl">You requested to reset your password and so a link has been sent to your email.</p>
                <p className="mt-9 w-full text-lg md:text-xl text-white">
                    Didn’t receive the link? <Link href="#" className="text-primary-yellow-accent underline">Resend one</Link>
                </p>
            </div>
            <p className="w-full text-center bg-primary-yellow-accent py-4 rounded-full text-primary-purple font-bold text-lg md:text-2xl">
                <Link href="/login">Back to log in</Link>
            </p>
            <p className="w-full text-center text-lg text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full">
                Don&apos;t have an account? <Link href="/signup" className="text-primary-yellow-accent underline">Sign up</Link>
            </p>
        </div>
    );
}
