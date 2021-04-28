import React from 'react';
import './Header.scss';
import Search from '../Search/Search';
import Bell from '../../assets/icons/notification.svg';
import { observer } from 'mobx-react';
import store from '../../state';

const Header = observer(() => {
  const users = store.users.users;
  console.log(users);
  // const selectUser = user => {
  //   store.users.getUsers(user);
  // };

  return (
    <div className="Header">
      <Search />
      <img src={Bell} alt="notification" />
      <select name="users" onChange={() => store.users.getUsers(1)}>
        {users.map(user => {
          return (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default Header;
