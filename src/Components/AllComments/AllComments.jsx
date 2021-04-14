import React from 'react';
import Comment from '../Comment/Comment';
import './AllComments.scss';

const AllComments = () => {
  return (
    <aside className="AllComments">
      <Comment />
    </aside>
  );
};

export default AllComments;
