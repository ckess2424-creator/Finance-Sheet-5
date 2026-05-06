export default function Accounts({ accounts, setAccounts }) {
  return (
    <div className="card">
      <h3>Accounts</h3>

      <div className="row">
        <span>US Account (USD)</span>
        <input
          type="number"
          value={accounts.usd}
          onChange={(e) =>
            setAccounts({ ...accounts, usd: Number(e.target.value) })
          }
        />
      </div>

      <div className="row">
        <span>Israel Account (ILS)</span>
        <input
          type="number"
          value={accounts.ils}
          onChange={(e) =>
            setAccounts({ ...accounts, ils: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
}
