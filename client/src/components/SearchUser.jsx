import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Spinner from './Spinner';
import Footer from './Footer';
import Navbar from './Navbar';
import no_user from "../assets/nouser.png";
import no_cover from "../assets/cover_placeholder.jpg";

const fetchUserData = async (clerkId, token) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/${clerkId}`);
    return res.data;
};

const SearchUser = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currAuthor = searchParams.get('author');

    const { data: userData, isLoading } = useQuery({
        queryKey: ["users", currAuthor],
        queryFn: async () => {
            return fetchUserData(currAuthor);
        },
        enabled: !!currAuthor,
    });

    if (isLoading) {
        return (
            <div>
                <Navbar />
                <div className='flex justify-center items-center h-screen'>
                    <Spinner />
                </div>
                <Footer />
            </div>
        );
    }
    return (
        <>
            {currAuthor ? (
                <div className='border border-gray-800 w-full min-h-[150px] sm:min-h-[200px] flex flex-col justify-center items-center relative rounded-lg dark:bg-gray-800 mb-32 mt-36'>
                    <div className=' left-3 absolute top-[-25%] text-3xl font-bold'>
                        {userData?.blogName || "Untitled Blog"}
                    </div>
                    <div className='w-full h-full min-h-[150px] sm:min-h-[200px] bg-[#161623]'>
                        <img
                            src={userData?.coverimg||no_cover}
                            alt="Cover Image"
                            className='w-full h-[150px] sm:h-[200px] object-cover rounded-lg'
                        />

                    </div>
                    <section className='absolute left-1 bottom-[-27%] sm:bottom-[-20%] rounded-full w-20 h-20 sm:w-24 sm:h-24 p-1 ring-2 ring-gray-300 dark:ring-gray-500 flex justify-center items-center z-10 bg-violet-950'>
                        {userData?.profileimg ?
                            (<img
                                src={userData?.profileimg}
                                alt="Profile Image"
                                className='w-full h-full object-cover rounded-full'
                            />
                            ) :
                            (<img src={no_user} alt="Avatar" />
                            )}


                    </section>
                    <div className='absolute  bottom-[-60%] text-white text-xl justify-center font-semibold'>
                        {userData?.username}'s Blog Posts
                    </div>
                </div>
            ) : (
                <div>

                </div>
            )}
        </>
    )
}

export default SearchUser