export default function ExpenseList({ expenses }) {
  return (
    <div className="card">
      <h3>Expenses</h3>

      {expenses.length === 0 && <p>No expenses yet.</p>}

      {expenses.map((e) => (
        <div key={e.id} className="row">
          <span>{e.title}</span>
          <span>
            {e.amount} {e.currency}
          </span>
        </div>
      ))}
    </div>
  );
}
