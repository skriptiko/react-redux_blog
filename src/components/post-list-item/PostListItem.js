
import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = (props) => {
  const { post } = props;

  return (
      <div>
        <h4><Link to={`/posts/:${post.id}`}> {post.title}</Link></h4>
        <span>{post.body}</span>
      </div>
  );
}

export default PostListItem;
