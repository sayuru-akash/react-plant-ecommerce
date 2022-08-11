import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getPostData } from "../../utils/firebase/firebasefirestore.utils";

import "./BlogSingle.styles.css";

const BlogSingle = () => {
  const [postData, setPostData] = useState([]);

  const [searchParams] = useSearchParams();
  const sKey = searchParams.get("read");

  useEffect(() => {
    getPostData(sKey).then((postData) => {
      setPostData(postData);
    });
  }, []);

  return (
    <div className="container mt-5 mb-5 row mx-auto">
      <img
        src={postData.image}
        alt={postData.title}
        className="blog-single-image img-thumbnail mt-4"
      />
      <h1 className="mt-5">{postData.title}</h1>
      <h5 className="text-start">{postData.author}</h5>
      <p className="text-start">{postData.date}</p>
      <p className="mt-5 text-start">{postData.content}</p>
    </div>
  );
};

export default BlogSingle;
