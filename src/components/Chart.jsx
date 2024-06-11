import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Mermaid from '../components/Mermaid';

function Chart({nums, numsUpdate}) {
  
  const form = useForm();
  const { register, handleSubmit } = form;

  
  const onSubmitNums = (data) => {
    let numsCopy = [...nums];
    numsCopy = [data.inA, data.inB];

    numsUpdate(numsCopy);
  }

  const chart = `
    graph LR;
      Component_A--->Component_B;
  `;

  return (
    <div className='h-fit py-20 w-full flex flex-col justify-center items-center bg-gray-100 gap-5'>
      <h1 className='text-4xl font-bold'>Make Your Chart Here!</h1>

      <div className='flex flex-col rounded-xl border-2 border-black p-10 px-20 justify-center items-center gap-16'>
        
        <Mermaid chart={chart}/>
        
        
        {/* Take number of each node */}
        <div>

          <form action="" onSubmit={handleSubmit(onSubmitNums)} 
            className='flex flex-col justify-center items-center gap-2'>
              
            <div className='flex flex-row justify-center items-center gap-5'>
              <div className='flex flex-col'>
                <label htmlFor="inA" className='font-mono'>Quantity A:</label>
                <input className='w-24 font-mono pl-2' min={0} placeholder='Enter A' type="number" id='inA' {...register("inA", {valueAsNumber: true})} />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="inB" className='font-mono'>Quantity B:</label>
                <input className='w-24 font-mono pl-2' min={0} placeholder='Enter B' type="number" id='inB' {...register("inB", {valueAsNumber: true})}/>
              </div>
            </div>

            <button className='bg-blue-700 text-white px-5 py-1.5 rounded-lg hover:bg-blue-400'>Select</button>

          </form>

        </div>
        
      
      </div>
    </div>
  )
}

export default Chart
