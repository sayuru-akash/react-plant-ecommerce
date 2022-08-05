import React from 'react'
import BlogLoop from '../blog-loop/BlogLoop.component'

const BlogSection = () => {
  return (
    <div className='m-5'>
      <h3>OUR BLOG</h3>
      <hr/>
      <div className='row'>
        <BlogLoop/>
      </div>
    </div>
  )
}

export default BlogSection