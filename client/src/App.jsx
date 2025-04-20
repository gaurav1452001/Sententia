import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ReadBlog from './pages/ReadBlog'
import WriteBlog from './pages/WriteBlog'
import UserBlog from './pages/UserBlog'
import Stats from './pages/Stats'
import ListBlogs from './components/ListBlogs'
import AuthorBlog from './pages/AuthorBlog'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<ListBlogs />} />
        <Route path='/write-blog' element={<WriteBlog />} />
        <Route path='/user-blog' element={<UserBlog />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/blogs/:slug' element={<ReadBlog />} />
        <Route path='/users/:user' element={<AuthorBlog />} />
        
      </Routes>
    </div>
  )
}

export default App
