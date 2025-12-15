'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex w-full p-2'>
<div className='max-w-6xl w-full flex justify-between items-center mx-auto'>
<div>
<Image src="https://i.pinimg.com/736x/dc/60/ad/dc60ad257a10f6c5944187fe5763c764.jpg" alt="Logo" width={60} height={40} />
</div>
<div className='hidden md:flex'>
    <Link href="/projects" className='mx-4'>Projects</Link>
    <Link href="/about" className='mx-4'>About</Link>
    <Link href="/contact" className='mx-4'>Contact</Link>
    <Link href="/services" className='mx-4'>Services</Link>
</div>
<div className='md:hidden'>
  <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
    ☰
  </button>
</div>
</div>
{isOpen && (
  <div className='md:hidden bg-white w-full flex flex-col items-center py-4'>
    <Link href="/projects" className='py-2' onClick={() => setIsOpen(false)}>Projects</Link>
    <Link href="/about" className='py-2' onClick={() => setIsOpen(false)}>About</Link>
    <Link href="/contact" className='py-2' onClick={() => setIsOpen(false)}>Contact</Link>
    <Link href="/services" className='py-2' onClick={() => setIsOpen(false)}>Services</Link>
  </div>
)}
    </div>
  )
}

export default Navbar