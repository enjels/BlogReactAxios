const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo Post</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            placeholder="Digite o título"
            id="title"
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn"/>
      </form>
    </div>
  );
};

export default NewPost;
