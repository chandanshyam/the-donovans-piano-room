"use client"
import Image from "next/image"
import Link from 'next/link';
import { books } from '@/utils/general'
import { useEffect, useState } from 'react'
import bookInterface from '../../components/bookInterface'
import BookItem from '../../components/BookItem'

export default function FrequentlyPurchasedTogether({currBook}: {currBook: bookInterface}) {
    const [booksList, setBooksList] = useState<bookInterface[]>([])

    useEffect(() => {
        let booksList: bookInterface[] = []
        for (let i in books) {
            const book = books[i]
            if ((book.type === currBook.type) && (book.title !== currBook.title)) {
                booksList.push(book)
            }
        }
        setBooksList(booksList)
    }, [currBook])

    return (
        <div className='ml-[10vw] mt-[10vh] z-50'>
            <div className='text-primary-brown text-4xl font-semibold'>
                Frequently purchased together
            </div>
            <div className='flex justify-start gap-[2vw] mt-[3vh]'>
                {booksList.map((book, i) => (
                    <BookItem key={i} book={book}/>
                ))}
            </div>
        </div>
    )
}
