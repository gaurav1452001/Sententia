import React from 'react'
import { useNavigate,useSearchParams } from 'react-router-dom';
const Searchbox = () => {

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      if (query) {
        // setSearchParams({...Object.fromEntries(searchParams),search: query });
        navigate(`/blogs?search=${query}`);
      } else {
        setSearchParams({});
        navigate('/blogs');
      }
    }
  }

  return (
    <div className="relative w-full max-w-sm">
      <input 
        type="text" 
        placeholder='Search Sententia...' 
        className='w-full h-10 rounded-lg bg-[#141616] text-gray-200 pl-10 pr-4 
          border border-[#2d2f30]
          focus:outline-none focus:ring-1 focus:ring-violet-600'
          onKeyDown={handleKeyPress} 
      />
      <svg 
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
    </div>
  )
}

export default Searchbox