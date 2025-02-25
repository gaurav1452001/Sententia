import React from 'react'
import hero from '../assets/hero_logo.png'
import {blogData} from '../assets/assets'

const BlogCard = ({ blog }) => { 
  return (
    <>
      <div className='w-1/2 border-2 mx-auto '>
      </div>
      <div className='hover:bg-[#9cb5f5] m-3 p-4 flex-col mx-auto sm:w-2/3 md:w-1/2'>
        <div className='flex flex-row mx-2'>
          <img src="https://dub.sh/Y0NxRWv" alt="" className='h-7 w-7 rounded-full object-cover object-center' />
          <p className='mx-4'>{blog.title}</p>
        </div>
        <div className='m-3 flex flex-row justify-between'>
          <div className='flex flex-col gap-4'>
            <div className='font-bold text-xl'>{blog.postTitle}</div>
            <p>{blog.description}</p>
            <p className='text-xs'>{blog.author}</p>
          </div>
          <div>
            <img src={blog.image} alt="Stock Image" className='w-44  rounded-lg' />
          </div>
        </div>
      </div>
      <div className='w-1/2 border-2 mx-auto'>
      </div>
    </>
  )
}

export default BlogCard
