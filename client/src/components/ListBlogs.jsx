import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import BlogCard from "./BlogCard";
import { NavLink } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Spinner from "./Spinner";

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam,limit:2 }
  });
  return res.data;
};

const ListBlogs = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
  })
  console.log(data);

  if (isFetching) { <Spinner /> }

  if (error) { return "Something went wrong!" }

  console.log(data);
  const allPosts = data?.pages?.flatMap(page => page.posts) || [];
  const { isSearched, searchFilter, setSearchFilter, blogs } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col items-center">
        {isSearched && (
          <div className="text-xl my-3">
            Search Results for "{searchFilter}"
          </div>
        )}
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
    </>
  );
};

export default ListBlogs;
