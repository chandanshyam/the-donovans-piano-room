import Button4 from "@/components/atoms/Button4";
import Image from "next/image";
export default function ListedItemCard() {
  return (
<div className="flex h-[30vh] w-[58%] flex rounded-xl bg-[#ffffff] p-[2vh] relative">
        <div className="relative w-[30%]  h-full">
        <Image src="/bookstore/books/book-2.svg" layout="fill"  alt="" />
        </div>
        <div className="relative w-[70%]  h-full flex flex-col justify-between">
              <div className="relative w-full  h-[30%]">
        <h3 className=" font-montserrat text-5xl 3xl:text-6xl 4xl:text-7xl font-semibold text-primary-brown my-[.5%]">The Donovan Piano Room Book II</h3>
        </div>
        <div className="relative w-full flex justify-between items-center h-[30%]">
        <div className="relative flex items-center  w-[50%] h-[40%] mr-[20%]">
  <h3>Remove</h3>
  <div className="relative w-8 h-8">
    <Image src="/delete.svg" layout="fixed" width={32} height={32} alt="Delete" />
  </div>
  <div className="relative w-8 h-8 ml-12">
    <h4 className="text-[#6F219E] font-bold text-2xl">1X</h4>
  </div>
  <div className="relative w-8 h-8 ml-2">
    <Image src="/add.svg" layout="fixed" width={32} height={32} alt="Plus" />
  </div>
</div>


            <div className="flex items-center w-[30%] rounded-xl justify-end h-full bg-[#edd6fe] p-3">
  <div className="h-full flex flex-col items-end rounded-xl justify-center">
  <p className="font-roboto text-2xl font-bold leading-6 text-left mb-1">
Price</p>
    <h4 className="font-montserrat text-4xl">$25.00</h4>
  </div>
</div>
        </div>


        <div className="relative w-full h-[30%] flex justify-between">
  <div className="relative w-[60%] flex align-center mr-[2vh]">
    <input 
      type="text"  
      placeholder="Coupon code" 
      className="w-full bg-[#fef8ee] border border-black text-gray-900 placeholder-gray-800 placeholder-font-mono placeholder-large p-2 rounded-xl"
      />
  </div>
  < div className="relative w-[40%] flex align-center mt-[1vh] mb-[1vh]">
   
      <Button4 text="Apply Coupon" />
  
  </div>
</div>

</div>
</div>  
);
}