import React from "react";

const Cadastro = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await fetch("https://marketplace-oss.onrender.com/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Cadastro</h2>
      <input type="text" name="name" placeholder="Nome" required /><br />
      <input type="email" name="email" placeholder="Email" required /><br />
      <input type="password" name="password" placeholder="Senha" required /><br />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;