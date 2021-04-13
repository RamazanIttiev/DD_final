import React from 'react';
import './Header.scss';
import Search from '../Search/Search';
import Bell from '../../assets/icons/notification.svg';

const Header = () => {
  return (
    <div className="Header">
      <Search />
      <img src={Bell} alt="notification" />
    </div>
  );
};

export default Header;
