import React from 'react'
import Card from '@/components/atoms/Card'
import LessonCard from './LessonCard';
import { lessons } from './Lesson';
import { NextPage } from 'next';

const cards: { cards : React.ReactNode} [] = [
    {
        cards: (
        <>
        <img className='rounded-2xl' height ="330px" width=" 180px" 
        src="/lessons/Videos/Thumbnails/Lesson1.jpg"/>
        <h4 className=' text-left text-xl font-roboto text-secondary-brown font-semibold'> Your First Lesson! Welcome!</h4>
        <div className='flex'>
            <h4 className=' text-wrap'>Your First Lesson is here! WOW!  
                Welcome to "The Donovan's Piano Room"! 
                Plus we will dive into understanding the keyboard!
            </h4>
            {/* Arrow button with layered SVGs */}
            <div className="mt-4">
            <div className="flex justify-end">
                <button className="relative w-8 h-8">
                {/* Purple circle background */}
                <img
                    src="/lessons/Videos/Purple Circle Button.svg"
                />
                {/* White chevron centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src="/lessons/Videos/fluent_chevron-up-16-filled.svg"
                    />
                </div>
                </button>
            </div>
            </div>
            </div>
            <hr className="mt-4 border-purple-300" />
            {/* Footer */}
            <div className="mt-4 flex justify-between text-xs text-gray-600">
            <span>42min</span>
            <span>5k</span>
            </div>
            

        </>


    )},
    {
        cards: (
        <>
        <img className='rounded-2xl' height ="330px" width=" 180px" 
        src="/lessons/Videos/Thumbnails/Lesson1.jpg"/>
        <h4 className=' text-left text-xl font-roboto text-secondary-brown font-semibold'> Your First Lesson! Welcome!</h4>
        <div className='flex'>
            <h4 className=' text-wrap'>Your First Lesson is here! WOW!  
                Welcome to "The Donovan's Piano Room"! 
                Plus we will dive into understanding the keyboard!
            </h4>
            <img src='/lessons/Videos/Purple Circle Button.svg'/>
        </div>

        </>


    )},

];
const VideosComponent: NextPage=() => {
    
    return (
        <><h2 className="text-4xl font-medium text-primary-brown mb-4">
            Videos
        </h2>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
        </>
    )
}

export default VideosComponent