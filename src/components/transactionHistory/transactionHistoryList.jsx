import PropTypes from 'prop-types';
import Transaction from './transactionHistory';
import css from './transactionHistory.module.css';
export default function TransactionHistoryList({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th className={css.columnName}>Type</th>
          <th className={css.columnName}>Amount</th>
          <th className={css.columnName}>Currency</th>
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

TransactionHistoryList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
