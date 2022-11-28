import propTypes from 'prop-types';
import css from './friends.module.css';

export default function Friend({ avatar, name, status, id }) {
  return (
    <li className={css.item} key={id}>
      <span className={status ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  status: propTypes.bool,
  id: propTypes.number,
};
