import Image from 'next/image'
import React from 'react'
import Email from '../../public/Images/email_icon.svg';

function Contact() {
  return (
    <div className='h-96 w-full bg-green-500 flex flex-col gap-8 items-center justify-center' id='Contact'>
      
      <div className='text-6xl max-sm:text-4xl font-serif'>
        Webology
      </div>


      <div className='text-xl flex flex-col justify-center items-center'>
        <span className=' font-bold font-mono max-sm:text-sm'>For any enquiries, you may contact us at:</span>
        <span className='flex flex-row justify-center items-center gap-2'> 
            <Image src={Email} width={37}/> 
            <span className='font-serif max-sm:text-sm'>example@webologyworld.com</span>
        </span>
      </div>

      <div className='text-sm font-bold'>
        Published 2024.
      </div>

    </div>
  )
}

export default Contact
