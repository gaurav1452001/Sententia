import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currSearch = searchParams.get('search');
    return (
        <>
            {
                currSearch && currSearch.length > 0 ? (
                    <div className="flex flex-row justify-left mt-5 p-3">
                        <h1 className="text-2xl font-bold text-[#ffffff]">Search Results for: {currSearch}</h1>
                    </div>
                ) : null
            }
        </>
    )
}

export default SearchResults