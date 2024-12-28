import React from 'react'
import search from '../assets/search.png';
import hero from '../assets/hero_logo-nobg.png';
const Search = () => {
  return (
    <div className='mx-auto'>
      <div className='flex flex-col items-center gap-3 my-2'>
        <p className='text-5xl md'>Sententia</p>
        <p className='text-2xl'>Draft the writer inside you</p>
        <form className='bg-white flex justify-between p-2 rounded-full w-[75vw]'>
          <input type="search" placeholder='Search Sententia for Authors, Blogs...' className='w-[75vw] bg-transparent outline-none p-2' />
          <img className='w-9 h-9 cursor-pointer' src={search} alt="" />
        </form>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Search
