import React from 'react'

export default function WhoWeServeContent() {
  return (
    <div className='flex flex-row h-full'>
        <div className='flex flex-1 flex-col h-full justify-center items-center'>
            <div className='w-[275px]'>
                <h2 className='text-primary-brown text-5xl font-semibold w-96'>Music for everybody</h2>
                <p className='text-2xl text-primary-gray mt-4'>Our program offers a well-rounded approach to musical growth, from learning to read music, to help preparing for college. We offer a range of programs to help children of any age and skill level continue to learn.</p>
            </div>
        </div>
        <div className='flex-1 flex items-center justify-start'></div>
    </div>
  )
}
