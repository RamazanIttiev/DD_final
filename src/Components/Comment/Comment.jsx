import React from 'react';
import './Comment.scss';
import avatar from '../../assets/img/avatar.png';

const Comment = () => {
  return (
    <div className="Comment">
      <div className="Comment__heading">
        <div className="Comment__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="Comment__wrapper">
          <div className="Comment__title">
            <span className="Comment__name">Alena Curtis</span>
            <span className="Comment__date">- Just Now</span>
          </div>
          <span className="Comment__task">
            Planning for new event at Sydney room for new project on 14:00 PM
          </span>
        </div>
      </div>
      <span className="Comment__message">Amazing! Great work. Keep it up, bro</span>
    </div>
  );
};

export default Comment;
