import React from 'react';
import placeholderimg from "../assets/sample_blog_img.png";
import { useUser } from '@clerk/clerk-react';
import { Trash2, Share } from 'lucide-react';

const BlogCard = ({ post, showDelete }) => {

  const { user } = useUser();
  return (
    <div className="p-2 group relative w-full overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-105">
      {/* Background Image with dim effect */}
      <img
        src={post.img || placeholderimg}
        alt="blog cover"
        className="w-full h-auto object-cover rounded-lg brightness-[.7] group-hover:brightness-[0.3] transition-all duration-300 group-hover:blur-sm"
      />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-3 right-3">
        <img src={post.user.profileimg} alt="" className='h-9 w-9 rounded-full object-cover object-center' />
      </div>
      {/* Overlay Content */}
      <div className="gap-9 absolute inset-0 flex flex-col justify-center p-4 mb-6">
        <div className="text-white font-bold text-xl sm:text-2xl xl:text-3xl line-clamp-2">
          {post.title}
        </div>
        <div className="text-gray-200 line-clamp-1 xl:line-clamp-2 text-xs sm:text-sm xl:text-semibold ">
          {post.desc}
        </div>
      </div>

      <p className="absolute bottom-4 left-4 text-gray-300 text-xs sm:text-xs xl:text-[10px] flex flex-row items-center gap-2">
        <div>
          {post.user.blogName}
        </div>
        <div className="absolute flex flex-row gap-8 left-12 items-center">
          {/* <img src={post.user.profileimg} alt="" className='h-9 w-9 rounded-full object-cover object-center' /> */}
          {showDelete && (
            <>
              <Trash2 className='opacity-50  h-5 hover:opacity-100' />
              <Share className='opacity-50 h-5 hover:opacity-100' />
            </>
          )}
        </div>
      </p>

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
