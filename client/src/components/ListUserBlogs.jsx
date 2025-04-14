import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import BlogCard from "./BlogCard";
import {Link} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import DeleteModal from './DeleteModal';

const fetchPosts = async (userId) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/users/${userId}`);
    return res.data;
};

const ListUserBlogs = () => {
    const { user } = useUser();
    const [showModal, setShowModal] = useState(false);
    const {
        data: postsData,
    } = useQuery({
        queryKey: ['posts', 'users', user?.id],
        queryFn: () => fetchPosts(user?.id),
        enabled: !!user?.id,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 30,
    });

    const posts = postsData?.posts || [];
    return (
        <div className='mt-5 px-4 sm:px-8 md:px-7 lg:px-24 xl:px-40'>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 100: 1, 350: 2, 730: 3, 900: 3 }}
                gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
            >
                <Masonry>
                    {posts.map(post => (
                        <Link key={post._id} to={`/blogs/${post.slug}`}>
                            <BlogCard post={post} showDelete={true} modelContext={setShowModal}  />
                        </Link>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            {showModal&&<DeleteModal modelContext={setShowModal}/>}
        </div>
    )
}

export default ListUserBlogs