import React, { useEffect, useState } from "react";
import logo from "../assets/logo_nobg.png";
import { SignedIn, SignedOut, UserButton, useAuth, useClerk } from "@clerk/clerk-react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const { openSignIn } = useClerk();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getToken } = useAuth()

    useEffect(() => {
        getToken().then(token => console.log(token));
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className="flex justify-center mt-2 sm:mt-8"> {/* Adjusted top margin */}
            <div className="bg-black flex justify-between p-1 items-center fixed w-[90%] sm:w-[95%] rounded-xl shadow-md shadow-zinc-800 border border-zinc-800 z-50"> {/* Adjusted width and padding */}
                <div className="w-32 invert">
                    <NavLink to='/'><img src={logo} alt="logo" /></NavLink>

                </div>

                <div className="hidden sm:flex"> {/* Hidden on small screens */}
                    <ul className="flex gap-4 sm:gap-20 font-semibold"> {/* Adjusted gap for small screens */}
                        <NavLink to='/' className={({ isActive }) => isActive ? "text-white" : "text-[#CCCCCC] hover:text-white"}><li>HOME</li></NavLink>
                        <NavLink to='/write-blog' className={({ isActive }) => isActive ? "text-white" : "text-[#CCCCCC] hover:text-white"}><li>POST</li></NavLink>
                        <NavLink to='/user-blog' className={({ isActive }) => isActive ? "text-white" : "text-[#CCCCCC] hover:text-white"}><li>MY BLOG</li></NavLink>
                        <NavLink to='/stats' className={({ isActive }) => isActive ? "text-white" : "text-[#CCCCCC] hover:text-white"}><li>STATS</li></NavLink>
                    </ul>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={toggleMenu} className="text-white focus:outline-none sm:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <SignedOut>
                        <button
                            onClick={(e) => openSignIn()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Login
                        </button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>

            {isMenuOpen && (
                <div className="bg-black w-full fixed top-16 left-0 z-40 sm:hidden"> {/* Adjusted for small screens */}
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <NavLink to='/' onClick={toggleMenu}><li>HOME</li></NavLink>
                        <NavLink to='/write-blog' onClick={toggleMenu}><li>POST</li></NavLink>
                        <NavLink to='/user-blog' onClick={toggleMenu}><li>MY BLOG</li></NavLink>
                        <NavLink to='/stats' onClick={toggleMenu}><li>STATS</li></NavLink>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
