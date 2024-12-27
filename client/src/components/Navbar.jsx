import React from 'react'
import logo from '../assets/logo.png';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

    const { openSignIn } = useClerk()
    const { user } = useUser()

    return (
        <div className='shadow px-7'>
            <div className='flex justify-between items-center'>
                <div className='w-40'>
                    <img src={logo} alt="logo" />
                </div>
                {
                    user ? <div>
                        <UserButton/>
                    </div>
                        : <div>
                            <button onClick={e => openSignIn()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                                Login
                            </button>
                        </div>
                }


            </div>
        </div>
    )
}

export default Navbar
