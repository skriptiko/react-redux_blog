
import React from 'react';

const CommentListItem = (props) => {
  const { comment } = props;

  return (
    <div className="card-body">
      {comment.body}
    </div>
  );
}

export default CommentListItem;