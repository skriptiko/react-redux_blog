import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

import { compose } from '../../utils';

import { commentsLoaded } from '../../actions';

import { withBlogService } from '../hoc';
import Spinner from '../spinner';
import CommentsList from '../comment-list';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class PostPage extends Component {


  componentDidMount() {
    const { blogService, match, posts } = this.props;
    const postId = parseInt(match.params.postId.replace(':', ''), 10);
    const data = blogService.getCommentsByPostId(postId).then((post) => {
      this.props.commentsLoaded(post);
      console.log('получили комментарии', post)
    });

  }
  render() {
  	const { classes, loading } = this.props;

  	if (loading) {
  		return <Spinner />
  	}

  	return (
  		<div className='align-content'>
	    	<Paper className={classes.root} elevation={1}>
	    	  <Typography variant="h5" component="h3">
	    	    This is a sheet of paper.
	    	  </Typography>
	    	  <Typography component="p">
	    	    Paper can be used to build surface or other elements for your application.
	    	  </Typography>
	    	 
	    	</Paper> 
	    </div>
	);
  } 
}

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ posts, loading }) => {
  return { 
    posts: posts,
    loading: loading
  };
}

const mapDispatchToProps = {
  commentsLoaded,
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(withStyles(styles)(PostPage));
