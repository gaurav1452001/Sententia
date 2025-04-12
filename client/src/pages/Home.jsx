import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import ListBlogs from '../components/ListBlogs'
import { BackgroundBeams } from "../components/ui/background-beams";
const Home = () => {
  return (
    <div className='min-h-screen '>
      <Navbar/>
      <ListBlogs/>
      <BackgroundBeams/>
    </div>
  )
}

export default Home