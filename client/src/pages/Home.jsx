import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import ListBlogs from '../components/ListBlogs'
const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Search/>
      <ListBlogs/>
    </div>
  )
}

export default Home