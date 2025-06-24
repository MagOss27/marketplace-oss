import React from "react";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await fetch("https://marketplace-oss.onrender.com/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" required /><br />
      <input type="password" name="password" placeholder="Senha" required /><br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;