import React from 'react';
import Comment from '../Comment/Comment';
import './AllComments.scss';
import { observer } from 'mobx-react';
import store from '../../state';

const AllComments = observer(() => {
  const taskComment = store.tasks.tasks;
  return (
    <aside className="AllComments">
      {taskComment.map(userComment => {
        return <Comment userComment={userComment} />;
      })}
    </aside>
  );
});
export default AllComments;
