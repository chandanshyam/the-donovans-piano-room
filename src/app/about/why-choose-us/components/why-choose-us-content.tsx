import Link from 'next/link'
import React from 'react'

export default function WhyChooseUsContent() {
  return (
    <div className='flex h-full'>
    <div className='flex-1 flex items-center justify-center'>
      <div style={{width: "275px"}}>
        <h2 className='text-primary-brown text-5xl font-semibold w-96'>Boost your musical abilities</h2>
        <p className='text-2xl text-primary-gray mt-4'>From learning to read music on the fly to mastering essential chords and scales, understanding rhythm basics, diving into music theory, preparing for college, and honing instrument skills, our program offers a well-rounded approach to musical growth.</p>
        <div className='flex gap-5 mt-6'>
          <Link className='text-white font-bold text-xl bg-primary-purple py-4 px-8 rounded-l-full rounded-r-full' href="#">Book a demo</Link>
          <Link className='text-primary-purple font-bold text-xl py-4 px-8 border-primary-purple border rounded-l-full rounded-r-full' href='#'>Sign up free</Link>
        </div>
      </div>
    </div>
    <div className='flex-1'></div>
  </div>
  )
}
