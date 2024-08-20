import React from "react";
import ItemsAddedCart from "./ItemsAddedCart";

export default function YourCart() {
  return (
    <div className="flex justify-center items-center bg-[#f5e8ff]">
      <div className="w-full  tablet:w-[90vw] laptop:w-[84.72vw] desktop:w-[80.6vw] bg-[#edd6fe] rounded-lg shadow-lg lg:flex lg:flex-col lg:gap-[2vh] lg:justify-center mt-[12vh] laptop:px-[5vw] tablet:px-[4vw] pt-20">    
        <h2 className="font-montserrat text-6xl 3xl:text-7xl 4xl:text-7xl font-semibold self-start text-primary-brown mb-[1%]">Your cart</h2>
        <ItemsAddedCart />
      </div>
    </div>
  );
}
















