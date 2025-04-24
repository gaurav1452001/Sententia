import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DOMPurify from 'dompurify';
import '../styles/quill-content.css';

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const ReadBlog = () => {
  const [headings, setHeadings] = useState([]);
  const { slug } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["posts", slug],
    queryFn: () => fetchPost(slug),
    enabled: !!slug, // Ensure the query runs only if the slug exists
  });

  useEffect(() => {
    if (data?.content) {
      // Parse the content to extract headings
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.content, 'text/html');
      const extractedHeadings = Array.from(doc.querySelectorAll('h1, h2, h3')).map((heading, index) => ({
        id: `heading-${index}`,
        text: heading.textContent,
        tag: heading.tagName.toLowerCase(),
      }));

      // Add IDs to headings in the content for scrolling
      extractedHeadings.forEach((heading, index) => {
        const element = doc.querySelectorAll('h1, h2, h3')[index];
        if (element) {
          element.id = heading.id;
        }
      });

      setHeadings(extractedHeadings);

      // Update the sanitized content with IDs
      const updatedContent = doc.body.innerHTML;
      data.content = updatedContent;
    }
  }, [data]);

  const sanitizedData = (content) => ({
    __html: DOMPurify.sanitize(content),
  });

  if (isLoading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }

  if (error) {
    return <div className='flex justify-center items-center h-screen'>Something went wrong! {error.message}</div>;
  }

  if (!data) {
    return <div className='flex justify-center items-center h-screen'>No Such Post Found!</div>;
  }

  return (
    <div>
      {/* Responsive container margins */}
      <div className='mt-16 sm:mt-20 md:mt-28 mx-4 sm:mx-12 lg:mx-44 border border-white '>
        {/* Dynamic Sidebar - Responsive visibility and positioning */}
        <aside className="fixed left-0 z-40 w-48 ml-2 sm:ml-8 md:ml-24 hidden lg:block" >
          <div className="p-2 sm:p-3">
            <ul className="space-y-2 text-xs sm:text-sm flex flex-col">
              {headings.map((heading) => (
                <li key={heading.id} className='line-clamp-2'>
                  <a
                    href={`#${heading.id}`}
                    className="flex items-center p-1 sm:p-2 hover:text-zinc-300 text-[#999999]"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Blog Content - Responsive spacing and typography */}
        <div className={headings.length?"px-2 lg:pl-4 pt-3 flex flex-col lg:ml-44":"px-2 lg:pl-4 pt-3 flex flex-col"}>
          {/* Back button - Responsive text size */}
          <a href="/" className='text-[#CCCCCC] text-sm sm:text-base hover:text-white'>← BACK TO HOME PAGE</a>

          {/* Date - Responsive spacing and text */}
          <span className='text-[#999999] mt-4 sm:mt-7 text-xs sm:text-sm'>
            {new Date(data.createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).toUpperCase()}
          </span>

          {/* Title - Responsive text size */}
          <div className='text-2xl sm:text-4xl md:text-6xl font-semibold mt-2 sm:mt-3'>
            {data.title}
          </div>

          {/* Description - Responsive text and spacing */}
          <div className='text-[#B3B3B3] text-sm sm:text-base mt-4 sm:mt-7'>
            {data.desc}
          </div>

          {/* Author info - Responsive layout and sizing */}
          <div className='flex flex-row mt-6 sm:mt-9 gap-3 sm:gap-5 text-base sm:text-lg'>
          <Link to={`/blogs?author=${data.user.clerkUserId}`}>
            <img
              src={data.user.profileimg}
              className='w-8 h-8 sm:w-9 md:w-12 sm:h-9 md:h-12 rounded-md hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]'
              alt=""
            />
            </Link>
            <div className='flex flex-col'>
            <Link to={`/blogs?author=${data.user.clerkUserId}`}>
              <span className='text-[#CCCCCC] text-sm sm:text-base hover:text-white'>
                Posted By {data.user.username}
              </span>
              </Link>
             
            </div>
          </div>

          {/* Divider - Responsive spacing */}
          <hr className="h-px my-6 sm:my-8 bg-neutral-800 border-0"></hr>

          {/* Blog content */}
          <div
            className="quill-content text-gray-200 break-words"
            dangerouslySetInnerHTML={sanitizedData(data.content)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadBlog;
