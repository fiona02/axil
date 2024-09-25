'use client'

import React from 'react'
import { motion } from 'framer-motion'

import useScrollProgress from '@/hooks/useScrollProgress'

const variants = {
  hidden: {opacity: 0},
  enter: {opacity: 1},
};

const Template = ( {children}: Readonly<{
  children: React.ReactNode;
}> ) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{type: 'liner', delay: 0.2, duration: 0.4}}
      >
        {children}
      </motion.main>
     
      <span
        style={{transform:`translateY(${completion-100}%)`}} 
        className='fixed z-50 bg-primary w-2 top-0 right-0 bottom-0 transition-all'
      >
      </span>
      {/* <div className='h-[2500px]'> </div> */}
    </>
  )
}

export default Template