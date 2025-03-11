import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import Footer from '../components/Footer';

const UserBlog = () => {
  const { user } = useUser();

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
        <Footer/>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <div className='mt-16 mx-auto flex flex-col items-center justify-center w-11/12 sm:w-3/4'>
        <Cover/>
        
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

        {/* Blog Posts Section */}
        <div className="w-full mt-12 px-10">
          <h2 className="text-2xl font-bold text-white mb-6">Your Blog Posts</h2>
          <div className="space-y-6">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                    <p className="text-gray-400 mt-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <span className="text-sm text-gray-500">{post.views} views</span>
                      <span className="text-sm text-gray-500">{post.likes} likes</span>
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-400">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default UserBlog;
