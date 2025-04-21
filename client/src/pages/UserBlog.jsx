import React from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spinner from "../components/Spinner";
import ListUserBlogs from "../components/listUserBlogs";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Coverdev from '../components/Coverdev';

const fetchUserData = async (clerkId, token) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/${clerkId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
};

const UserBlog = () => {
  const { user, isLoaded: isUserLoaded } = useUser();
  const { getToken } = useAuth();

  const { data: userData, isLoading} = useQuery({
    queryKey: ["users", user?.id],
    queryFn: async () => {
      const token = await getToken();
      return fetchUserData(user?.id, token);
    },
    enabled: !!user?.id,
  });

  // Add check for Clerk loading state
  if (!isUserLoaded||isLoading) {
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

  // Move this check after loading check
  if (!user) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-gray-400">Log in or Create an Account</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-950 to-gray-900'>
      <div className='pt-16 mx-auto flex flex-col items-center justify-center w-11/12 sm:w-3/4'>
        <div className='text-2xl font-bold p-6'>
          {userData?.blogName || "Untitled Blog"}
        </div>
        <Coverdev />
      </div>
      
      <div className="flex justify-center mt-16 text-2xl font-bold text-white mb-6">
        Your Blog Posts
      </div>
      <div className='w-[60%] border-[1px] border-[#2d2f30] mx-auto'>
      </div>
      <ListUserBlogs />
      <Footer />
    </div>
  );
};

export default UserBlog;
