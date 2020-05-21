import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import history from './history';

import { Provider } from 'react-redux'
import  store from './store/store'

import { Router, Switch, Route} from 'react-router';
import { Link } from 'react-router-dom'



ReactDOM.render(
  <Provider store={store}>

    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
