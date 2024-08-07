'use client'
import { Textarea } from '@nextui-org/input';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Form({formData, formDataChange}) {
    const [submitted, setSubmitted] = useState(false);

    const form = useForm()
    const { register, handleSubmit } = form;

    const onSubmit = (data) => {
        
        let inputCopy = [...formData]
        inputCopy = [data.objective, data.capacity, data.scalability, data.continuity, data.guidelines];
        
        formDataChange(inputCopy);
        setSubmitted(true);
    }

  return (
    <div className='h-screen w-full bg-gray-100 flex justify-center items-center' id='Form'>
        <form onSubmit={handleSubmit(onSubmit)} 
            className='border-2 border-black w-fit h-fit py-12 px-16 max-md:px-8 max-sm:px-3 max-sm:py-8 rounded-lg font-mono flex flex-col max-sm:justify-center max-sm:items-center gap-5 bg-white'>
            {submitted && 
                <span className=' flex justify-center items-center text-4xl font-sans'> Form Submitted...</span>
            }
            {/* Q1 */}
            <span className={`${submitted ? 'hidden':'block'}`}>
                
                <Textarea 
                    isRequired
                    label={
                        <div className='font-mono'>
                            Explain your <span className=' text-green-600 font-bold'>Business Objective</span> briefly: 
                            <span className='text-red-500 font-sans'>*</span>
                        </div>
                    }
                    labelPlacement='inside'
                    maxRows={3}
                    placeholder='Type here...'
                    className='bg-gray-100 border-b-2 border-green-500 font-serif rounded-md max-sm:px-2'
                    id='objective'
                    {...register("objective")}
                />
            </span>

            {/* Q2 */}
            <span className={`${submitted ? 'hidden':'block'} max-sm:w-[95%]`}>
                <p>What is the <span className=' text-green-600 font-bold'>Capacity</span> of your business?<span className='text-red-500 font-sans'>*</span></p>
                <input 
                    type="text" 
                    required 
                    className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'
                    id='capacity'
                    {...register("capacity")}
                />
            </span>

            {/* Q3 */}
            <span className={`${submitted ? 'hidden':'block'} max-sm:w-[95%]`}>
                <p>What does your <span className=' text-green-600 font-bold'>Scalability</span> look like?<span className='text-red-500 font-sans'>*</span></p>
                <input 
                    type="text" 
                    required 
                    className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'
                    id='scalability'
                    {...register("scalability")}
                />
            </span>

            {/* Q4 */}
            <span className={`${submitted ? 'hidden':'block'} max-sm:w-[95%]`}>
                <p>Explain your <span className=' text-green-600 font-bold'>Continuity</span>, regional/global focus?<span className='text-red-500 font-sans'>*</span></p>
                <input type="text" required className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'
                id='continuity'
                {...register("continuity")}
                />
            </span>

            {/* Q5 */}
            <span className={`${submitted ? 'hidden':'block'} max-sm:w-[95%]`}>
                <p>What are the <span className=' text-green-600 font-bold'>Guidelines</span>?<span className='text-red-500 font-sans'>*</span></p>
                <input type="text" required className='w-full border-b-2 border-green-500 bg-gray-100 rounded-md font-serif'
                id='guidelines'
                {...register("guidelines")}
                />
            </span>
            
            <span className='w-full flex justify-center transition-all'>
                {submitted ? (
                <Link href={'#Chat'} className='bg-green-500 py-2 px-7 hover:underline hover:text-black text-white rounded-lg transition-all'>
                    Next Page
                </Link>
                )
                : (
                <button type='submit' className='mt-2 w-fit px-10 py-2 bg-green-400 rounded-lg hover:bg-green-500'>
                    Submit
                </button>
                )}
                
            </span>
        </form>
    </div>
  )
}

export default Form
