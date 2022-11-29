import PropTypes from 'prop-types';
import Friend from './friend';
import css from './friends.module.css';
export default function friendList({ friends }) {
  return (
    <div className={css.friends}>
      <ul className={css.friendlist}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <Friend key={id} avatar={avatar} name={name} status={isOnline} />
        ))}
      </ul>
    </div>
  );
}

friendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
