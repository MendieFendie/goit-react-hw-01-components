import Transaction from './transactionHistory';
export default function TransactionHistoryList({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Transaction
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
            key={transaction.id}
          />
        ))}
      </tbody>
    </table>
  );
}
