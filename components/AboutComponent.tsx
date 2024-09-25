'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"

const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <Image
            src="/image/aboutfront.png"
            width={900}
            height={500}
            alt='About'
            className="max-md:hidden"
          />
        </motion.div>
        <div className="items-center">
          <motion.h2 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            We are award winning company
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="px-12 tracking-wider uppercase text-gray-400 mt-3"
          >
            World award
          </motion.p>
          
          <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4"
          >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
          it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, a
          </motion.p>

          <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4"
          >
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, a
          </motion.p>
        </div>
      </div>

    </div>
  )
}

export default AboutComponent