import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BlogService from './services/blog-service.js';
import { BlogServiceProvider } from './components/blog-service-context';

import store from './store.js';

import './index.css';

const blogService = new BlogService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BlogServiceProvider value={blogService}>
        <Router>
          <App />
        </Router>
      </BlogServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);