import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import ListBlogs from '../components/ListBlogs'
const Home = () => {
  return (
    <div className='min-h-screen '>
      <Navbar/>
      <Search/>
      <ListBlogs/>
    </div>
  )
}

export default Home