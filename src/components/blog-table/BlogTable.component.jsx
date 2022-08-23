import { useState, useEffect } from "react";

import AddBlogPosts from "../add-blog-posts/AddBlogPosts.component";

import { getNextPosts, getPosts, deleteBlogPosts, editBlogPost } from "../../utils/firebase/firebasefirestore.utils";

const defaultEditPostFormState = {
  id:"",
  postName: "",
  date: "",
  content: "",
  author: "",
};

const BlogTable = () => {
  const defaultFormState = {
    searchKey: "",
  };

  const [formState, setFormState] = useState(defaultFormState);
  const {searchKey} = formState;

  const [posts, setPosts] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  const [postEditFormState, setPostFormState] = useState(defaultEditPostFormState);
  const { postName, auther, date, content} = postEditFormState;

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        getPosts(searchKey).then((postData) => {
          setPosts(postData.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };

  const handleEditPost = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        await editBlogPost(postEditFormState);
      } catch (error) {
        console.log(error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };


  useEffect(() => {
    getPosts(searchKey).then((userData) => {
      setPosts(userData.data);
      setLastItem(userData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
      getNextPosts(lastItem).then((productData) => {
      setPosts([...posts, ...productData.data])
      setLastItem(productData.lastVisible);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleChangePost = (event) => {
    const { name, value } = event.target;
    setPostFormState({ ...postEditFormState, [name]: value });
  }

  return (
    <>
      <div className="mb-4 row">
        <div className="col-lg-6 col-sm-12">
          <h3>All Blogs Posts</h3>
        </div>
        <div className="col-lg-6 col-sm-12">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              className="form-control me-2 search-item"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              name="searchKey"
              value={searchKey}
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
                <td>{blogPost.data.postName}</td>
                <td>{blogPost.data.author}</td>
                <td>{blogPost.data.date}</td>
                <td>
                  <button type="button" className="btn btn-warning me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#editBlogPostsModal"
                  onClick={() => {
                    setPostFormState({
                      ...formState,
                      id: blogPost.id,
                      postName: blogPost.data.postName,
                      author: blogPost.data.author,
                      date: blogPost.data.date,
                      content: blogPost.data.content,
                    });
                  }}
                  >
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
      <div
      className="modal fade"
      id="editBlogPostsModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Blog Post
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row container" onSubmit={handleEditPost}>
              <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="postName" className="form-label">
                  Post Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="postName"
                  name="postName"
                  value={postEditFormState.postName}
                  onChange={handleChangePost}
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  name="author"
                  value={postEditFormState.author}
                  onChange={handleChangePost}
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  name="date"
                  value={postEditFormState.date}
                  onChange={handleChangePost}
                />
              </div>
              <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="content" className="form-label">
                  Article
                </label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  rows="5"
                  value={postEditFormState.content}
                  onChange={handleChangePost}
                ></textarea>
              </div>
              {/* <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="articleImages" className="form-label">
                  Article Images
                </label>
                <input
                  className="form-control"
                  name="articleImage"
                  type="file"
                  id="articleImages"
                  // onChange={handleImgChange}
                  accept="image/*"
                />
              </div> */}
              <div className="row justify-content-center">
                <button
                  type="submit"
                  className="btn btn-warning mt-4 mb-4 w-75"
                >
                  Edit Blog Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogTable;
