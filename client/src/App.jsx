import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import ReadBlog from './pages/ReadBlog'
import WriteBlog from './pages/WriteBlog'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/write-blog' element={<WriteBlog />} />
        <Route path='/blogs' element={<ReadBlog />} />
      </Routes>
    </div>
  )
}

export default App
