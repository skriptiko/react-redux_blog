// import React from 'react';

// const CommentListItem = ({ post }) => {
//   return (
//     <div>
//       <span>CommentListItem</span>
//     </div>
//   );
// };

// export default CommentListItem;

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%',
  },
});

function CommentListItem(props) {
  const { classes, comment } = props;


  return (
      <Paper className={classes.root} elevation={1}>
        <Typography component="p">
          {comment.body}
        </Typography>
      </Paper>
  );
}

CommentListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentListItem);