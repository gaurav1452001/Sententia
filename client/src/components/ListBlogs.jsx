import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import BlogCard from "./BlogCard";
import { NavLink } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`,{
    params:{page:pageParam}
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
    queryFn: ({pageParam=1})=>fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore?pages.length+1:undefined,
    
  })
  console.log(data);

  if (isFetching) { return 'Loading...'}
  
  if (error) { return "Something went wrong!"}
  
  console.log(data);
  const allPosts=data?.pages?.flatMap(page => page.posts)||[];
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
      <div>
        {allPosts.map(post => (
          // <NavLink to='/blogs/:slug'>
            <BlogCard key={post._id} post={post} />
          // </NavLink> 
        ))}
      </div>
    </>
  );
};

export default ListBlogs;
