/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [posts, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = response.data

      setPost(data)

    } catch (error) {

      console.log("Error");

    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Últimos posts</h1>
        {posts.length === 0 ? <p>Carregando...</p> : (
          posts.map((post) => ( 
            <div className="post" key={post.id} >
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} className ="btn">
                Ler mais
              </Link>
            </div>
          ))
        )}
    </div>
  );
};

export default Home;