"use client"
import React, { useEffect } from 'react'
import Image from "next/image"
import { useAtom } from "jotai";
import { addedCartItemAtom } from "@/utils/stores";
import Link from 'next/link';

export default function AddedToCartPopup() {
    const [addedCartItem, setAddedCartItem] = useAtom(addedCartItemAtom)
    const closeSuccessPopup = () => setAddedCartItem(null)
  return addedCartItem && (
    <div className="fixed flex items-center justify-between h-[6vh] w-[85%] top-[13vh] left-[7.4vw] bg-primary-yellow-accent rounded-2xl z-[80]">
        <div className="flex items-center">
            <div className="relative h-[2.5vh] w-[2.5vh] ml-[1vw]">
                <Image src="/about/membership/Icon-include.svg" fill alt="" />
            </div>
            <h5 className="text-xl 3xl:text-2xl 4xl:text-3xl ml-[.5vw]">{`“${addedCartItem.title}” has been added to your cart`}</h5>
        </div>
        <div className="flex items-center">
            <Link href="/cart" className="text-xl 3xl:text-2xl 4xl:text-3xl ml-[.5vw] underline text-primary-purple font-semibold">View cart</Link>
            <div className="relative h-[5vh] w-[5vh] mr-[1vw]" onClick={closeSuccessPopup}>
                <Image src="/Close.svg" fill alt="" />
            </div>
        </div>
    </div>
  )
}
