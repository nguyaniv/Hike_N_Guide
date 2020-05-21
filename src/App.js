import React from 'react';
import './style/global.scss';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { BookingPage } from './pages/BookingPage'
=======
import { Switch, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
>>>>>>> c803b39cd2802a4ac83d67532b9a5da07bf119d4

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BookingPage />
      {/* <NavBar /> */}
      {/* <Switch>
        <Route path="/" component={ HomePage } />
      </Switch> */}
=======
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={ HomePage } />
      </Switch>
      {/* <Footer /> */}
>>>>>>> c803b39cd2802a4ac83d67532b9a5da07bf119d4
    </div>
  );
}

export default App;
