import axios from "axios";

const blogFeatch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default blogFeatch;
