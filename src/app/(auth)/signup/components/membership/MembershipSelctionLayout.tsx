import { membershipChoiceAtom, membershipTypes } from "@/utils/stores";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

export default function MembershipSelctionLayout() {
    const [membershipChoice, setMembershipChoice] = useAtom(membershipChoiceAtom)
  return (
    <section style={membershipChoice ? {position: "absolute", left: "24vw"} : {}}>
        <Link href="/" className="text-primary-yellow text-xl font-bold flex relative w-[15%]"><Image src="/YellowBackIcon.svg" width={30} height={30} alt=""/><p className="mt-2">Account</p></Link>
        <h1 className="text-7xl font-bold leading-tight tracking-tight text-white">
        Sign Up
        </h1>
        <div className='mt-[20px] mb-[20px]'>
            <p className='text-white text-lg font-semibold'>Step of 4</p>
            <p className='text-primary-yellow text-2xl font-semibold'>Select your membership</p>
        </div>
        <form>
            <fieldset className="flex flex-col">
                <label className="flex gap-3 w-[25vw] py-5 px-2 bg-[#FEF8EE] rounded-2xl mb-6" onClick={() => setMembershipChoice(membershipTypes["24-hours"])}>
                    <input type="radio" className="w-6 h-6 accent-primary-purple bg-[#FEF8EE]" name="membership_option" value="1" required/>
                    <div className="w-full flex justify-between text-[12px] font-semibold 2xl:text-2xl">
                        <p className="text-primary-brown">24 hour membership</p>
                        <p className="text-">$1.99 now</p>
                    </div>
                </label>
                <label className="flex gap-3 w-[25vw] py-5 px-2 bg-[#FEF8EE] rounded-2xl mb-6" onClick={() => setMembershipChoice(membershipTypes["monthly-access"])}>
                    <input type="radio" className="w-6 h-6 accent-primary-purple bg-[#FEF8EE]" name="membership_option" value="2" required/>
                    <div className="w-full flex justify-between text-[12px] font-semibold 2xl:text-2xl">
                        <p className="text-primary-brown">Monthly membership</p>
                        <p className="text-">$29.99/month</p>
                    </div>
                </label>
                <label className="flex gap-3 w-[25vw] py-5 px-2 bg-[#FEF8EE] rounded-2xl mb-6" onClick={() => setMembershipChoice(membershipTypes["yearly-access"])}>
                    <input type="radio" className="w-6 h-6 accent-primary-purple bg-[#FEF8EE]" name="membership_option" value="2" required/>
                    <div className="w-full flex justify-between text-[12px] font-semibold 2xl:text-2xl">
                        <p className="text-primary-brown">Yearly membership</p>
                        <p className="text-">$239.88/year</p>
                    </div>
                </label>
                <label className="flex gap-3 w-[25vw] py-5 px-2 bg-[#FEF8EE] rounded-2xl mb-6" onClick={() => setMembershipChoice(membershipTypes["scholarship"])}>
                    <input type="radio" className="w-6 h-6 accent-primary-purple bg-[#FEF8EE]" name="membership_option" value="2" required/>
                    <div className="w-full flex justify-between text-[12px] font-semibold 2xl:text-2xl">
                        <p className="text-primary-brown">Scholarship</p>
                        <p className="text-">Free</p>
                    </div>
                </label>
            </fieldset>
            <button className="w-full border border-primary-yellow py-2 rounded-3xl text-[12px] 2xl:text-2xl font-semibold text-primary-yellow">Continue to payment method</button>
        </form>
        <p className='w-full text-center mt-[20px] text-lg 2xl:text-2xl text-white bg-primary-purple py-3 rounded-3xl text-[12px] mt-9 2xl:py-5 2xl:rounded-full'>Already have an account? <Link href="/login" className='text-primary-yellow underline'>Log in</Link></p>
    </section>
  )
}
