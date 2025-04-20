import React from 'react';
import Footer from '../components/Footer';

const Stats = () => {
  // Example data - replace with actual API calls
  const userStats = {
    rank: 234,
    totalWords: 145678,
    totalSentences: 8901,
    totalPosts: 45,
    followers: 1234,
    following: 567,
    likes: 8901
  };

  const globalStats = {
    topWriters: [
      { rank: 1, name: "Sarah Johnson", words: 789432, posts: 156 },
      { rank: 2, name: "Michael Chen", words: 654321, posts: 123 },
      { rank: 3, name: "Emma Davis", words: 543210, posts: 98 },
      { rank: 4, name: "James Wilson", words: 432109, posts: 87 },
      { rank: 5, name: "Maria Garcia", words: 321098, posts: 76 }
    ],
    mostFollowed: [
      { rank: 1, name: "Alex Thompson", followers: 45678 },
      { rank: 2, name: "David Lee", followers: 34567 },
      { rank: 3, name: "Sophie Martin", followers: 23456 },
      { rank: 4, name: "Chris Anderson", followers: 12345 },
      { rank: 5, name: "Laura Taylor", followers: 9876 }
    ]
  };

  return (
    <div>
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-60 py-8 mt-16">
        {/* User Stats Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 px-4 sm:px-0">Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-gray-400 text-sm">Global Rank</h3>
              <p className="text-3xl font-bold text-white mt-2">#{userStats.rank}</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-gray-400 text-sm">Total Words Written</h3>
              <p className="text-3xl font-bold text-white mt-2">{userStats.totalWords}</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-gray-400 text-sm">Followers</h3>
              <p className="text-3xl font-bold text-white mt-2">{userStats.followers}</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 className="text-gray-400 text-sm">Total Likes</h3>
              <p className="text-3xl font-bold text-white mt-2">{userStats.likes}</p>
            </div>
          </div>
        </div>

        {/* Global Leaderboards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-0">
          {/* Top Writers */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4 sm:p-6">
            <h3 className="text-xl font-bold text-white mb-6">Global Top Writers</h3>
            <div className="space-y-4">
              {globalStats.topWriters.map((writer) => (
                <div key={writer.rank} className="flex items-center justify-between p-3 sm:p-4 bg-zinc-800 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-xl sm:text-2xl font-bold text-zinc-500">#{writer.rank}</span>
                    <div>
                      <p className="text-sm sm:text-base text-white font-medium">{writer.name}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{writer.words.toLocaleString()} words</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">{writer.posts} posts</p>
                </div>
              ))}
            </div>
          </div>

          {/* Most Followed Writers */}
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4 sm:p-6">
            <h3 className="text-xl font-bold text-white mb-6">Most Followed Writers</h3>
            <div className="space-y-4">
              {globalStats.mostFollowed.map((writer) => (
                <div key={writer.rank} className="flex items-center justify-between p-3 sm:p-4 bg-zinc-800 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-xl sm:text-2xl font-bold text-zinc-500">#{writer.rank}</span>
                    <div>
                      <p className="text-sm sm:text-base text-white font-medium">{writer.name}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{writer.followers.toLocaleString()} followers</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Detailed Stats */}
        <div className="mt-12 bg-zinc-900 rounded-xl border border-zinc-800 p-4 sm:p-6 mx-4 sm:mx-0">
          <h3 className="text-xl font-bold text-white mb-6">Your Detailed Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-zinc-800 rounded-lg">
              <h4 className="text-gray-400 text-sm">Writing Stats</h4>
              <div className="mt-2 space-y-2">
                <p className="text-xs sm:text-sm text-gray-400">Total Words: <span className="text-white">{userStats.totalWords}</span></p>
                <p className="text-xs sm:text-sm text-gray-400">Total Sentences: <span className="text-white">{userStats.totalSentences}</span></p>
                <p className="text-xs sm:text-sm text-gray-400">Total Posts: <span className="text-white">{userStats.totalPosts}</span></p>
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-zinc-800 rounded-lg">
              <h4 className="text-gray-400 text-sm">Social Stats</h4>
              <div className="mt-2 space-y-2">
                <p className="text-xs sm:text-sm text-gray-400">Followers: <span className="text-white">{userStats.followers}</span></p>
                <p className="text-xs sm:text-sm text-gray-400">Following: <span className="text-white">{userStats.following}</span></p>
                <p className="text-xs sm:text-sm text-gray-400">Total Likes: <span className="text-white">{userStats.likes}</span></p>
              </div>
            </div>
            <div className="p-3 sm:p-4 bg-zinc-800 rounded-lg">
              <h4 className="text-gray-400 text-sm">Rankings</h4>
              <div className="mt-2 space-y-2">
                <p className="text-xs sm:text-sm text-gray-400">Global Rank: <span className="text-white">#{userStats.rank}</span></p>
                <p className="text-xs sm:text-sm text-gray-400">Words Rank: <span className="text-white">#189</span></p>
                <p className="text-xs sm:text-sm text-gray-400">Followers Rank: <span className="text-white">#234</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Stats;
