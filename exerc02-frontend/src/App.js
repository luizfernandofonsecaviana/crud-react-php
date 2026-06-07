import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [editando, setEditando] = useState(null);

  const api = "http://localhost/exerc02-backend";

  useEffect(() => {
    listarProdutos();
  }, []);

  const listarProdutos = async () => {
    const response = await axios.get(`${api}/listar.php`);
    setProdutos(response.data);
  };

  const salvar = async () => {
    if (nome.trim() === "" || preco === "") {
      alert("Preencha todos os campos");
      return;
    }

    try {
      if (editando) {
        await axios.post(`${api}/editar.php`, {
          id: editando,
          nome,
          preco,
        });
      } else {
        await axios.post(`${api}/criar.php`, {
          nome,
          preco,
        });
      }

      setNome("");
      setPreco("");
      setEditando(null);
      listarProdutos();
    } catch (error) {
      console.log(error);
    }
  };

  const editar = (produto) => {
    setNome(produto.nome);
    setPreco(produto.preco);
    setEditando(produto.id);
  };

  const excluir = async (id) => {
    await axios.post(`${api}/excluir.php`, {
      id,
    });

    listarProdutos();
  };

  return (
    <div className="container">
      <h1>CRUD de Produtos</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <button className="salvar" onClick={salvar}>
          {editando ? "Atualizar" : "Cadastrar"}
        </button>
      </div>

      <hr />

      {produtos.map((produto) => (
        <div key={produto.id} className="produto">
          <div className="info">
            <strong>{produto.nome}</strong>
            <span>R$ {produto.preco}</span>
          </div>

          <div>
            <button
              className="editar"
              onClick={() => editar(produto)}
            >
              Editar
            </button>

            <button
              className="excluir"
              onClick={() => excluir(produto.id)}
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;