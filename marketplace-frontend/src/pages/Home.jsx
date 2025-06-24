import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div style={{ padding: 20 }}>
    <h1>Marketplace</h1>
    <nav>
      <Link to="/cadastro">Cadastro</Link> | {" "}
      <Link to="/login">Login</Link> | {" "}
      <Link to="/produtos">Produtos</Link> | {" "}
      <Link to="/pagamento">Pagamento</Link>
    </nav>
  </div>
);