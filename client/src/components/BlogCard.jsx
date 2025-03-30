import React from 'react'

const BlogCard = ({ post }) => { 
  return (
    <>
      <div className='w-1/2 border-2 mx-auto'>
      </div>
      <div className='hover:bg-[#18181B] m-3 p-4 flex-col mx-auto sm:w-2/3 md:w-1/2 cursor-pointer'>
        <div className='flex flex-row mx-2'>
          <img src="https://placehold.co/600x400/white/black" alt="" className='h-7 w-7 rounded-full object-cover object-center' />
          <p className='mx-4 font-semibold'>{post.title}</p>
        </div>
        <div className='m-3 flex flex-row justify-between'>
          <div className='flex flex-col gap-4'>
            <div className='font-bold text-xl'>{post.postTitle}</div>
            <p>{post.desc}</p>
            <p className='text-xs'>{post.user.username}</p>
          </div>
          <div>
            <img src={post.img} alt="Stock Image" className='w-60 object-cover rounded-lg' />
          </div>
        </div>
      </div>
      <div className='w-1/2 border-2 mx-auto'>
      </div>
    </>
  )
}

export default BlogCard
