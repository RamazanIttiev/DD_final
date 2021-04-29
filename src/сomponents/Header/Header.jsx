import React from 'react';
import './Header.scss';
import store from '../../state';
import Search from '../Search/Search';
import { observer } from 'mobx-react';
import Bell from '../../assets/icons/notification.svg';

const Header = observer(() => {
  const users = store.users.users;
  const messages = store.comments.messages;

  let usersArr = [];
  // if (typeof users === 'object') {
  //   usersArr.push(users);
  //   return usersArr;
  // }

  const selectUser = user => {
    store.users.getUsers(user);
  };

  return (
    <div className="Header">
      <Search />
      <div className={messages.length !== 0 && 'Header__notification'}>
        <img src={Bell} alt="notification" />
      </div>
      <select name="users" onChange={() => store.users.getUsers(1)}>
        <option key={users.id} value={users.name}>
          {users.name}
        </option>

        {/* {users.map(user => {
          return (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          );
        })} */}
      </select>
    </div>
  );
});

export default Header;
