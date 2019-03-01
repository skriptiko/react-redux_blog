import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from '../../utils';
import { commentsLoaded } from '../../actions';

import { withBlogService } from '../hoc';
import Spinner from '../spinner';
import { CommentsList } from '../comment-list';

import './PostItem.css';

class PostItem extends Component {

  componentDidMount() {
    const { blogService, match, posts } = this.props;
    const postId = parseInt(match.params.postId.replace(':', ''), 10);
    const post = posts.filter(post => postId === post.id)[0];

	  blogService.getCommentsByPostId(postId).then((comments) => {
    	this.props.commentsLoaded(comments);
    });
  }

  render() {
  	const { loading, posts, postId } = this.props;

  	const post = posts.filter(post => postId === post.id)[0];
  	if (loading || !post) {
  		return <Spinner />
  	}

  	const commmentList = ('comments' in post) ? <CommentsList comments={post.comments} /> : null;

  	return (
  		<div className='post-page-container'>
        <div className='post-container'>
          <h4>{post.title}</h4>
          <span>{post.body}</span>
        </div>
        {commmentList}
	    </div>
    );
  }
}

const mapStateToProps = ({ posts, loading, postId }) => {
  return { 
    posts: posts,
    loading: loading,
    postId: postId
  };
}

const mapDispatchToProps = {
  commentsLoaded
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PostItem);
