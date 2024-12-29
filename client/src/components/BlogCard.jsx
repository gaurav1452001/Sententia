import React from 'react'
import hero from '../assets/hero_logo.png'
const BlogCard = ({ Post }) => {
  return (
    // <div className=' flex justify-center items-center mx-auto'>
    //     <div className='w-[55vw] h-[20vh] rounded-3xl p-2  border-black bg-white shadow-[11px_11px_0px_0px_#1a202c] '>
    //       <img className='object-fill' src={hero} alt="" />
    //       <div>
    //         <h1>Title</h1>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</p>
    //       </div>
    //       hello
    //     </div>
    // </div>

    // {a second card approach}
    //     <div className=" mx-auto w-[60vw] h-[30vh] bg-white border rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    //   <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
    //     <img className="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image"/>
    //   </div>
    //   <div className="flex flex-wrap">
    //     <div className="p-4 flex flex-col h-full sm:p-7">
    //       <h3 className="text-lg font-bold text-gray-800 dark:text-white">
    //         Card title
    //       </h3>
    //       <p className="mt-1 text-gray-500 dark:text-neutral-400">
    //         Some quick example text to build on the card title and make up the bulk of the card's content.
    //       </p>
    //       <div className="mt-5 sm:mt-auto">
    //         <p className="text-xs text-gray-500 dark:text-neutral-500">
    //           Last updated 5 mins ago
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
    <div className='w-1/2 border-2 mx-auto'>
    </div>
      <div className='hover:bg-[#9cb5f5] m-3 p-4 flex-col mx-auto w-1/2'>
      
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
