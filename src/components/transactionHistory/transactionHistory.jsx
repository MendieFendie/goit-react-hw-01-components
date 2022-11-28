import propTypes from 'prop-types';
export default function Transaction({ type, amount, currency, id }) {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
  id: propTypes.string,
};
