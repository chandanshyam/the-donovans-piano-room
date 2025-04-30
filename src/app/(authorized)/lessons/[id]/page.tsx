import Link from 'next/link'
import { lessons, Lesson } from '../components/Lesson'

interface Params {
  params: { id: string }
}

// 1) Tell Next which lessons exist
export async function generateStaticParams(): Promise<Params['params'][]> {
  return lessons.map((l) => ({ id: l.id }))
}

export default function LessonDetailPage({ params }: Params) {
  const idx = lessons.findIndex((l) => l.id === params.id)
  const lesson = lessons[idx]!
  const prev = lessons[idx - 1] || null
  const next = lessons[idx + 1] || null

  return (
    <div className="bg-purple-50 h-full">
      <div className=" mx-auto py-8 justify-items-center">
        {/* ─── Top nav ─────────────────────────────────────────────── */}
        <div className="flex items-center text-purple-700 text-3xl font-large mb-4">
          <Link href="/lessons" className="flex items-center font-semibold hover:underline">
            ← All videos
          </Link>

          <div className="flex-1 border-b border-purple-200 mx-4" />

          <div className="flex items-center space-x-4">
            {prev && (
              <Link href={`/lessons/${prev.id}`} className="hover:text-purple-800 font-semibold">
                ←
              </Link>
            )}
            <span className="font-semibold">{lesson.title}</span>
            {next && (
              <Link href={`/lessons/${next.id}`} className="hover:text-purple-800 font-semibold">
                →
              </Link>
            )}
          </div>

          <div className="flex-1 border-b border-purple-200 mx-4" />
        </div>

        {/* ─── YouTube Embed ──────────────────────────────────────── */}
        <div className="aspect-video w-1/2 h-1/2 rounded-xl overflow-hidden shadow">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen 
            referrerPolicy="strict-origin-when-cross-origin" 
            src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
            className= "h-full w-full"
            title={lesson.title}
          />
        </div>
      </div>
    </div>
  )
}

