import React from 'react';
import placeholderimg from "../assets/sample_blog_img.png";

const BlogCard = ({ post }) => {
  return (
    <div className="p-2 group relative w-full overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-105">
      {/* Background Image with dim effect */}
      <img
        src={post.img || placeholderimg}
        alt="blog cover"
        className="w-full h-auto object-cover rounded-lg brightness-[0.7] group-hover:brightness-[0.3] transition-all duration-300"
      />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-3 right-3">
        <img src={post.user.profileimg} alt="" className='h-9 w-9 rounded-full object-cover object-center' />
      </div>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-evenly p-4">
        <div className="space-y-3">
          <div className="text-white font-bold text-xl sm:text-2xl xs:text-3xl line-clamp-2">
            {post.title}
          </div>
          <div className="transition-opacity duration-300">
            <p className="text-gray-200 line-clamp-2 md:line-clamp-3 text-lg sm:text-base xs:text-semibold">
              {post.desc}
            </p>
          </div>
          
        </div>
      </div>
      <p className="absolute bottom-4 left-4 text-gray-300 text-xs sm:text-xs xs:text-[10px]">
            {post.user.blogName}
          </p>

      <p className="absolute bottom-3 right-3 text-gray-300 text-sm sm:text-xs xs:text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
