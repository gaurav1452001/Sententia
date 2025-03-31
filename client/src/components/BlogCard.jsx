import React from 'react'
import { format } from "timeago.js";
const BlogCard = ({ post }) => {
  return (
    <>
      <div className='w-1/2 border-2 mx-auto'>
      </div>
      <div className='hover:bg-[#18181B] m-3 py-2 flex-col mx-auto sm:w-2/3 md:w-1/2 cursor-pointer'>
        <div className='flex flex-row mx-2 items-center'>
          <img src="https://placehold.co/600x400/white/black" alt="" className='h-7 w-7 rounded-full object-cover object-center' />
          <p className='mx-4 font-semibold'>{post.title}</p>
          <p className='text-xs text-[#999999]'>{format(post.createdAt)}</p>
        </div>
        <div className='m-3 flex flex-row justify-between'>
          <div className='flex flex-col justify-between py-2'>
            <div className='flex flex-col gap-8'>
              <div className='font-bold text-xl'>{post.title}</div>
              <p>{post.desc}</p>
            </div>
            <div className='flex flex-row gap-4'>
            <p className='text-xs'>{post.user?.username || 'Anonymous'}</p>
            </div>
          </div>
          <div>
            <img src={post.img} alt="Stock Image" className='h-48 w-64 object-cover rounded-lg' />
          </div>
        </div>
      </div>
      <div className='w-1/2 border-2 mx-auto'>
      </div>
    </>
  )
}

export default BlogCard
