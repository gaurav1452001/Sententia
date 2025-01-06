import React,{useContext,useState} from 'react'
import { AppContext } from '../context/AppContext';
import left from '../assets/left-page.png';
import right from '../assets/right-page.png';
import BlogCard from './BlogCard';
const ListBlogs = () => {

  const {isSearched,searchFilter,setSearchFilter}=useContext(AppContext)
  const [currentPage,setCurrentPage]=useState(1);
  return (
    <>
      <div className='flex flex-col items-center'>
        {isSearched&&<div className='text-xl my-3'>
          Search Results for "{searchFilter}"
          </div>
        }
      </div>
      <div>

      </div>
        <BlogCard/>

        {/* {blogs.length>0&&( */}
        <div className='flex flex-row justify-center my-5'>
            <a href="">
              <img className='w-5' src={left} alt="" />
            </a>
            {
              Array.from({length:Math.ceil(ListBlogs.length/4)}).map((_,index)=>(
                <a href="#">
                  <button>{index+1}</button>
                </a>
              ))
            }
            <a href="">
              <img className='w-5' src={right} alt="" />
            </a>
          </div>
        {/* )} */}
    </>
  )
}

export default ListBlogs
