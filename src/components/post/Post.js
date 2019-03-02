import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from '../../utils';
import { commentsLoaded, addNewComment } from '../../actions';

import { withBlogService } from '../hoc';
import Spinner from '../spinner';
import { CommentsList } from '../comment-list';

import './Post.css'


class PostItem extends Component {

  componentDidMount() {
    const { blogService, match, posts } = this.props;

    const postId = parseInt(match.params.postId.replace(':', ''), 10);
    const post = posts.filter(post => postId === post.id)[0];

	  blogService.getCommentsByPostId(postId).then((comments) => {
    	this.props.commentsLoaded(comments);
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { blogService, postId } = this.props;

    const text = event.target.elements[0].value;
    event.target.elements[0].value = '';

    blogService.setNewComment(postId, text).then((res) => {
      this.props.addNewComment(res);
    });
  }

  render() {
  	const { loading, posts, postId } = this.props;

  	const post = posts.filter(post => postId === post.id)[0];
  	if (loading || !post) {
  		return <Spinner />
  	}

    const commentBlock = <div>
      <CommentsList comments={post.comments} />
      <form onSubmit={this.handleSubmit.bind(this)}>
      
        <div className="form-group">
          <textarea className="form-control" id="formControlTextarea" rows="3"></textarea>
        </div>
        <div className="form-group post-add-btn">
          <button type="submit" className="btn btn-primary">Add comment</button>
        </div>
      </form>
    </div>

  	const commmentList = ('comments' in post) ? commentBlock : null;

  	return (
      <div className="post-cont" >
        <div className="card">
          
          <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
            {post.body}
          </div>
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
  commentsLoaded,
  addNewComment
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PostItem);
