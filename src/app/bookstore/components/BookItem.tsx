import Button3 from '@/components/atoms/Button3'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bookInterface from './bookInterface'

export default function BookItem({book}: {book: bookInterface}) {
  return (
    <div className='w-[27.5%] min-h-[40vh] p-[1vw] bg-[#FEF8EE] rounded-2xl shadow-[#AC7A2280] shadow-[rgba(0,0,15,0.5)_2px_3px_4px_0px]'>
        <div className='flex justify-between w-full'>
        <div className='flex items-center gap-[2%]'>
            <div className='relative h-[2.5vh] w-[2.5vh]'>
            <Image src="/bookstore/dollar-icon.svg" fill alt=''/>
            </div>
            <p className='text-primary-brown font-semibold text-lg 3xl:text-[14px] 4xl:text-[16px]'>{book.price}</p>
        </div>
        <p className='text-lg 3xl:text-[14px] 4xl:text-[16px] font-medium px-2 py-1 rounded-md' style={{backgroundColor: book.color}}>{book.type}</p>
        </div>
        <div className='my-[5%] h-[0.2vw] bg-[#F8DCB0]'></div>
        <div className='relative h-[16vw] w-[21vw] mb-[5%]'>
        <Image src={book.imageSrc} fill alt=''/>
        </div>
        <p className='text-primary-brown text-2xl font-medium'>{book.title}</p>
        <p className='text-lg 3xl:text-[14px] 4xl:text-[16px] font-medium mb-[5%]' style={{color: book.titleColor}}>The Donovan's piano room</p>
        <p className='text-xl 2xl:text-2xl 3xl:text-3xl'>{book.description}</p>
        <Link href="" className='flex gap-[1%] flex items-center mb-[10%]'>
        <p className='underline text-xl 2xl:text-2xl 3xl:text-3xl text-primary-purple font-semibold'>Learn more</p>
        <div className='relative h-[0.8vw] w-[0.8vw] rotate-[-90deg]'>
            <Image src='/about/FAQs/DropdownIcon.svg' fill alt=''/>
        </div>
        </Link>
        <Button3 text='Add to cart' style={{ fontSize: "1vw"}}/>
    </div>
  )
}
