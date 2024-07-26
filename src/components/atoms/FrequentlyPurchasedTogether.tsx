import { books } from '@/utils/general'
import BookItem from "@/components/atoms/BookItem";

export default function FrequentlyPurchasedTogether() {
    const booksList = [books[1], books[2]]

    return (
        <div className='ml-[8vw] my-[10vh] z-50'>
            <div className='text-primary-brown text-4xl font-semibold'>
                Frequently purchased together
            </div>
            <div className='flex justify-start gap-[2vw] mt-[3vh]'>
                {booksList.map((book, i) => (
                     <div className='w-[25.5%]'>
                    <BookItem key={i} book={book}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
