import React from 'react';
import './Comment.scss';
import avatar from '../../assets/img/avatar.png';

const Comment = props => {
  const { id, title, userId, comments } = props.userComment;
  let commentTime = new Date();

  return (
    <div className="Comment" key={id}>
      <div className="Comment__heading">
        <div className="Comment__avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="Comment__wrapper">
          <div className="Comment__title">
            <span className="Comment__name">Alena Curtis</span>
            <span className="Comment__date">- {commentTime.toLocaleString()}</span>
          </div>
          <span className="Comment__task">{title}</span>
        </div>
      </div>
      {comments.map(({ id, text }) => {
        return (
          <span className="Comment__message" key={id}>
            {text}
          </span>
        );
      })}
    </div>
  );
};

export default Comment;
