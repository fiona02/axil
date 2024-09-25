

import Image from 'next/image'
import React from 'react'

const projects = [
  {
    id: 1,
    name: 'asdkfjl; asd f;asklj asdf askdl;jf askdfl asdf',
    description: 'asdf asdj asdjklfh asjkldrhfawueji;l fnjsdak;fhaw juk;rew er',
    image: '/image/project2.jpg',
    link: '',
  },
  {
    id: 2,
    name: 'thằng này số 2',
    description: 'tại sao không có hình',
    image: '/image/project2.jpg',
    link: '',
  },
  {
    id: 3,
    name: 'asdkfjl; asd f;asklj asdf askdl;jf askdfl asdf',
    description: 'asdf asdj asdjklfh asjkldrhfawueji;l fnjsdak;fhaw juk;rew er',
    image: '/image/project4.png',
    link: '',
  },
]

const page = () => {
  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover" >
          <h1 className='container py-64 text-6xl font-semibold tracking-widest text-white' > Our projects </h1>
      </div>

      <div className='container grid lg:grid-cols-2 gap-8 py-8'>
        {
          projects.map((project) => (
            <div key={project.id} className='relative overflow-hidden rounded-xl group'> 
              <div>
                  <Image src={project.image} width={480} height={380} alt=""
                    className='w-full'
                  />
              </div>

              <div className='absolute bottom-0 right-0 bg-white/90  dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition 
              duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0'>
                <h1 className='text-2xl font-semibold'>{project.name}</h1>
                <p className='py-4'>{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>

  )
}

export default page

