import { useState, useEffect } from "react"

import { getNextPostsToLoop, getPostsToLoop } from "../../utils/firebase/firebasefirestore.utils"

import './BlogLoop.styles.css';

const BlogLoop = () => {

  const [posts, setPosts] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    getPostsToLoop().then((userData) => {
      setPosts(userData.data);
      setLastItem(userData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextPostsToLoop(lastItem).then((postData) => {
      setPosts([...posts, ...postData.data])
      setLastItem(postData.lastVisible);
    });
  }

  return (
    <>
    {posts.map((post) => (
    <div className="col-sm-12 col-lg-3 col-md-4" key={post.id}>
      <div className="card m-4">
        <a href={`/post?read=${post.id}`}>
        <img
          className="card-img-top blog-loop-image"
          src={post.data.image}
          alt={post.data.title}
        />
        <div className="card-body">
          <h5 className="card-title">{post.data.title}</h5>
          <p className="card-text">
            {post.data.content.substring(0, 100)}
          </p>
        </div>
        <div className="card-footer">
          <span> {post.data.date} </span> <span> {post.data.author} </span>
        </div>
        </a>
      </div>
    </div>
    ))}
    <div>
      <button className="btn btn-outline-dark shadow-none mt-4" onClick={loadNext}>Load More...</button>
    </div>
    </>
  );
};

export default BlogLoop;
