import css from './friends.module.css';

export default function Friend({ avatar, name, status }) {
  return (
    <li className={css.item}>
      <span className={status ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
