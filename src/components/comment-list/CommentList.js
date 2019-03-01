
import React, { Component } from 'react';
import CommentListItem from '../comment-list-item';

import CommentAdd from './CommentAdd.js';

import './CommentList.css';

class CommentList extends Component {

  handleChange = (event) => {
    console.log(event)
  };

  render () {
    const { comments } = this.props;
    return (
    	<div lassName='comment-list-container'>
	    	{
	          comments.map((comment) => {
	            return (
	              <div key={comment.id} > 
	                <CommentListItem comment={comment} />
	              </div>
	            )
	          })
	        }
	    	<CommentAdd handleChange= {this.handleChange}/> 
    	</div>
    );
  }
}

export default CommentList;
