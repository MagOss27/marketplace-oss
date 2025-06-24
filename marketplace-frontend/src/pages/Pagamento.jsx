import React from "react";

const Pagamento = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = e.target.amount.value;
    const res = await fetch("https://marketplace-oss.onrender.com/api/payments/pix", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    window.open(data.link, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Pagamento Pix</h2>
      <input type="number" name="amount" placeholder="Valor em R$" required /><br />
      <button type="submit">Gerar Link</button>
    </form>
  );
};

export default Pagamento;
