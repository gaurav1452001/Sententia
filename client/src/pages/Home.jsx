import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import ListBlogs from '../components/ListBlogs'
const Home = () => {
  return (
    <div className='bg-[#80a3ff] min-h-screen '>
      <Navbar/>
      <Search/>
      <ListBlogs/>
    </div>
  )
}

export default Home