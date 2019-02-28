import React from 'react';
import HomePage from './home-page.js';
import PostPage from './post-page.js';

import { Route, Switch } from 'react-router-dom';

const ListPage = () => {
  return (
  	<Switch>
		<Route exact path='/posts' component={HomePage}/>
		<Route path='/posts/:postId' component={PostPage}/>
	</Switch>);
};

export default ListPage;