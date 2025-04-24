import React, { useState } from "react";
import logo from "../assets/new_logo2.png";
import { SignedIn, SignedOut, UserButton, useAuth, useClerk } from "@clerk/clerk-react";
import { NavLink } from 'react-router-dom';
import { AlignJustify } from "lucide-react";
import Searchbox from "./Searchbox";

const Navbar = () => {
    const { openSignIn } = useClerk();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getToken } = useAuth()


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className="flex justify-center "> {/* Adjusted top margin */}
            <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#0f1111] flex justify-between p-1 px-6 items-center fixed w-[100%] sm:py-1 shadow-md shadow-zinc-800 border border-zinc-800 z-50"> {/* Adjusted width and padding */}
                <div className="flex flex-row items-center gap-4 sm:gap-20"> {/* Adjusted gap for small screens */}
                    <div className="w-12 invert">
                        <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
                    </div>

                    <div className="hidden lg:flex"> {/* Hidden on small screens */}
                        <ul className="flex gap-4 sm:gap-20 font-semibold font-overpass"> {/* Adjusted gap for small screens */}
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-violet-500" : "text-[#CCCCCC] hover:text-white"}><li>HOME</li></NavLink>
                            <NavLink to='/write-blog' className={({ isActive }) => isActive ? "text-violet-500" : "text-[#CCCCCC] hover:text-white"}><li>POST</li></NavLink>
                            <NavLink to='/user-blog' className={({ isActive }) => isActive ? "text-violet-500" : "text-[#CCCCCC] hover:text-white"}><li>MY BLOG</li></NavLink>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4 lg:gap-10"> {/* Adjusted gap for small screens */}

                    <Searchbox />
                    <div className="flex items-center gap-4">
                        <button onClick={toggleMenu} className="text-white focus:outline-none lg:hidden">
                            <AlignJustify />
                        </button>
                        <SignedOut>
                            <button
                                onClick={(e) => openSignIn()}
                                className="bg-violet-900 hover:bg-violet-800 text-white text-sm font-semibold py-2 px-4 rounded-xl"
                            >
                                Login
                            </button>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>

            </div>

            {isMenuOpen && (
                <div className="bg-[#141616] w-full fixed top-14 left-0 z-40 lg:hidden"> {/* Adjusted for small screens */}
                    <ul className="flex flex-col items-center gap-3 py-4">
                        <NavLink to='/' onClick={toggleMenu}><li>HOME</li></NavLink>
                        <div className='w-[60%] border-[1px] border-[#2d2f30] mx-auto'>
                        </div>
                        <NavLink to='/write-blog' onClick={toggleMenu}><li>POST</li></NavLink>
                        <div className='w-[60%] border-[1px] border-[#2d2f30] mx-auto'>
                        </div>
                        <NavLink to='/user-blog' onClick={toggleMenu}><li>MY BLOG</li></NavLink>
                        <div className='w-[60%] border-[1px] border-[#2d2f30] mx-auto'>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
