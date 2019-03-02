import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from '../../utils';

import { withBlogService } from '../hoc';
import { addNewPost } from '../../actions';

import { Link, Redirect } from 'react-router-dom';

import './PostAdd.css';

class PostAdd extends Component {

  handleSubmit(event) {
    event.preventDefault();

    const title = event.target.elements[0].value;
    const body = event.target.elements[1].value;
    event.target.elements[0].value = '';
    event.target.elements[1].value = '';

    const { blogService } = this.props;

    blogService.setNewPost(title, body).then((post) => {
      this.props.addNewPost(post);
    });
  }

  render() {
    const { isRedirectToPostList } = this.props;
    if (isRedirectToPostList === true) {
        return <Redirect to="/posts" />
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="formControl">Title</label>
          <input type="text" className="form-control" id="formControl" />
        </div>
        <div className="form-group">
          <label htmlFor="formControlTextarea">Body</label>
          <textarea className="form-control" id="formControlTextarea" rows="3"></textarea>
        </div>
        <div className="form-group post-add-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to={`/posts`}> <button className="btn btn-secondary">Cansel</button></Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ( {isRedirectToPostList} ) => {
  return {
    isRedirectToPostList
  };
}

const mapDispatchToProps = {
  addNewPost
};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PostAdd);
