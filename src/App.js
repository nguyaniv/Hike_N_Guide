import React from 'react';
import './style/global.scss';
import {  Switch, Route} from 'react-router-dom';
import {HomePage} from './pages/HomePage'
import {TrailDetailsPage} from './pages/TrailDetailsPage'
import {TrailsPage} from './pages/TrailsPage'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route path="/trail/id" component={ TrailDetailsPage } />
        <Route path="/trail" component={ TrailsPage } />
        <Route path="/" component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;
