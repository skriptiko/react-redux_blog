import React, { Component } from 'react';
import CommentListItem from '../comment-list-item';

import { connect } from 'react-redux';

class PostList extends Component {
  render () {
    const { comments } = this.props;
    console.log(comments);
    return (
      <ul>
        {
          comments.map((comment, index) => {
            return (
              <li key={index}> <CommentListItem comment={comment} /> </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts: posts };
}

export default connect(mapStateToProps)(PostList);