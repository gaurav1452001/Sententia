import React from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='shadow px-7'>
      <div className='flex justify-between items-center'>
        <div className='w-40'>
            <img src={logo} alt="logo" />
        </div>
        <div>
            <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
