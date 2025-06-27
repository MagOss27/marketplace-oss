import React, { useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  const buscarMeusProdutos = async () => {
    try {
      const token = localStorage.getItem("token"); // ou onde você estiver salvando o token

      const res = await fetch(
        "https://marketplace-oss.onrender.com/api/products/me",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setProdutos(data);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar produtos");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Meus Produtos</h2>
      <button onClick={buscarMeusProdutos}>Listar Meus Produtos</button>
      <ul>
        {produtos.map((p, i) => (
          <li key={i}>
            <strong>{p.title}</strong> - R$ {p.price}
            <br />
            <small>{p.description}</small>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
