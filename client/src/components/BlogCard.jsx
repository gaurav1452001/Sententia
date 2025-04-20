import React, { useMemo } from 'react';
import { placeImage1, placeImage2, placeImage3, placeImage4, placeImage5, placeImage6 } from '../assets/index';
import { Trash2, Share } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post, showDelete, modalContext, currPost }) => {
  const handleDelete = (e) => {
    // this worked because of putting css z-50 on the delete icon
    e.preventDefault();// Prevent the default action of the event
    e.stopPropagation(); // Prevent the click event from bubbling up to the parent Link
    modalContext(true); // Call the function to show the modal
    currPost(post); // Set the current post to be deleted
  }
  const chooseImage = useMemo(() => {
    const images = [placeImage1,
      placeImage2,
      placeImage3,
      placeImage4,
      placeImage5,
      placeImage6]; // Placeholder images
    return images[Math.floor(Math.random() * images.length)];
  }, []); // Empty dependency array means this will only run once when component mounts

  return (
    <div className="p-2 group relative w-full overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02]">
      {/* Background Image with dim effect */}
      <img
        src={post.img || chooseImage}
        alt="blog cover"
        className="w-full h-auto object-cover rounded-lg brightness-[0.7] group-hover:brightness-[0.3] transition-all duration-300"
      />

      {showDelete ? (
        <div className='absolute top-3 right-3 flex flex-col gap-3 p-2 items-center'>
          <Trash2 onClick={handleDelete} className='opacity-50 h-6 hover:opacity-100 bg-black rounded-full p-1 z-50' />
          {/* <Share onClick={handleDelete} className='opacity-50 h-6 hover:opacity-100 bg-black rounded-full p-1 z-50' /> */}
        </div>
      ) : (
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-3 right-3 z-50'>
          <Link to={`/blogs?author=${post.user.clerkUserId}`}>
            <img src={post.user.profileimg} alt="" className='h-9 w-9 rounded-full object-cover object-center' />
          </Link>
        </div>
      )}
      {/* Overlay Content */}
      <div className="right-3 left-3 bottom-3 absolute flex flex-col justify-end">
        <p className="text-white font-bold text-base sm:text-xl xl:text-2xl line-clamp-1">
          {post.title}
        </p>
        <p className="text-gray-200 line-clamp-1 xl:line-clamp-2 text-[10px] sm:text-sm xl:text-semibold ">
          {post.desc}
        </p>
        <p className="text-gray-300 text-[7px] sm:text-[10px] xl:text-xs flex flex-row items-center gap-2">
          {post.user.blogName}
        </p>
      </div>

      {/* <p className="absolute bottom-4 left-4 text-gray-300 text-[7px] sm:text-xs xl:text-[10px] flex flex-row items-center gap-2">
      </p> */}

      <p className="absolute bottom-3 right-3 text-gray-300 text-sm sm:text-xs xl:text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {(() => {
          const date = new Date(post.createdAt);
          const currentYear = new Date().getFullYear();
          return date.getFullYear() === currentYear
            ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        })()}
      </p>
    </div>
  );
};

export default BlogCard;
