import React from 'react';
import Comment from '../Comment/Comment';
import './AllComments.scss';
import { observer } from 'mobx-react';
import store from '../../state';
import api from '../../api';

const AllComments = observer(() => {
  return (
    <aside className="AllComments">
      {store.comments.comments.map(userComment => {
        return <Comment userComment={userComment} />;
      })}
    </aside>
  );
});
export default AllComments;
