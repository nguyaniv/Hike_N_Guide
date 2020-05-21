import React from 'react';
import './style/global.scss';
<<<<<<< HEAD
import {  Switch, Route} from 'react-router-dom';
import {HomePage} from './pages/HomePage'
import {TrailDetailsPage} from './pages/TrailDetailsPage'
import {TrailsPage} from './pages/TrailsPage'
=======
import { Switch, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
>>>>>>> b63de1f1295e9dff6c204a79e76ca0a33a0044c5

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/trail/id" component={ TrailDetailsPage } />
        <Route path="/trail" component={ TrailsPage } />
        <Route path="/" component={ HomePage } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
