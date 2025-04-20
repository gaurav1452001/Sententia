import React from 'react'
import { useSearchParams } from 'react-router-dom'

const sortOptions = [
  { label: 'Oldest', value: 'oldest' },
  { label: 'Newest', value: 'newest' },
  { label: 'Popular', value: 'popular' },
];

const SortButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get('sort');

  const handleSort = (value) => {
    searchParams.set('sort', value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex gap-3 ml-2 items-center mb-4 mt-6">
      {sortOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`px-3 py-2 font-semibold rounded-lg  text-sm ${
            currentSort === value
              ? 'bg-violet-100 text-violet-900 ring-2 ring-violet-500'
              : 'bg-gray-700/60 text-gray-300 hover:bg-gray-600 hover:text-white'
          }`}
          onClick={() => handleSort(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SortButtons;