import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className='h-20 w-screen fixed top-0 bg-green-500 flex flex-row justify-between items-center px-36'>
      <span>
        <Link href={'/'} className='font-serif text-3xl text-white'>Webology</Link>
      </span>
      
      <span className='flex flex-row gap-5 text-xl font-mono'>
        <Link href={'#Form'} className=' text-white hover:text-black hover:underline'>Form</Link>
        <span className='text-white'>|</span>
        <Link href={'#Contact'} className='text-white hover:text-black hover:underline'>Contact</Link>
      </span>

    </div>
  )
}

export default Navbar;
