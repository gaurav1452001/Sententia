import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import no_user from "../assets/nouser.png";
const Cover = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);

  const handleCoverDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCoverImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center relative'>
      <Dropzone onDrop={handleCoverDrop}>
        {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className='relative mt-7 w-11/12 sm:w-[3/4] h-36 sm:h-56 justify-center items-center flex flex-col cursor-pointer border border-gray-800'>
              <input {...getInputProps()} />
              {coverImage ? (
                <img src={coverImage} alt="Cover" className='w-full h-full object-cover rounded-lg' />
              ) : (
                <p className='flex text-center text-gray-500'>Select a Cover Image</p>
              )}
            </div>
          
        )}
      </Dropzone>

      <Dropzone onDrop={handleAvatarDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className='absolute bottom-[-27%] sm:bottom-[-20%] rounded-full w-20 h-20 sm:w-24 sm:h-24  p-1 ring-2 ring-gray-300 dark:ring-gray-500 flex justify-center items-center z-10 bg-gray-600 cursor-pointer'>
            <div {...getRootProps()} className='w-full h-full flex justify-center items-center'>
              <input {...getInputProps()} />
              {avatarImage ? (
                <img src={avatarImage} alt="Avatar" className='w-full h-full object-cover rounded-full' />
              ) : (
                <img src={no_user} alt="Avatar"/>
              )}
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default Cover;
