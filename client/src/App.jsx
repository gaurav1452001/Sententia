import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ReadBlog from './pages/ReadBlog'
import WriteBlog from './pages/WriteBlog'
import UserBlog from './pages/UserBlog'
import ListBlogs from './components/ListBlogs'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<ListBlogs />} />
        <Route path='/write-blog' element={<WriteBlog />} />
        <Route path='/user-blog' element={<UserBlog />} />
        <Route path='/blogs/:slug' element={<ReadBlog />} />
      </Routes>
    </div>
  )
}

export default App
