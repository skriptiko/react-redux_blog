import React, { Component } from 'react';
import PostListItem from '../post-list-item';

import { connect } from 'react-redux';
import { compose } from '../../utils';
import Spinner from '../spinner';

import { withBlogService } from '../hoc';
import { postsLoaded, postRequasted } from '../../actions';

import './PostList.css'

class PostList extends Component {

  componentDidMount() {
    const { blogService, postRequasted } = this.props;
    postRequasted();
    const data = blogService.getListPosts().then((post) => {
      this.props.postsLoaded(post);
    });
  }

  render () {
    const { posts, loading } = this.props;

    if (loading) {
      return <Spinner />
    }

    return (
      <div className='list-group post-list-cont'>
        {
          posts.map((post) => {
            return (
              <div key={post.id} className="list-group-item post-list-cont"> 
                <PostListItem post={post} /> 
              </div>
            )
          })
        }
      </div>
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
)(PostList);
