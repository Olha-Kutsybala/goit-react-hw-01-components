import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css.friend_item}>
      {isOnline ? (
        <span className={css.isonline}></span>
      ) : (
        <span className={css.isoffline}></span>
      )}
      <img src={avatar} alt={name} className={css.friend_avatar} />
      <p className={css.friend_name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
