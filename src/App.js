import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Switch, Route} from 'react-router-dom';
import {HomePage} from './pages/HomePage'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}

      <Switch>

      <Route path="/" component={HomePage} />

      </Switch>
        

    </div>
  );
}



export default App;
