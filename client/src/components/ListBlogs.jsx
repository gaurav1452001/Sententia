import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import left from "../assets/left-page.png";
import right from "../assets/right-page.png";
import BlogCard from "./BlogCard";

const ListBlogs = () => {
  const { isSearched, searchFilter, setSearchFilter, blogs } =useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
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
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default ListBlogs;
