import Image from 'next/image'
import React from 'react'

export default function QuestionAndAnswer({question, answer}: {question: string, answer: React.ReactNode}) {
  return (
    <details className="group mb-7 w-[75%]">
        <summary
            className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
            <span className="flex justify-between">
                <span className='text-primary-purple text-[18px]'>
                    {question}
                </span>
            </span>
            <Image className="w-5 h-5 text-gray-500 transition group-open:rotate-180" src="/about/FAQs/DropdownIcon.svg" width={18} height={18} alt=''/>
        </summary>

        <article className="px-2 pb-4">
            <div className='text-[15px]'>{answer}</div>
        </article>

    </details>
  )
}
