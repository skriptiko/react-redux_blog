import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, PostPage, ListPage } from '../pages';

const App = () => {
  return (
    <main role="main" className="container">
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact />

        <Route
          path='/posts'
          component={ListPage}
          />
      </Switch>
    </main>
  );
};

export default App;