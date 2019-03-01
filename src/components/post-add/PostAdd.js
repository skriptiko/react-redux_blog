import React, { Component } from 'react';

import './PostAdd.css';

class PostAdd extends Component {

  state = {
    title: '',
    text: ''
  }


  handleInput(e) {
    const obj = {};
    let key = (e.target.id === 'title-input') ? 'title' : 'text'
    obj[key] = e.target.value;
    this.setState(obj);
  }

  handleClick(e) {
    const { handleForm } = this.props;
    const data = (e.target.id === 'btn-add') ? this.state : null;
    handleForm(data);
    this.setState({
      title: '',
      text: ''
    });
  }

  render() {

 
    return (
      <div className="post-add-cont">
        <div className="post-add-form">
          <div className="form-group">
            <label htmlFor="title-input">Title</label>
            <input
              value={this.state.title}
              onChange={this.handleInput.bind(this)}
              type="text"
              className="form-control"
              id="title-input"
              aria-describedby="emailHelp" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="text-input">Text</label>
            <textarea
              value={this.state.text}
              onChange={this.handleInput.bind(this)}
              className="form-control"
              id="text-input"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="post-add-btn"> 
          <button
            onClick={this.handleClick.bind(this)}
            className="btn btn-secondary"
            id="btn-add"
          >Add Post</button>
          <button
            onClick={this.handleClick.bind(this)}
            className="btn btn-secondary"
            id="btn-cansel"
          >Cancel</button>
        </div>
      </div>
    );
  }
  
}

export default PostAdd;
