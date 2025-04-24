import React, { useState } from 'react';
import { useUser, useAuth } from '@clerk/clerk-react';
import Footer from '../components/Footer';
import Spinner from "../components/Spinner";
import ListUserBlogs from "../components/listUserBlogs";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Coverdev from '../components/Coverdev';
import EditModal from '../components/EditModal';
import { toast, Flip } from 'react-toastify';

const fetchUserData = async (clerkId, token) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/${clerkId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
};

const UserBlog = () => {
  const { user, isLoaded: isUserLoaded } = useUser();
  const { getToken } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);
  const queryClient = useQueryClient();

  const { data: userData, isLoading} = useQuery({
    queryKey: ["users", user?.id],
    queryFn: async () => {
      const token = await getToken();
      return fetchUserData(user?.id, token);
    },
    enabled: !!user?.id,
  });

  const updateUserMutation = useMutation({
    mutationFn: async (updatedData) => {
      const token = await getToken();
      return await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${user?.id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['users', user?.id]);
      toast.success('Profile updated successfully', {
        autoClose: 2000,
        hideProgressBar: true,
        theme: "dark",
        transition: Flip,
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update profile', {
        autoClose: 2000,
        hideProgressBar: true,
        theme: "dark",
        transition: Flip,
      });
    }
  });

  const handleUpdateProfile = (formData) => {
    updateUserMutation.mutate(formData);
  };

  if (!isUserLoaded || isLoading) {
    return (
      <div>
        <div className='flex justify-center items-center h-screen'>
          <Spinner />
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-gray-400 font-overpass">Log in or Create an Account</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      <div className='pt-16 mx-auto flex flex-col items-center justify-center w-11/12 sm:w-3/4'>
        <div className='text-4xl font-semibold p-6 text-gray-200 font-bebas'>
          {userData?.blogName || "Untitled Blog"}
        </div>
        <Coverdev />
        <div className='font-overpass px-3 w-full mt-14  text-gray-300 justify-between xl:justify-normal flex flex-row items-center gap-7'>
          {userData?.username||""}
          <button 
            onClick={() => setShowEditModal(true)}
            className='bg-gray-800/70 hover:bg-gray-700/70 text-gray-200 text-sm font-normal py-[3px] px-[12px] pt-[5px] rounded-lg transition-all duration-300'
          >
            Edit Profile
          </button>
        </div>
      </div>
      
      {showEditModal && (
        <EditModal 
          modalContext={setShowEditModal}
          userData={userData}
          updateConfirm={handleUpdateProfile}
        />
      )}

      <div className="font-playfair flex justify-center mt-5 text-xl font-semibold text-gray-200 mb-6">
        Your Blog Posts
      </div>
      <div className='w-[60%] border-[1px] border-[#2d2f30] mx-auto'></div>
      <ListUserBlogs />
      <Footer />
    </div>
  );
};

export default UserBlog;
