import Link from "next/link";

export default function AuthOptionalNavigation(
    {href, navName, text}:
    {href: string, navName: string, text: string}) {
  return (
    <p className='w-full text-center mt-[10px] text-lg text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full 3xl:text-2xl 4xl:text-[16px] 3xl:py-8'>{text}<Link href={href} className='text-primary-yellow underline'>{navName}</Link></p>
  )
}
