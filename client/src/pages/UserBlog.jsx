import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import BlogCard from "../components/BlogCard";
import { NavLink } from "react-router-dom";
import { useInfiniteQuery} from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Spinner from "../components/Spinner";



const fetchPosts = async (pageParam, userId) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/users/${userId}`, {
    params: { page: pageParam, limit: 2 }
  });
  console.log(res.data);
  return res.data;
};

const UserBlog = () => {
  const { user } = useUser();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts','users', user?.id],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, user.id),
    enabled: !!user?.id,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
  });

  console.log(data);

  if (isFetching) { <Spinner /> }

  if (error) { return "Something went wrong!" }
  const allPosts = data?.pages?.flatMap(page => page.posts) || [];

  // Example data
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

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Creative Writing",
      excerpt: "Discover the secrets of engaging your readers through powerful storytelling...",
      date: "March 10, 2024",
      readTime: "8 min read",
      views: 1234,
      likes: 89
    },
    {
      id: 2,
      title: "Understanding Modern Architecture",
      excerpt: "Exploring the principles behind contemporary architectural designs...",
      date: "March 8, 2024",
      readTime: "12 min read",
      views: 956,
      likes: 67
    },
    // Add more blog posts as needed
  ];

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
    <div>
      <Navbar />
      <div className='mt-16 mx-auto flex flex-col items-center justify-center w-11/12 sm:w-3/4'>
        <div className=' text-xl p-6'>
          {user.blogName || "Untitled Blog"}
        </div>
        <Cover />

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
      <InfiniteScroll
              dataLength={allPosts.length}
              next={fetchNextPage}
              hasMore={hasNextPage}
              loader={<Spinner />}
              endMessage={
                <div className="py-9 text-center text-[#999999] text-sm mt-4">
                   
                </div>
              }
            >
              {allPosts.map(post => (
                <NavLink to={`/blogs/${post.slug}`}>
                  <BlogCard key={post._id} post={post} />
                </NavLink>
              ))}
            </InfiniteScroll>
      <Footer />
    </div>
  );
};

export default UserBlog;
