import Friend from './friend';
import css from './friends.module.css';
export default function friendList({ friends }) {
  return (
    <div className={css.friends}>
      <ul className={css.friendlist}>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}
