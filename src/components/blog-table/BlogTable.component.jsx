import { useState, useEffect } from "react";

import AddBlogPosts from "../add-blog-posts/AddBlogPosts.component";

import { getNextPosts, getPosts, deleteBlogPosts } from "../../utils/firebase/firebasefirestore.utils";

const BlogTable = () => {
  const [posts, setPosts] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    getPosts().then((userData) => {
      setPosts(userData.data);
      setLastItem(userData.lastVisible);
    });
  }, [posts]);

  const loadNext = ()=>{
      getNextPosts(lastItem).then((productData) => {
      setPosts([...posts, ...productData.data])
      setLastItem(productData.lastVisible);
    });
  }

  return (
    <>
      <div className="mb-4 row">
        <div className="col-lg-6 col-sm-12">
          <h3>All Blogs Posts</h3>
        </div>
        <div className="col-lg-6 col-sm-12">
          <form className="d-flex">
            <input
              className="form-control me-2 search-item"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="mb-4">
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addBlogPostsModal"
        >
          <i className="fa-solid fa-plus me-2"></i>Add Blog Post
        </button>
      </div>
      <div className="table-responsive">
        <table className="table bordered striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((blogPost, index) => (
              <tr key={blogPost.count}>
                <th scope="row">{index}</th>
                <td>{blogPost.data.title}</td>
                <td>{blogPost.data.author}</td>
                <td>{blogPost.data.date}</td>
                <td>
                  <button type="button" className="btn btn-warning me-3">
                    <i className="fa-solid fa-pen-to-square me-2"></i>Edit
                  </button>
                  <button onClick={()=> deleteBlogPosts(blogPost.id)} className="btn btn-danger">
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button class="btn btn-outline-dark shadow-none" onClick={loadNext}>Load More...</button>
      </div>

      <AddBlogPosts />
    </>
  );
};

export default BlogTable;
