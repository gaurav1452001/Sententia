import React from 'react';
import placeholderimg from "../assets/sample_blog_img.png";

const BlogCard = ({ post }) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      {/* Background Image with dim effect */}
      <img 
        src={post.img || placeholderimg} 
        alt="blog cover" 
        className="w-full h-auto object-cover rounded-lg brightness-75 group-hover:brightness-50 transition-all duration-300"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        {/* Title and Author - Always visible */}
        <div className="space-y-3">
          <h2 className="text-white font-bold text-3xl line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-300 text-sm">
            {post.user.blogName}
          </p>
        </div>

        {/* Description - Shown on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
          <p className="text-gray-200 text-xs line-clamp-3">
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
