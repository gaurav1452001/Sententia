import React from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
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

  const stats = {
    subscribers: 1234,
    notifications: 5,
    views: 8547,
    stats: {
      words: 45678,
      sentences: 2345,
      posts: 23
    }
  };
  return (
    <div>
      <Navbar />
      <div className='mt-16 mx-auto flex flex-col items-center justify-center w-11/12 sm:w-3/4'>
        <div className='text-xl p-6'>
          {userData?.blogName || "Untitled Blog"}
        </div>
        
        <Coverdev />

        {/* Overview Section */}
        <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-gray-400 text-sm">Total Subscribers</h3>
            <p className="text-3xl font-bold text-white mt-2">{stats.subscribers}</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-gray-400 text-sm">Notifications</h3>
            <p className="text-3xl font-bold text-white mt-2">{stats.notifications}</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-gray-400 text-sm">30 Day Views</h3>
            <p className="text-3xl font-bold text-white mt-2">{stats.views}</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h3 className="text-gray-400 text-sm">Writing Stats</h3>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-gray-400">Words: <span className="text-white">{stats.stats.words}</span></p>
              <p className="text-sm text-gray-400">Sentences: <span className="text-white">{stats.stats.sentences}</span></p>
              <p className="text-sm text-gray-400">Posts: <span className="text-white">{stats.stats.posts}</span></p>
            </div>
          </div>
        </div>

      </div>

      <h2 className="w-[60%] mx-auto mt-10 text-2xl font-bold text-white mb-6">Your Blog Posts</h2>
      <div className='w-[60%] border-[1px] border-[#2d2f30] mx-auto'>
      </div>
      <ListUserBlogs />
      <Footer />
    </div>
  );
};

export default UserBlog;
