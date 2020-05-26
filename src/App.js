import React from 'react';
import './style/global.scss';
import { Switch, Route } from 'react-router-dom';
import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';
import { HomePage } from './pages/HomePage';
import { TrailPage } from './pages/TrailPage';
import { BookingPage } from './pages/BookingPage';
import { GuidesPage } from './pages/GuidesPage';
import TrailAdd from './pages/TrailAdd';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/booking/" component={ BookingPage } />
        <Route path="/trail/add" component={ TrailAdd } />
        <Route path="/trail/:id" component={ GuidesPage } />
        <Route path="/trail" component={ TrailPage } />
        <Route exact path="/guide" component={ GuidesPage } />
        <Route exact path="/" component={ HomePage } />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
