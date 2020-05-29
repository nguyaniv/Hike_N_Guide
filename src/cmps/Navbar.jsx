import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import history from '../history';

class _Navbar extends React.Component {
  state = {
    headerColorClass: '',
    menuActiveClass: '',
    navOpenedClass: '',
    loggedInUser: {
      _id: 'aRmDjhBd4b',
      userName: 'rogeliog',
      fullName: 'Rogelio Geisbauer',
      password: '5zxjlm9A',
      isAdmin: false,
      imgUrl: 'http://randomuser.me/api/portraits/men/29.jpg',
      rating: 3,
      reviewers_count: 4,
      languages: [
        'he',
        'en',
      ],
      trails: [
        {
          _id: '1a6',
          name: 'Triglav National Park',
          country: 'Slovenia',
        },
      ],
    },
  };

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      loggedInUser: this.props.loggedInUser,
    }));
  }

  setHeaderColor = () => {
    if (history.location.pathname === '/') {
      this.setState(prevState => ({ ...prevState, headerColorClass: '' }));
      window.addEventListener('scroll', this.handleScroll);
    } else {
      window.removeEventListener('scroll', this.handleScroll);
      this.setState(prevState => ({ ...prevState, headerColorClass: 'header-colored' }));
    }
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
    this.setState(prevState => ({
      ...prevState,
      menuActiveClass: prevState.menuActiveClass === 'is-active' ? '' : 'is-active',
      navOpenedClass: prevState.navOpenedClass === 'opened' ? '' : 'opened',
    }));
  }

  render() {
    const { loggedInUser } = this.state;
    return (
      <header className={ `main-header ${this.state.headerColorClass}` }>
          <Link
          className="main-header-home-link"
          to="/"
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
            <NavLink
              className="main-header-link"
              to={ loggedInUser ? '/logout' : '/login' }
              activeClassName="selected">
                {loggedInUser ? 'Logout' : 'Login'}
            </NavLink>
            { loggedInUser
              && <NavLink
                  to={ `profile/${loggedInUser._id}` }
                  className="main-header-link"
                  activeClassName="selected"
                >
                  <img src={ loggedInUser.imgUrl } alt={ loggedInUser.fullName } className="user-profile-link-image"/>
                </NavLink
            >}
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

const mapStateToProps = state => ({
  loggedInUser: state.user.loggedInUser,
});

export const Navbar = connect(mapStateToProps)(_Navbar);
