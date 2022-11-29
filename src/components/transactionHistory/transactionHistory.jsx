import css from './transactionHistory.module.css';
export default function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <td className={css.columnItem}>{type}</td>
      <td className={css.columnItem}>{amount}</td>
      <td className={css.columnItem}>{currency}</td>
    </tr>
  );
}
