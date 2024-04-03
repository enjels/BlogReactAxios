import blogFeatch from "../axios/config";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await blogFeatch.get(`/posts/${id}`);

      const data = response.data;

      setTitle(data.title);
      setBody(data.body);
    } catch (err) {
      console.log("erro");
    }
  };
  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, user: 1 };

    await blogFeatch.put(`/posts/${id}`, {
      body: post,
    });

    navigate("/");
  };

  useEffect(() => {
    getPost();
  },[]);

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ""}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
            value={body || ""}
          ></textarea>
        </div>
        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;
