import axios from "axios";

const blogFeatch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    }
});

export default blogFeatch;
