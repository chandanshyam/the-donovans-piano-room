import { books } from '@/utils/general'
import BookItem from "@/components/atoms/BookItem";

export default function FrequentlyPurchasedTogether() {
    const booksList = [books[1], books[2]]

    return (
        <div className='flex items-center justify-center my-[10vh] z-50'>
            <div className='w-[84.7%]'>
                <div className='text-primary-brown text-4xl font-semibold'>
                    Frequently purchased together
                </div>
                <div className='flex justify-start gap-[2vw] mt-[3vh]'>
                    {booksList.map((book, i) => (
                        <BookItem key={i} book={book}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
