import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Switch, Route, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';
import store from './store/store';




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
