import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

import { compose } from '../../utils';

import { commentsLoaded, postOpen } from '../../actions';

import { withBlogService } from '../hoc';
import Spinner from '../spinner';
import CommentsList from '../comment-list';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
  },
});

class PostPage extends Component {

  componentDidMount() {
    const { blogService, match, posts } = this.props;
    const postId = parseInt(match.params.postId.replace(':', ''), 10);
    const post = posts.filter(post => postId === post.id)[0];
    const isLoaded = ('comments' in post) || null;

    if (isLoaded) {
    	this.props.postOpen(post);
    } else {
    	blogService.getCommentsByPostId(postId).then((post) => {
	    	this.props.commentsLoaded(post);
	    });
    }
  }
  render() {
  	const { classes, loading, posts, postId } = this.props;
  	const post = posts.filter(post => postId === post.id)[0];
  	if (loading || !post) {
  		return <Spinner />
  	}

  	const commmentList = ('comments' in post) ? <CommentsList comments={post.comments} /> : null;

  	return (
  		<div className='comment-content'>
	    	<Paper className={classes.root} elevation={1}>
	    	  <Typography variant="h5" component="h3">
	    	    {post.title}
	    	  </Typography>
	    	  <Typography component="p">
	    	    {post.body}
	    	  </Typography>
	    	  
	    	</Paper> 
	    	<Paper className={classes.root} elevation={1}>
	    		{commmentList}
	    	</Paper>
	    </div>
	);
  } 
}

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ posts, loading, postId }) => {
  return { 
    posts: posts,
    loading: loading,
    postId: postId
  };
}

const mapDispatchToProps = {
  commentsLoaded,
  postOpen
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(withStyles(styles)(PostPage));
