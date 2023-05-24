import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            {isOnline ? (
              <span className={css.friend__online}></span>
            ) : (
              <span className={css.friend__offline}></span>
            )}
            <img src={avatar} alt={name} />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
