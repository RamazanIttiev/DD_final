import React from 'react';
import Comment from '../Comment/Comment';
import './AllComments.scss';
import { observer } from 'mobx-react';
import store from '../../state';
import api from '../../api';

const AllComments = observer(() => {
  const comments = store.comments.comments;
  const messages = store.comments.messages;

  return (
    <aside className="AllComments">
      {comments.length !== 0 || messages.length !== 0 ? (
        comments.map(userComment => {
          return <Comment userComment={userComment} />;
        })
      ) : (
        <div className="AllComments__text">Комментарии к заданиям</div>
      )}
    </aside>
  );
});
export default AllComments;
