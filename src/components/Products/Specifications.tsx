import React from 'react'

export default function Specifications() {
  return (
    <div className='p-6 w-full space-y-2'>
      <span className='flex w-full items-center space-x-2'>
        <h1 className='font-bold text-lg'>
          Product name :
        </h1>
        <h2 className='text-[#5D5F5F]'>lorem</h2>
      </span>

      <span className='flex flex-col w-full'>
        <h1 className='font-bold text-lg'>
         Key Features :
        </h1>
        <p className='text-[#5D5F5F] w-3/4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Numquam totam minus eos ullam cupiditate dicta
          perspiciatis? Impedit quasi debitis sit enim repellat dolorum! Corporis doloribus minima,
          quos id ipsa sed?
        </p>
      </span>
    </div>
  )
}
