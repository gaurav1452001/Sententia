import React, { useContext, useRef } from 'react'
import logo from "../assets/logo_nobg.png";
const Search = () => {

  return (
    <div className='pt-20'>
      <div className='flex flex-col items-center gap-6'>
        <img 
          src={logo} 
          alt="Sententia Logo" 
          className="w-64 md:w-72 lg:w-80 invert" // Added responsive width and invert for white color
        />
        <p className='text-2xl font-semibold'>
          Draft the Writer Inside You
        </p>
      </div>
    </div>
  )
}

export default Search
