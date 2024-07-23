"use client"
import Image from "next/image"
import Link from 'next/link';
import { books } from '@/utils/general'
import { useEffect, useState } from 'react'

export default function FrequentlyPurchasedTogether() {
    return (
        <div className='ml-[10vw] my-[10vh] z-50'>
            <div className='text-primary-brown text-4xl font-semibold'>
                Reviews
            </div>
        </div>
    )
}
