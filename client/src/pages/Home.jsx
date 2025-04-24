import React from 'react'
import HeroSec from '../components/HeroSec'
import ListBlogs from '../components/ListBlogs'
const Home = () => {
  return (
    <div className=' bg-[image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url("/src/assets/bg-home.jpg")] bg-[length:100%_500px] bg-top bg-no-repeat'>
      <HeroSec/>
      <ListBlogs/>
    </div>
  )
}

export default Home