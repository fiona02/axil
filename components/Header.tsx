'use client'
import React, { useState, useEffect } from 'react'

import ThemeToggles from './ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import NavMobile from './NavMobile'
import { usePathname } from 'next/navigation'

const Header = () => {
  
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(()=> {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll',scrollYPos)

    return () => window.removeEventListener('scroll', scrollYPos);
  })
  

  return (
    <header 
      className={`${
        header
        ? 'py-4 bg-tertiary shadow-lg dark:bg-accent'
        : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' &&  'bg-[#fff]' }`}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
            {/* Logo nè */}
            <Logo/>
          <div className='flex items-center gap-x-6'>
            {/* Navbar nè */}
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transtion-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />

            {/* Nút đổi sáng tối */}
            <ThemeToggles/>

            {/* Nav mobile */}
            <div className='xl:hidden'>
              <NavMobile/>
            </div>
            
          </div>
        </div>
      </div>
      
      

    </header>
  )
}

export default Header