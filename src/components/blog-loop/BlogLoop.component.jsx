import { useState, useEffect } from "react"

import { getPostsToLoop } from "../../utils/firebase/firebasefirestore.utils"

const BlogLoop = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsToLoop().then((posts) => setPosts(posts));
  }, []);

  return (
    <>
    {posts.map((post) => (
    <div className="col-sm-12 col-lg-3 col-md-4">
      <div className="card m-4">
        <img
          className="card-img-top"
          src={post.data.image}
          alt={post.data.title}
        />
        <div className="card-body">
          <h5 className="card-title">{post.data.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-footer">
          <span> {post.data.date} </span> <span> {post.data.author} </span>
        </div>
      </div>
    </div>
    ))}
    </>
  );
};

export default BlogLoop;
