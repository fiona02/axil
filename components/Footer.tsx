'use client'
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { titleVariants } from "@/utils/animation";

export default function Footer() {
  return (
    <div className="bg-tertiary"> 
      <div className="container lg:grid lg:grid-cols-2 py-14"> 
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3"> 
         
          <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          > 
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Team
            </h2>

            <div className="flex flex-col">
              <Link href="#" className="py-1 hover:underline"> About</Link>
              <Link href="#" className="py-1 hover:underline"> Gallery </Link>
              <Link href="#" className="py-1 hover:underline"> Projects </Link>
              <Link href="#" className="py-1 hover:underline"> Contact </Link>
            </div>
          </motion.div>
          {/* Cột 2 */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          > 
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Services
            </h2>

            <div className="flex flex-col">
              <Link href="#" className="py-1 hover:underline"> Sport events </Link>
              
            </div>
          </motion.div>
          {/* Cột 3 */}
          <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          > 
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Social 
            </h2>

            <div className="flex flex-col">
              <Link href="#" className="py-1 hover:underline"> Instagram </Link>
              <Link href="#" className="py-1 hover:underline"> Facebook </Link>

            </div>
          </motion.div>
        </div>

        <div>
          <p className="pb-4 text-xl font-semibold"> 
            Stay updated
          </p>
          <div className="relative lg:max-w-sm">
            <Input type='name' id='first name' placeholder="Email address" />
            <Button className="absolute bg-black text-white rounded-full h-[8.5] px-3 text-sm top-1 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary">
              Subscribe
            </Button>
          </div>
          <p className="pt-4 text-gray-500"> 
            By providing your email, you agreed to receive email from us.
          </p>
        </div>
      </div>
      {/* Copyright */}
      <div className="py-10 bg-black dark:bg-primary">
        <div className="container text-white text-center lg:justify-between lg:flex">
          <div className="pb-4 lg:pb-0">
            <p>&copy; 2024 Home Axil. All rights reserved.</p>
          </div>
          <div>
            <Link href="" className="p-4 hover:underline"> Privacy </Link>
            <Link href="" className="p-4 hover:underline"> Term </Link>
          </div>
        </div>
      </div>
    </div>
  )
}