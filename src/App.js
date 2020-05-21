import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style/global.scss';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;
