import blogFeatch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
    const [post, setPost] =useState()
    const getPosts = async () => {
        try {
            const response = await blogFeatch.get("/posts");

            const data = response.data

            setPost(data)
        } catch (err) {
            console.log("error")
        }

    }

  return <div>Admin</div>;
};

export default Admin;
