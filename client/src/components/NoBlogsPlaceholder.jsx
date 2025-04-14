import React from 'react'
import { NavLink } from 'react-router-dom'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/animation_writer.json";
const NoBlogsPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center  pb-12">
      <Lottie  style={{height:200}}  animationData={groovyWalkAnimation} loop={true} />
      <h3 className="text-2xl font-semibold text-gray-200 mb-2">No Blog Posts Yet</h3>
      <p className="text-gray-400 mb-6">Start Sharing Your Thoughts With the World!</p>
      
      <NavLink 
        to="/write-blog" 
        className="px-4 py-2 bg-violet-900 text-white rounded-lg hover:bg-violet-950 transition-colors duration-300 flex items-center gap-2"
      >
        Create Your First Post
      </NavLink>
    </div>
  )
}

export default NoBlogsPlaceholder