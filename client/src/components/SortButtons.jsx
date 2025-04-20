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
    <div className="flex gap-3 ml-2 items-center mb-4">
      {sortOptions.map(({ label, value }) => (
        <button
          key={value}
          className={`px-3 py-2 font-semibold rounded-lg transition-colors duration-200 text-sm ${
            currentSort === value
              ? 'bg-[#dddddd] text-black ring-2 ring-violet-900'
              : 'bg-[#232524] text-[#5f5f5f] hover:bg-[#3a3a3a] hover:text-[#dedede]'
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