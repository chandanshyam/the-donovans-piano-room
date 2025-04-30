import Image from 'next/image';
import Link from 'next/link';
import { Lesson } from './Lesson';
//import { ChevronRightIcon } from '@heroicons/react/solid';

interface Props {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: Props) {
  return (
    <div className="bg-white border border-purple-200 rounded-xl shadow-sm overflow-hidden flex flex-col w-[350px] h-[380px]  ">
      {/* Thumbnail */}
      <div className="relative">
        <Image
          className='justify-self-center rounded-xl mt-4'
          src={lesson.thumbnailUrl}
          alt = {lesson.title}
          height ='180' width='318' 

        />
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-secondary-brown">{lesson.title}</h2>
        </div>
        <div className='flex'>
          <h4 className="mt-2 text-gray-900 text-lg text-wrap">{lesson.description}</h4>
        {/* Arrow button & divider */}
          <div className="mt-4 jusyify-end">
            <div className=" justify-right">
                {/* Arrow button with layered SVGs */}
              <div className="mt-4">
              <div className=" justify-right">
              <div className="relative w-10 h-10 ">
                <Link href={`lessons/${lesson.id}`} passHref>
                  
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
                  </Link>
                  </div>
                  </div>
              </div>
            </div>
        </div>
        </div>
        <hr className="mt-4 border-purple-300" />
        {/* Footer */}
        <div className="mt-4 flex justify-between text-m text-gray-600">
          <span>{lesson.duration}</span>
          <span>{lesson.meta}</span>
        </div>
      </div>
    </div>
  );
}