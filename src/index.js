import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom';
import store from './store';
import './index.css';
import App from './Components/App';

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);
