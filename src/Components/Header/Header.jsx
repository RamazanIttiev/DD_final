import React from 'react';
import './Header.scss';
import Search from '../Search/Search';
import Bell from '../../assets/icons/notification.svg';
import { observer } from 'mobx-react';
import store from '../../state';

const Header = observer(() => {
  const users = store.users.users;

  return (
    <div className="Header">
      <Search />
      <img src={Bell} alt="notification" />
      <select name="users">
        {users.map(user => {
          return <option value={user.name}>{user.name}</option>;
        })}
      </select>
    </div>
  );
});

export default Header;
