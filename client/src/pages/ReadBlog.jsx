import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
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
    queryKey: ["post", slug],
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
      <Navbar />
      <div className='mt-28 mx-44'>
        {/* Dynamic Sidebar */}
        <aside className="fixed left-0 z-40 w-64 ml-24 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div className="h-full overflow-y-auto p-3">
            <ul className="space-y-1 text-sm flex flex-col">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className="flex items-center p-2 hover:text-zinc-300 text-[#999999]"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Blog Content */}
        <div className="pl-4 pt-3 flex flex-col sm:ml-36">

          <a href="/" className='text-[#CCCCCC]'>← BACK TO HOME PAGE</a>
          <span className='text-[#999999] mt-7'>
            {new Date(data.createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).toUpperCase()}
          </span>
          <div className='text-6xl font-semibold mt-3'>{data.title}</div>
          <div className='text-[#B3B3B3] mt-7'>{data.desc}</div>
          <div className='flex flex-row mt-9 gap-5 text-lg'>
            <img src={data.user.profileimg} className='size-9 md:size-12 rounded-md' alt="" />
            <div className='flex flex-col'>
              <span className='text-[#CCCCCC] text-base'>Posted By {data.user.username}</span>
              <span className='text-[#B3B3B3] text-base'>19 minutes read</span>
            </div>
          </div>
          <hr className="h-px my-8 bg-neutral-800 border-0"></hr>
          <div
            className="quill-content text-gray-200"
            dangerouslySetInnerHTML={sanitizedData(data.content)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadBlog;
