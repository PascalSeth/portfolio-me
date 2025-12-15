'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex sticky bg-white top-0 right-0 left-0 w-full p-2 z-999'>
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
  <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
    ☰
  </button>
</div>
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className='md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg z-50 overflow-hidden'
    >
      <div className='flex flex-col py-4'>
        <Link href="#hero" className='px-6 py-3 hover:bg-accent transition-colors' onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="#projects" className='px-6 py-3 hover:bg-accent transition-colors' onClick={() => setIsOpen(false)}>Projects</Link>
        <Link href="#about" className='px-6 py-3 hover:bg-accent transition-colors' onClick={() => setIsOpen(false)}>About</Link>
        <Link href="#contact" className='px-6 py-3 hover:bg-accent transition-colors' onClick={() => setIsOpen(false)}>Contact</Link>
        <Link href="#services" className='px-6 py-3 hover:bg-accent transition-colors' onClick={() => setIsOpen(false)}>Services</Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
</div>
    </div>
  )
}

export default Navbar