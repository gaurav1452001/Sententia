import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import left from "../assets/left-page.png";
import right from "../assets/right-page.png";
import BlogCard from "./BlogCard";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
};

const ListBlogs = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>fetchPosts(),
  });
  if (isPending) {
    return 'Loading...'
  }
  
  if (error) {
    return 'An error has occurred: ' + error.message
  }
  console.log(data);

  const { isSearched, searchFilter, setSearchFilter, blogs } = useContext(AppContext);
  // const [currentPage, setCurrentPage] = useState(1);
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
        {blogs.map((blog) => (
          <NavLink to='/blogs/:slug'>
            <BlogCard key={blog.id} blog={blog} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default ListBlogs;
