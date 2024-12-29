import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';
import BlogCard from './BlogCard';
const ListBlogs = () => {

  const {isSearched,searchFilter,setSearchFilter}=useContext(AppContext)

  return (
    <>
      <div className='flex flex-col items-center w-[75vh]'>
        {isSearched&&<div className='text-xl my-3'>
          Search Results for "{searchFilter}"
          </div>
        }
      </div>
        <BlogCard/>
    </>
  )
}

export default ListBlogs
