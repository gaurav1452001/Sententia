import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ReadBlog from './pages/ReadBlog'
import WriteBlog from './pages/WriteBlog'
import UserBlog from './pages/UserBlog'
import Stats from './pages/Stats'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/write-blog' element={<WriteBlog />} />
        <Route path='/user-blog' element={<UserBlog />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/read-blog' element={<ReadBlog />} />
      </Routes>
    </div>
  )
}

export default App
