import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';
const ListBlogs = () => {

  const {isSearched,searchFilter,setSearchFilter}=useContext(AppContext)

  return (
    <>
      <div className='mx-auto w-[90vh]'>
        test
      </div>
    </>
  )
}

export default ListBlogs
