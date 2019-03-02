
import React, { Component } from 'react';
import CommentListItem from '../comment-list-item';

import './CommentList.css';

class CommentList extends Component {

  render () {
    const { comments } = this.props;
    return (
    	<div className='list-group comment-list-cont'>
	    	{
	          comments.map((comment) => {
	            return (
	              <div key={comment.id} className="list-group-item"> 
	                <CommentListItem comment={comment} />
	              </div>
	            )
	          })
	        }
    	</div>
    );
  }
}

export default CommentList;
