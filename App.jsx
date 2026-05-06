// src/App.jsx
import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Accounts from "./components/Accounts";
import Summary from "./components/Summary";
import Header from "./components/Header";

export default function App() {
  const [expenses, setExpenses] = useState(() => {
    return JSON.parse(localStorage.getItem("fs5_expenses")) || [];
  });

  const [accounts, setAccounts] = useState(() => {
    return JSON.parse(localStorage.getItem("fs5_accounts")) || {
      usd: 0,
      ils: 0
    };
  });

  useEffect(() => {
    localStorage.setItem("fs5_expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("fs5_accounts", JSON.stringify(accounts));
  }, [accounts]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div className="container">
      <Header />
      <Summary expenses={expenses} accounts={accounts} />
      <Accounts accounts={accounts} setAccounts={setAccounts} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}
