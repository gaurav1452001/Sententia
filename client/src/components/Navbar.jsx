import React from 'react'
import logo from '../assets/logo_nobg.png';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

    const { openSignIn } = useClerk()
    const { user } = useUser()

    return (
        <div className='shadow px-7 bg-[#ffe16e] h-12'>
            <div className='flex justify-between items-center'>
                <div className='w-32'>
                    <img src={logo} alt="logo" />
                </div>
                {
                    user ? <div className='flex items-center gap-4'>
                        <p>{user.firstName}</p>
                        <UserButton />
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
