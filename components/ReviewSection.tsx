'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"

const posts = [
  {
    id:1,
    title: 'Boost your conversation rate',
    href: '#',
    description: 'They know how to get the work done, we can forget media matters and focus on other things in the event',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: '5.0', href: '#'},
    author: {
      name: 'Tom',
      role: 'BTC',
      href: '#',
      imageUrl: '/image/profile1.jpg'
    }
  },
  {
    id:2,
    title: 'Great photography techniques',
    href: '#',
    description: 'Team can manage to have good photos in low light conditons',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: '5.0', href: '#'},
    author: {
      name: 'Khanh',
      role: 'BTC',
      href: '#',
      imageUrl: '/image/profile1.jpg'
    }
  },
  {
    id:3,
    title: 'Trusted media team',
    href: '#',
    description: 'No matter our races are in the city or mountains, the team always available',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: '5.0', href: '#'},
    author: {
      name: 'Victor',
      role: 'BTC',
      href: '#',
      imageUrl: '/image/profile1.jpg'
    }
  },
]

export default function ReviewSection() {
  return (
    <div className="pt-12"> 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        > 
          Customer&apos;s review 
        </motion.h2>
        <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-2 text-lg leading08 text-muted-foreground"
        >
          
        </motion.p>
      
        <motion.div 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 py-10 border-b border-gray-200 border-t gap-y-16 "
        >
        {
          posts.map((post) => (
            <article 
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime}>
                  <Image alt='' src="/image/star.svg" width={80} height={5} />
                </time>
                <a href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                >
                  {post.category.title}
                </a>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <Image 
                  src={post.author.imageUrl} 
                  alt='' 
                  width={100} height={100} 
                  className="h-10 w-10 rounded-full bg-gray-500" 
                  
                />
                <div className="text-sm leading-6">
                  <p className="text-semibold">
                    <a href={post.author.href} >
                      <span></span>
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))
        }
        </motion.div>
      </div>
    </div>
  )
}