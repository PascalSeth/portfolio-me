'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"


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
  <Sheet>
    <SheetTrigger asChild>
      <button className='text-2xl'>
        ☰
      </button>
    </SheetTrigger>
    <SheetContent side="right" className="w-[300px] sm:w-[400px]  z-9999">
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 p-6 border-b border-border">
          <Image src="https://i.pinimg.com/736x/dc/60/ad/dc60ad257a10f6c5944187fe5763c764.jpg" alt="Logo" width={40} height={30} />
          <span className="font-semibold text-lg">Pascal Seth</span>
        </div>
        <nav className="flex-1 py-6">
          <div className="space-y-2">
            <Link href="#hero" className='flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-accent transition-all duration-200 hover:translate-x-1'>
              <span className="text-primary">🏠</span>
              Home
            </Link>
            <Link href="#projects" className='flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-accent transition-all duration-200 hover:translate-x-1'>
              <span className="text-primary">💼</span>
              Projects
            </Link>
            <Link href="#about" className='flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-accent transition-all duration-200 hover:translate-x-1'>
              <span className="text-primary">👤</span>
              About
            </Link>
            <Link href="#contact" className='flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-accent transition-all duration-200 hover:translate-x-1'>
              <span className="text-primary">📧</span>
              Contact
            </Link>
            <Link href="#services" className='flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-accent transition-all duration-200 hover:translate-x-1'>
              <span className="text-primary">⚡</span>
              Services
            </Link>
          </div>
        </nav>
      </div>
    </SheetContent>
  </Sheet>
</div>
</div>
    </div>
  )
}

export default Navbar