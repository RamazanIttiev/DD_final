import React from 'react';
import './Header.scss';
import store from '../../state';
import Search from '../Search/Search';
import { observer } from 'mobx-react';
import Bell from '../../assets/icons/notification.svg';

const Header = observer(() => {
  const users = store.users.users;
  const messages = store.comments.messages;

  return (
    <div className="Header">
      <Search />
      <div className="Header__wrapper">
        <div className={messages.length !== 0 && 'Header__notification'}>
          <img src={Bell} alt="notification" />
        </div>
        {users.map(user => {
          return <img className="Header__avatar" src={user.avatar} alt={user.name} key={user.id} />;
        })}
      </div>
    </div>
  );
});

export default Header;
