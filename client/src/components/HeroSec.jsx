import React from 'react'
import logo from "../assets/logo_nobg.png";
const HeroSec = () => {

  return (
    <div className='pt-20'>
      <div className='flex flex-col items-center gap-6'>
        <img 
          src={logo} 
          alt="Sententia Logo" 
          className="w-64 md:w-72 lg:w-80 invert"
        />
        <p className='text-2xl font-bold font-overpass bg-gradient-to-r from-violet-500 via-violet-400 to-violet-300 text-transparent bg-clip-text tracking-wide'>
          Draft the Writer Inside You
        </p>
      </div>
    </div>
  )
}

export default HeroSec
