import React from 'react'

function Homepage() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center gap-14'>
        <span className='text-3xl max-lg:text-2xl max-sm:text-xl font-bold max-md:w-[60%] w-[40%]  text-center flex flex-col gap-2'>
            <span>
                Get <span className='italic text-green-600'>Business</span> feedback  with our expert <span className='italic text-green-600'>AI</span>
            </span>
            
        </span>

        <span className='text-lg max-sm:text-sm font-sans font-semibold '>
                Made simple with 3 steps
            </span>

        {/* Steps */}
        <span className='flex flex-col gap-5'>
            {/* Step 1 */}
            <span className='flex flex-row gap-2 items-center'>
                <span className='bg-green-600 rounded-full py-1 max-sm:py-0.5 max-sm:px-2.5 px-3 font-mono text-white'>1</span>
                <span className='text-xl max-sm:text-sm italic font-sans'>Enter your business information</span>
            </span>

            {/* Step 2 */}
            <span className='flex flex-row gap-2 items-center'>
                <span className='bg-green-600 rounded-full py-1 max-sm:py-0.5 max-sm:px-2.5 px-3 font-mono text-white'>2</span>
                <span className='text-xl max-sm:text-sm italic font-sans'>Receive feedback from our AI&apos;s analysis</span>
            </span>

            {/* Step 3 */}
            <span className='flex flex-row gap-2 items-center'>
                <span className='bg-green-600 rounded-full py-1 max-sm:py-0.5 max-sm:px-2.5 px-3 font-mono text-white'>3</span>
                <span className='text-xl max-sm:text-sm italic font-sans'>Further discuss with our expert AI</span>
            </span>
        </span>
    </div>
  )
}

export default Homepage
