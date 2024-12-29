import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import ListBlogs from '../components/ListBlogs'
const Home = () => {
  return (
    <div className='bg-[#daaad2] min-h-screen'>
      <Navbar/>
      <Search/>
      <div className='w-[80vw] border-2 mx-auto'>
      </div>
      <ListBlogs/>
    </div>
  )
}

export default Home