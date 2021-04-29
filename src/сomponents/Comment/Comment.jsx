import React from 'react';
import './Comment.scss';
import store from '../../state';

const Comment = props => {
  const { taskTitle, id, usersName, usersAvatar } = props.userComment;
  let commentTime = new Date();

  return (
    <div className="Comment" key={id}>
      <div className="Comment__heading">
        <div className="Comment__avatar">
          <img src={usersAvatar} alt="" />
        </div>
        <div className="Comment__wrapper">
          <div className="Comment__title">
            <span className="Comment__name">{usersName}</span>
            <span className="Comment__date">- {commentTime.toLocaleString()}</span>
          </div>
          <span className="Comment__task">{taskTitle}</span>
        </div>
      </div>
      {store.comments.messages.map(({ text, taskId, id }) => {
        if (props.userComment.taskId === taskId) {
          return (
            <span className="Comment__message" key={id}>
              {text}
            </span>
          );
        }
      })}
    </div>
  );
};

export default Comment;
