import React, { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import DeleteModal from './DeleteModal';
import { toast, Flip } from "react-toastify";
import NoBlogsPlaceholder from './NoBlogsPlaceholder';

const fetchPosts = async (userId) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/users/${userId}`);
    return res.data;
};


const ListUserBlogs = () => {
    const { user } = useUser();
    const { getToken } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [currPost, setCurrPost] = useState(null);

    const deleteMutation = useMutation({
        mutationFn: async () => {
            const token = await getToken();
            const postId = currPost._id;
            return await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['posts', 'users', user?.id]);
            toast.success('Blog Post deleted successfully', {
                autoClose: 2000,
                hideProgressBar: true,
                theme: "dark",
                transition: Flip,
            });
            setShowModal(false);
            setCurrPost(null);
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Failed to delete post', {
                autoClose: 2000,
                hideProgressBar: true,
                theme: "dark",
                transition: Flip,
            }

            );
            setShowModal(false);
        }
    });

    useEffect(() => {
        if (deleteConfirm && currPost) {
            deleteMutation.mutate();
            setDeleteConfirm(false);
        }
    }, [deleteConfirm]);

    const queryClient = useQueryClient();
    const {
        data: postsData,
    } = useQuery({
        queryKey: ['posts', 'users', user?.id],
        queryFn: () => fetchPosts(user?.id),
        enabled: !!user?.id,
        refetchOnWindowFocus: true,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 30,
    });

    useEffect(() => {
        // Invalidate and refetch when component mounts
        queryClient.invalidateQueries(['posts', 'users', user?.id]);
    }, []);

    const posts = postsData?.posts || [];
    return (
        (posts.length == 0) ? (
            <NoBlogsPlaceholder />
        )
            :
            (
                <div className='mt-5 px-4 sm:px-8 md:px-7 lg:px-24 xl:px-44'>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 100: 1, 350: 2, 730: 3, 900: 3 }}
                        gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
                    >
                        <Masonry>
                            {posts.map(post => (
                                <Link key={post._id} to={`/blogs/${post.slug}`}>
                                    <BlogCard post={post} showDelete={true} modalContext={setShowModal} currPost={setCurrPost} />
                                </Link>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                    {showModal && <DeleteModal modalContext={setShowModal} deleteConfirm={setDeleteConfirm} />}
                </div>)
    )
}

export default ListUserBlogs