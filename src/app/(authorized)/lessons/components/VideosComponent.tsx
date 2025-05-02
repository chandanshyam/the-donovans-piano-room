import React from 'react'
import Card from '@/components/atoms/Card'
import LessonCard from './LessonCard';
import { lessons } from './Lesson';
import { NextPage } from 'next';

export interface LessonDetailPage { id: string; title: string; thumbnailUrl: string; /* … */ }

interface Props {
  onSelectVideo: (video: LessonDetailPage) => void;
}
export default function VideosComponent({ onSelectVideo }: Props) {
    
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
