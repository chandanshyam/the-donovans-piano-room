import React from 'react';
import Image from 'next/image';
import bookInterface from '../../components/bookInterface';
import Button3 from '@/components/atoms/Button3';

export default function BooksPreview({ book }: { book: bookInterface }) {
    return (
        <div className="bg-[#ECD6FE] w-[80vw] flex rounded-2xl grid grid-cols-2">
            <div className="flex justify-end z-50">
                <div className="flex flex-col w-2/5 mr-40 mt-16 mb-20">
                    <div className="relative object-contain p-5">
                        <Image
                            src={book.coverImageSrc}
                            layout="responsive"
                            width={500}
                            height={400}
                            alt=""
                            className="shadow-lg rounded-2xl"
                        />
                    </div>
                    <div className="flex justify-between gap-5 mt-5">
                        <div className="relative object-contain rounded-2xl bg-secondary-purple p-4">
                            <Image src="/bookstore/blank.svg" width={200} height={200} alt="" />
                        </div>
                        <div className="relative object-contain rounded-2xl bg-secondary-purple p-4">
                            <Image src="/bookstore/blank.svg" width={200} height={200} alt="" />
                        </div>
                        <div className="relative object-contain rounded-2xl bg-secondary-purple p-4">
                            <Image src="/bookstore/blank.svg" width={200} height={200} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-evenly gap-5 px-32 mt-5">
                        <div className="bg-[#B457F5] text-white rounded-full w-2 h-2"></div>
                        <div className="bg-primary-purple text-white rounded-full w-12 h-2"></div>
                        <div className="bg-[#B457F5] text-white rounded-full w-2 h-2"></div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 z-50">
                <div className="grid grid-cols-2 text-primary-brown text-2xl 3xl:text-3xl 4xl:text-4xl font-semibold border-b-2 border-secondary-purple pb-4 mt-40">
                    <div className="text-3xl 3xl:text-4xl 4xl:text-5xl py-2">
                        {book.type} | {book.title}
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-white rounded-lg text-[#C89C2A] py-2 px-3">
                            ${book.price.split('.')[0]}
                        </div>
                    </div>
                </div>
                <div className="text-primary-brown text-7xl 3xl:text-8xl 4xl:text-8xl font-semibold py-2 mb-2">
                    The Donovan&apos;s Piano Room {book.title}
                </div>
                <div className="text-2xl 3xl:text-3xl 4xl:text-4xl my-3">
                    This exciting new learning method will teach you the fundamentals of music theory and piano in a fun, digestible way!
                </div>
                <Button3 text="Add to cart" style={{ marginTop: '12px', marginBottom: '12px', width: '60%' }} />
                <div className="text-2xl 3xl:text-3xl 4xl:text-4xl py-2 my-3">
                    Reviews (0)
                </div>
            </div>
        </div>
    );
}