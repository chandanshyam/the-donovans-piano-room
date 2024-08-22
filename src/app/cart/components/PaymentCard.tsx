import Button4 from "@/components/atoms/Button4";
import Button3 from "@/components/atoms/Button3";

export default function PaymentCard() {
  return (
<div className="flex h-[39vh] w-[37%] flex-col  rounded-xl bg-[#ffffff] p-[2vh]">
            <div className="w-full">
            <h4 className="font-roboto text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold leading-[4vh] text-left">Order Summary</h4>
            </div>
        <div className="flex w-full justify-between mt-[10px]">
        <p className="text-2xl 3xl:text-3xl 4xl:text-4xl">Original Price</p>
        <p className="text-2xl 3xl:text-3xl 4xl:text-4xl">$25.00</p>
        </div>
        <div className="flex w-full justify-between mt-[10px] ">
        <p className="text-2xl 3xl:text-3xl 4xl:text-4xl">Shipping </p>
        <p className="text-2xl 3xl:text-3xl 4xl:text-4xl">$3.00</p>
        </div>
        <div className="h-1 w-full my-[3%] bg-[#D8BCFD]" ></div>
        <div className="flex w-full justify-between mt-[5px] ">
        <p className="text-2xl 3xl:text-3xl 4xl:text-4xl font-semibold">Total </p>
        <p className="text-2xl 3xl:text-3xl 4xl:text-4xl font-semibold">$28.00</p>
        </div>

        <div className=" h-full mt-[2vh] flex flex-col justify-between align-center items-center">
            <div className="h-[30%] w-full">
            <Button3 text="Check out with credit card" />
            </div>
            <div className="h-[30%] w-full">

  <Button4 text="Check out with Paypal"/>
  </div>
  <div className="h-[30%] w-full">

  <Button4 text="Check out with Venmo"/>
  </div>
</div>
        </div>
  )
}