import React from 'react';
import './style/global.scss';
import {  Switch, Route} from 'react-router';
import {HomePage} from './pages/HomePage'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}

      <Switch>

      <Route path="/" component={HomePage} />


      </Switch>
        

      <h2>test</h2>
    </div>
  );
}



export default App;
