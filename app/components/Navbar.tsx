'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { motion } from 'framer-motion'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function Navbar() {

  return (
    <div className='flex sticky bg-white overflow-x-hidden top-0 right-0 left-0 w-full p-2 z-999'>
<div className='max-w-6xl w-full flex justify-between items-center mx-auto relative'>
<div>
<Image src="https://i.pinimg.com/736x/dc/60/ad/dc60ad257a10f6c5944187fe5763c764.jpg" alt="Logo" width={60} height={40} />
</div>
<div className='hidden md:flex'>
    <Link href="#hero" className='mx-4'>Home</Link>
    <Link href="#projects" className='mx-4'>Projects</Link>
    <Link href="#about" className='mx-4'>About</Link>
    <Link href="#contact" className='mx-4'>Contact</Link>
    <Link href="#services" className='mx-4'>Services</Link>
</div>
<div className='md:hidden'>
  <Popover>
    <PopoverTrigger asChild>
      <button className='text-2xl'>
        ☰
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-screen" side="bottom" align="start">
      <motion.div variants={container} initial="hidden" animate="show" className='flex flex-col py-4'>
        <motion.a variants={item} href="#hero" className='px-6 py-3 hover:bg-accent transition-colors'>Home</motion.a>
        <motion.a variants={item} href="#projects" className='px-6 py-3 hover:bg-accent transition-colors'>Projects</motion.a>
        <motion.a variants={item} href="#about" className='px-6 py-3 hover:bg-accent transition-colors'>About</motion.a>
        <motion.a variants={item} href="#contact" className='px-6 py-3 hover:bg-accent transition-colors'>Contact</motion.a>
        <motion.a variants={item} href="#services" className='px-6 py-3 hover:bg-accent transition-colors'>Services</motion.a>
      </motion.div>
    </PopoverContent>
  </Popover>
</div>
</div>
    </div>
  )
}

export default Navbar