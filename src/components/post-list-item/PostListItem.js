// import React from 'react';

// const PostListItem = ({ post }) => {
//   const { title, body } = post;
//   return (
//     <div>
//       <span>{title}</span>
//       <span>{body}</span>
//     </div>
//   );
// };

// export default PostListItem;

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import CommentList from '../comment-list/';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
  },
});

function PostListItem(props) {
  const { classes, post } = props;


  return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          <Link to={`/posts/:${post.id}`}> {post.title}</Link>
        </Typography>
        <Typography component="p">
          {post.body}
        </Typography>
      </Paper>
  );
}

PostListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostListItem);
