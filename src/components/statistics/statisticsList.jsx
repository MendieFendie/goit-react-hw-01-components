import Statistics from './statistics';
import css from './statistics.module.css';

function StatisticsList({ data }) {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>
        {data.tittle ? data.tittle : 'Upload stats'}
      </h2>
      <ul className={css.statlist}>
        {data.map(item => (
          <Statistics
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </div>
  );
}

export default StatisticsList;
