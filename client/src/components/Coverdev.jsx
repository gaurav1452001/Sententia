import React, { useEffect, useState } from 'react'
import UploadImg from "./UploadImg";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth, useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { toast, Flip } from "react-toastify";
import no_user from "../assets/nouser.png";

const fetchUserData = async (clerkId, token) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/${clerkId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};

const Coverdev = () => {

  const { user } = useUser();

  const [progress, setProgress] = useState(0);


  const mutation = useMutation({
    mutationFn: async (updateData) => {
      const token = await getToken();
      const clerkId = user?.id;
      return axios.patch(`${import.meta.env.VITE_API_URL}/users/${clerkId}`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Profile Updated", {
        autoClose: 2000,
        hideProgressBar: true,
        theme: "dark",
        transition: Flip,
    });
    }
  });
  const { getToken } = useAuth();

  const { data: userData, isLoading } = useQuery({
    queryKey: ["users", user?.id],
    queryFn: async () => {
      const token = await getToken();
      return fetchUserData(user?.id, token);
    },
    enabled: !!user?.id,
  });
  const [coverImage, setCoverImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);

  useEffect(() => {
    if (coverImage) {
      mutation.mutate({ coverimg: coverImage.url });
    }
  }, [coverImage]);

  useEffect(() => {
    if (avatarImage) {
      mutation.mutate({ profileimg: avatarImage.url });
    }
  }, [avatarImage]);

  return (
    <div className='w-full min-h-[200px] flex flex-col justify-center items-center relative rounded-lg'>
      <UploadImg type="image" setProgress={setProgress} setData={setCoverImage}>
        <div className='w-full h-full min-h-[200px] cursor-pointer bg-[#111111] border-2 border-gray-800 rounded-lg hover:bg-[#141414]  transition-all duration-200'>
          {userData?.coverimg ? (<img
            src={userData?.coverimg}
            alt="Cover Image"
            className='w-full h-[200px] object-cover rounded-lg'
          />) : (<p className='absolute text-center text-gray-500 font-semibold hover:text-gray-300 w-full bottom-[50%]    transition-all duration-300 text-lg'>Select a Cover Image</p>)}

        </div>
      </UploadImg>

      <UploadImg type="image" setProgress={setProgress} setData={setAvatarImage}>
        <section className='absolute bottom-[-27%] sm:bottom-[-20%] rounded-full w-20 h-20 sm:w-24 sm:h-24 p-1 flex justify-center items-center z-10 bg-gray-800 cursor-pointer hover:scale-110 transition-all duration-300'>
          {userData?.profileimg ? 
            (<img
              src={userData?.profileimg}
              alt="Profile Image"
              className='w-full h-full object-cover rounded-full'
            />) : 
            (<img src={no_user} alt="Avatar" />
          )}
        </section>
      </UploadImg>
    </div>
  )
}

export default Coverdev