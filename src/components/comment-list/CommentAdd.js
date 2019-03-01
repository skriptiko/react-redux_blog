import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { commentsLoaded } from '../../actions';
import { withBlogService } from '../hoc';
import { compose } from '../../utils';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '8px',
    paddingLeft: '8px'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: '0',
    marginLeft: '0',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    marginRight: '0',
    marginLeft: '0',
  }
});

class CommentAdd extends Component {

  state = {
  	text: ''
  }

  handleChange(e) {
  	this.setState({
  		text: e.target.value
  	});
  }

  handleClick(e) {
  	const { postId, blogService } = this.props;
  	
  	blogService.setNewComment(postId, this.state.text).then((res) => {
  		this.updateComments();
  	});

  	this.setState({
  		text: ''
  	});
  }

  updateComments() {
  	const { postId, blogService } = this.props;
  	blogService.getCommentsByPostId(postId).then((comments) => {
    	this.props.commentsLoaded(comments);
    });
  }

  render() {
    const { classes } = this.props;

    return (
    	<div className={classes.container}>
    		<TextField
        		id="standard-with-placeholder"
        		label="Comment"
        		className={classes.textField}
        		value={this.state.text}
        		margin="normal"
        		onChange={this.handleChange.bind(this)}
        	/>
        	<Button 
        		onClick={this.handleClick.bind(this)}
        		variant="contained"
        		color="primary"
        		className={classes.button}
        	>
    			Add comment
    		</Button>
    	</div>
    )
  }
};

CommentAdd.propTypes = {
	classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts, postId }) => {
  return { 
    posts: posts,
    postId: postId
  };
}

const mapDispatchToProps = {
  commentsLoaded
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(withStyles(styles)(CommentAdd));


