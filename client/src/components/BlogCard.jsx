import React from 'react'
import hero from '../assets/hero_logo.png'
const BlogCard = ({ Post }) => {
  return (
    <>
      <div className='w-1/2 border-2 mx-auto '>
      </div>
      <div className='hover:bg-[#9cb5f5] m-3 p-4 flex-col mx-auto sm:w-2/3 md:w-1/2'>
        <div className='flex flex-row mx-2'>
          <img src="https://dub.sh/Y0NxRWv" alt="" className='h-7 w-7 rounded-full object-cover object-center' />
          <p className='mx-4'>The India Uncut</p>
        </div>
        <div className='m-3 flex flex-row justify-between'>
          <div className='flex flex-col gap-4'>
            <div className='font-bold text-xl'>Why are the prices rising</div>
            <p>desc of the blog as a sample text</p>
            <p className='text-xs'>Gaurav Kumar</p>
          </div>
          <div>
            <img src="https://dub.sh/Y0NxRWv" alt="" className='w-44  rounded-lg' />
          </div>
        </div>
      </div>
      <div className='w-1/2 border-2 mx-auto'>
      </div>
    </>
  )
}

export default BlogCard
