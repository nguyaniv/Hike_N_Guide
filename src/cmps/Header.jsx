import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  state = { extraClass: '' };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll=() => {
    if (window.pageYOffset > 50) {
      if (!this.state.extraClass) {
        this.setState({ extraClass: 'header-colored' });
      }
    } else if (this.state.extraClass) {
      this.setState({ extraClass: '' });
    }
  }

  render() {
    return (
      <header className={ `main-header ${this.state.extraClass}` }>
          <Link className="main-header-home-link" to="/">
            <h1 className="main-header-logo">
              Hide & Hike
            </h1>
          </Link>
          <nav className="main-header-nav">
            <Link className="main-header-link" to="/login">Login</Link>
          </nav>
        </header>
    );
  }
}
