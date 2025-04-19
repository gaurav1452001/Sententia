import React, { useContext, useState } from "react";
import BlogCard from "./BlogCard";
import { NavLink, useSearchParams } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Spinner from "./Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const fetchPosts = async (pageParam,searchParams) => {
  const searchParamsObj= Object.fromEntries([...searchParams]);
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam, limit: 12,...searchParamsObj }
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
  } = useInfiniteQuery({
    queryKey: ['posts',searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam,searchParams),

    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length + 1 : undefined,
  })

  if (isFetching) { <Spinner /> }

  if (error) { return "Something went wrong!" }

  const allPosts = data?.pages?.flatMap(page => page.posts) || [];
  return (
    <>
      <div className="mt-20 px-7 xl:px-14">
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

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 470: 2, 900: 3, 1250: 4 }}
            gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
          >
            <Masonry>
              {allPosts.map(post => (
                <NavLink to={`/blogs/${post.slug}`}>
                  <BlogCard key={post._id} post={post} showDelete={false}/>
                </NavLink>
              ))}
            </Masonry>
          </ResponsiveMasonry>


        </InfiniteScroll>
      </div>

    </>
  );
};

export default ListBlogs;
