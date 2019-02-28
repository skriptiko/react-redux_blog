import React, { Component } from 'react';
import PostListItem from '../post-list-item';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import { compose } from '../../utils';

import Spinner from '../spinner';

import { withBlogService } from '../hoc';
import { postsLoaded, postRequasted } from '../../actions';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
  },
  inline: {
    display: 'inline',
  },

});

class PostList extends Component {

  componentDidMount() {
    const { blogService, postRequasted } = this.props;
    postRequasted();
    const data = blogService.getListPosts().then((post) => {
      this.props.postsLoaded(post);
    });
  }

  render () {
    const { posts, classes, loading } = this.props;

    if (loading) {
      return <Spinner />
    }

    return (
      <List className={classes.root}>
        {
          posts.map((post) => {
            return (
              <ListItem key={post.id} > 
                <PostListItem post={post} /> 
              </ListItem>
            )
          })
        }
      </List>
    );
  }
}

const mapStateToProps = ({ posts, loading }) => {
  return { 
    posts: posts,
    loading: loading
  };
}

const mapDispatchToProps = {
  postsLoaded,
  postRequasted
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(withStyles(styles)(PostList));
