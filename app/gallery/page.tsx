import React from 'react'

const page = () => {
  return (
    <div className='container py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/bedroom.jpg" alt=""></img>
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery2.jpg" alt=""></img>
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery.jpg" alt=""></img>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/swiper1.jpg" alt=""></img>
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery11.jpg" alt=""></img>
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/living.jpg" alt=""></img>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery14.jpg" alt=""></img>
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery15.jpg" alt=""></img>
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery12.jpg" alt=""></img>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery7.jpg" alt=""></img>
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery11.jpg" alt=""></img>
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/image/gallery3.jpg" alt=""></img>
        </div>
      </div>

    </div>
  )
}

export default page
