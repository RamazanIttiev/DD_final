import React from 'react';
import './Task.scss';
import author from '../../assets/icons/user.png';

const Task = () => {
  return (
    <div className="Task">
      <span className="Task__title">Evaluate the addition and deletion of user IDs.</span>
      <div className="Task__status">Pending</div>
      <div className="Task__importance">Minor</div>
      <img className="Task__users" src={author} alt="user" />
      <div className="Task__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Task;
