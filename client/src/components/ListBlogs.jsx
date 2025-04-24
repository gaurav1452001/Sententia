import React from "react";
import BlogCard from "./BlogCard";
import { NavLink, useSearchParams } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Spinner from "./Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SortButtons from "./SortButtons";
import SearchUser from "./SearchUser";
import SearchResults from "./SearchResults";

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 12, ...searchParamsObj }
  });
  return res.data;
};

const ListBlogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['posts', searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (error) return <div className="mt-20 px-7 xl:px-14 text-center py-10">Something went wrong!</div>;
  if (isLoading) return <div className="mt-20 px-7 xl:px-14 flex justify-center py-10"><Spinner /></div>;

  const allPosts = data?.pages?.flatMap(page => page.posts) || [];
  const isSearching = searchParams.toString().length > 0;
  
  return (
    <>
      <div className="mt-20 px-7 xl:px-14 min-h-screen">
        <SearchResults />
        <SearchUser />
        <div className='w-[99%] border-[1px] border-[#363637] mx-auto'>
        </div>
        <SortButtons />
        
        {allPosts.length === 0 && isSearching ? (
          <div className="py-16 text-center">
            <p className="text-gray-400 text-lg mb-2">No blog posts found</p>
            <p className="text-gray-500 text-sm">Try adjusting your search criteria</p>
            <button 
              onClick={() => setSearchParams({})}
              className="mt-6 px-4 py-2 text-sm bg-violet-800 text-white rounded-md hover:bg-violet-700 transition-colors"
            >
              Clear search
            </button>
          </div>
        ) : (
          <InfiniteScroll
            dataLength={allPosts.length}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Spinner />}
            scrollThreshold={0.8}
            endMessage={
              allPosts.length > 0 ? (
                <div className="py-9 text-center text-[#999999] text-sm mt-4">
                  You've reached the end
                </div>
              ) : null
            }
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 470: 2, 900: 3, 1250: 4 }}
              gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
            >
              <Masonry>
                {allPosts.map(post => (
                  <NavLink to={`/blogs/${post.slug}`} key={post._id}>
                    <BlogCard post={post} showDelete={false} />
                  </NavLink>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default ListBlogs;
