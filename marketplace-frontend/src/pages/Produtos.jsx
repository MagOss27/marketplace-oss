import React, { useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  const buscarProdutos = async () => {
    const res = await fetch("https://marketplace-oss.onrender.com/api/products");
    const data = await res.json();
    setProdutos(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Produtos</h2>
      <button onClick={buscarProdutos}>Listar Produtos</button>
      <ul>
        {produtos.map((p, i) => (
          <li key={i}>
            <strong>{p.title}</strong> - R${p.price}<br />
            <small>{p.description}</small>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;