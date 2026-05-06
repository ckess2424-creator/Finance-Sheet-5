import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      currency
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>Add Expense</h3>

      <input
        placeholder="Expense name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="ILS">ILS</option>
      </select>

      <button>Add Expense</button>
    </form>
  );
}
