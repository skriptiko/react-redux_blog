import React from 'react';

const CommentListItem = ({ post }) => {
  const { body } = post;
  return (
    <div>
      <span>{body}</span>
    </div>
  );
};

export default CommentListItem;