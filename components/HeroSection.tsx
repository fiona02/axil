'use client'

import { Button } from "./ui/button";
import { TbArrowUpRight } from 'react-icons/tb'
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"

const HeroSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between">
    
      <div className="lg:w-1/2 xl:py-14 lg:py-7">
        <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="tracking-widest uppercase"
        >
          Offer for the best Interior
        </motion.p>

        <motion.h1 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="h1"
        >
          Make your home a <br/> piece of art
        </motion.h1>
        <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="pb-6 text-muted-foreground xl:pb-10 mr-4"
        >
          Imagine walking into your own personal gallery, where every room is a stunning work of art. That&apos;s what happens when you partner with our designer to transform your space. 
          We&apos;ll work closely with you to understand your unique style and preferences, then use our expertise to bring your vision to life.<br/> From statement lighting fixtures to
          bold color schemes, we&apos;ll incorporate textures, patterns, and materials that make a statement.</motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
        >
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Contact us <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
        
      </div>
      {/* Phần bên phải */}
      {/* <div className="w-1/2 flex items-center"> */}
      <div className="w-1/2 ">
        <Image src="/image/hall.png"
            width={800}
            height = {500}
            alt=""
            // className="absolute xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
            className="right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
            />
      </div>
    </div>
  );
}

export default HeroSection