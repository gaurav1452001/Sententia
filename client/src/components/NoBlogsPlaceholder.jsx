import React from 'react'
import { NavLink } from 'react-router-dom'
import { PencilLine } from 'lucide-react'
const NoBlogsPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-12">
      <PencilLine size={80} className="text-gray-500 mb-10" />
      
      <h3 className="text-2xl font-semibold text-gray-200 mb-2">No Blog Posts Yet</h3>
      <p className="text-gray-400 mb-6">Start sharing your thoughts with the world!</p>
      
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