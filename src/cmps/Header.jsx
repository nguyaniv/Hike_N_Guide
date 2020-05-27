import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import history from '../history';

export class Header extends React.Component {
  state = {
    headerColorClass: '',
    menuActiveClass: '',
    navOpenedClass: '',
  };

  setHeaderColor = () => {
    if (history.location.pathname === '/') {
      this.setState(prevState => ({ ...prevState, headerColorClass: '' }));
      window.addEventListener('scroll', this.handleScroll);
    } else {
      window.removeEventListener('scroll', this.handleScroll);
      this.setState(prevState => ({ ...prevState, headerColorClass: 'header-colored' }));
    }
  }

  componentDidMount() {
    // this.setHeaderColor();
  }

  handleScroll = () => {
    if (window.pageYOffset > 50) {
      if (!this.state.headerColorClass) {
        this.setState(prevState => ({ ...prevState, headerColorClass: 'header-colored' }));
      }
    } else if (this.state.headerColorClass) {
      this.setState(prevState => ({ ...prevState, headerColorClass: '' }));
    }
  }

  toggleMenu = () => {
    // this.setHeaderColor();
    this.setState(prevState => ({
      ...prevState,
      menuActiveClass: prevState.menuActiveClass === 'is-active' ? '' : 'is-active',
      navOpenedClass: prevState.navOpenedClass === 'opened' ? '' : 'opened',
    }));
  }

  render() {
    return (
      <header className={ `main-header ${this.state.headerColorClass}` }>
          <Link
          className="main-header-home-link"
          to="/"
          // onClick={ () => { history.push('/'); this.setHeaderColor(); } }>
          onClick={ () => { history.push('/'); } }>
            <h1 className="main-header-logo">
              Hike & Guide
            </h1>
          </Link>
          <nav
          className={ `main-header-nav ${this.state.navOpenedClass}` }
          onClick={ () => this.toggleMenu() }>
            <NavLink exact className="main-header-link" to="/" activeClassName="selected">Home</NavLink>
            <NavLink className="main-header-link" to="/trail" activeClassName="selected">Trails</NavLink>
            <NavLink className="main-header-link" to="/guide" activeClassName="selected">Guides</NavLink>
            <NavLink className="main-header-link" to="/login" activeClassName="selected">Login</NavLink>
          </nav>
          <button
          className={ `hamburger hamburger--spin ${this.state.menuActiveClass}` }
          type="button"
          onClick={ () => this.toggleMenu() }>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </header>
    );
  }
}
