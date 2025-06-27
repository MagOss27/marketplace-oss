import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Pagamento from "./pages/Pagamento";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pagamento" element={<Pagamento />} />
     <Route path="/admin" element={<AdminDashboard />} />
<Route path="/user" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
