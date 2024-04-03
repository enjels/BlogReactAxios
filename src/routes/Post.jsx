import blogFeatch from "../axios/config.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";

const Post = () => {
  const {id} = useParams()
  const [post, setPost] = useState({});
  const getPost = async () => {
      try {
          const response = await blogFeatch.get(`/posts/${id}`);

          const data = response.data
          
          setPost(data)
    } catch (err) {
      console.log("erro");
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
