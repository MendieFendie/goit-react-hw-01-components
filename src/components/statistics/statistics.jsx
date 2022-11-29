import css from './statistics.module.css';
export default function Statistics({ label, percentage }) {
  return (
    <>
      <li className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    </>
  );
}
