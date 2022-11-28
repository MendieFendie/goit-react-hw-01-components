import propTypes from 'prop-types';
import css from './statistics.module.css';
export default function Statistics({ id, label, percentage }) {
  return (
    <>
      <li className={css.item} key={id}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    </>
  );
}

Statistics.prototype = {
  id: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
};
