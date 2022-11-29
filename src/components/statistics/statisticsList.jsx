import Statistics from './statistics';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

function StatisticsList({ data, tittle }) {
  return (
    <div className={css.statistics}>
      {tittle && <h2 className={css.title}>{tittle}</h2>}
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

StatisticsList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
