import React, { useContext,useRef } from 'react'
import search from '../assets/search.png';
import hero from '../assets/hero_nobg2.png';
import { AppContext } from '../context/AppContext';
const Search = () => {

  const {setSearchFilter, setIsSearched}=useContext(AppContext)

  const inputRef=useRef(null)
  
  const onSearch=()=>{
    setSearchFilter(inputRef.current.value)
    setIsSearched(true)
  }

  return (
    <div className='mx-auto'>
      <div className='flex flex-col items-center gap-3 my-24'>
        <p className='text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient'>SENTENTIA</p>
        <p className='text-2xl bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text'>Draft the Writer Inside You</p>
        <form className='bg-white flex justify-between p-1 rounded-lg w-[80vw] sm:w-[50vw]'>
          <input ref={inputRef} type="text" placeholder='Search Sententia for Authors, Blogs...' className='text-black placeholder: text-center sm:w-[80vw]  bg-transparent outline-none p-1 ' />
          <img onClick={onSearch} className='w-9 h-9 cursor-pointer' src={search} alt="" />
        </form>
        <div>
          {/* <img className='w-96' src={hero} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Search
