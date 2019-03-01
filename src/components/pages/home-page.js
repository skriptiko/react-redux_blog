
import React, { Component } from 'react';
import PostList from '../post-list';
import PostAdd from '../post-add';

import { connect } from 'react-redux';
import { compose } from '../../utils';

import { withBlogService } from '../hoc';

class HomePage extends Component {
  state = {
  	isActivAddPanel: false
  }

  handleClick() {
  	this.setState({
  		isActivAddPanel: true
  	});
  }

  handleForm(data) {
  	console.log(data)
  	this.setState({
  		isActivAddPanel: false
  	});
  }

  render() {
  	const btnElement = <button
  		onClick={this.handleClick.bind(this)}
  		className='btn btn-secondary'
  	>
  		ADD POST
  	</button>;
  	const postAddElement = <PostAdd
  		handleForm={this.handleForm.bind(this)}
  	/>;

    return (
    	<div>
        	<PostList />
        	{this.state.isActivAddPanel ? postAddElement : btnElement }
    	</div>
    );
  }
}

const mapStateToProps = ({ posts, loading }) => {
  return { 

  };
}

const mapDispatchToProps = {

};

export default compose(
  withBlogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);