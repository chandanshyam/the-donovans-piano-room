import Image from 'next/image';
import { Lesson } from './Lesson';

interface Props {
  lesson: Lesson;
  onClick?: (lesson: Lesson) => void;
}

export default function LessonCard({ lesson, onClick }: Props) {
  return (
    <div className="group bg-secondary-purple border-2 border-purple-300 rounded-2xl shadow-sm overflow-hidden flex flex-col w-[350px] h-[380px] hover:bg-primary-purple hover:border-primary-purple cursor-pointer ">
      <div className={`bg-white min-h-[calc(100%-10px)] rounded-2xl hover:bg-secondary-purple flex flex-col p-8 `}>
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
        <div className='flex flex-row justify-between'>
          <div>
            <h4 className="mt-2 text-gray-900 text-lg text-wrap">{lesson.description}</h4>
          </div>
          {/* Arrow button & divider */}
          <div className="mt-4">
            <div>
            {/* Arrow button with layered SVGs */}
              <div className="mt-4">
                <div className="relative w-10 h-10 ">
                  <button onClick={() => onClick?.(lesson)}>
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
          </div>
        </div>
        <hr className="mt-4 border-purple-300 group-hover:border-primary-purple cursor-pointer" />
        {/* Footer */}
        <div className="mt-4 flex justify-between text-m text-gray-600">
          <span>{lesson.duration}</span>
          <span>{lesson.meta}</span>
        </div>
      </div>
    </div>
    </div>
  );
}