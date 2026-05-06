import { useEffect, useState } from "react";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("fs5_expenses")) || [];
  });

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    localStorage.setItem("fs5_expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      currency
    };

    setExpenses([newExpense, ...expenses]);

    setTitle("");
    setAmount("");
  };

  const totalUSD = expenses
    .filter((e) => e.currency === "USD")
    .reduce((sum, e) => sum + e.amount, 0);

  const totalILS = expenses
    .filter((e) => e.currency === "ILS")
    .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>💰 Finance Sheet 5</h1>

      <h3>Summary</h3>
      <p>Total USD: {totalUSD}</p>
      <p>Total ILS: {totalILS}</p>

      <hr />

      <form onSubmit={addExpense}>
        <h3>Add Expense</h3>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="ILS">ILS</option>
        </select>

        <button type="submit">Add</button>
      </form>

      <hr />

      <h3>Expenses</h3>

      {expenses.map((e) => (
        <div key={e.id}>
          {e.title} — {e.amount} {e.currency}
        </div>
      ))}
    </div>
  );
}
