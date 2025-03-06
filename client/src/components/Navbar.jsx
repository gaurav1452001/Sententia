import React from "react";
import logo from "../assets/logo_nobg.png";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import {NavLink} from 'react-router-dom' 
const Navbar = () => {
    const { openSignIn } = useClerk();
    const { user } = useUser();

    return (
        <div className="flex justify-center mt-6">
            <div className="bg-black flex justify-between p-1 items-center fixed w-[95%] rounded-lg shadow-md shadow-zinc-800 border border-zinc-800 ">
                <div className="w-32 invert">
                    <img src={logo} alt="logo" />
                </div>

                <div>
                    <ul className="flex gap-20">
                        <NavLink to='/'><li>HOME</li></NavLink>
                        <NavLink to='/write-blog'><li>POST</li></NavLink>
                        <NavLink to='/'><li>MY BLOG</li></NavLink>
                        <NavLink to='/'><li>STATS</li></NavLink>    
                    </ul>
                </div>



                {user ? (
                    <div className="flex items-center gap-4">
                        <p>{user.firstName}</p>
                        <UserButton />
                    </div>
                ) : (
                    <div>
                        <button
                            onClick={(e) => openSignIn()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Navbar;
