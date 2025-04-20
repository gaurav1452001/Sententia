import React from 'react'
import Search from '../components/Search'
import ListBlogs from '../components/ListBlogs'
import bgHome from '../assets/bg-home.jpg'
const Home = () => {
  return (
    <div className=' bg-[image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url("/src/assets/bg-home.jpg")] bg-[length:100%_40%] bg-top bg-no-repeat'>
      <Search/>
      <ListBlogs/>
    </div>
  )
}

export default Home