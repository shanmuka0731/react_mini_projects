import React from 'react'
import { ArrowRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-bold rounded-full h-14 w-14 flex justify-center items-center'>{props.index}</h2>
            <div>
                <p className='text-lg leading-normal mb-10 text-white'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color }} className='text-white font-medium px-8 py-3 rounded-full '>{props.tag}</button>
                    <button className='bg-blue-500 text-white font-medium px-3 py-2 rounded-full'><ArrowRight /></button>
                </div>
            </div>
    </div>
  )
}

export default RightCardContent