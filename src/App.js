import React from 'react';
import './style/global.scss';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { BookingPage } from './pages/BookingPage'

function App() {
  return (
    <div className="App">
      <BookingPage />
      {/* <NavBar /> */}
      {/* <Switch>
        <Route path="/" component={ HomePage } />
      </Switch> */}
    </div>
  );
}

export default App;
