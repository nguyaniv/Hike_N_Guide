import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import history from '../history';
import { List } from '../cmps/List';
import { loadTrails } from '../store/actions/trailsActions';
import { loadUsers } from '../store/actions/userAction';

class _HomePage extends Component {
  componentDidMount() {
    this.props.loadTrails();
    this.props.loadUsers();
  }

  render() {
    const { trails, users } = this.props;
    const guides = users.filter(user => user.trails);
    return (
      <main className="homepage">
        <img src="/img/main-background.jpg" alt="" className="homepage-background"/>
        <h2 className="homepage-main-heading">Find hiking trails and guides worldwide</h2>
        <h2 className="homepage-list-heading">Popular Trails</h2>
        <List items={ trails.slice(0, 6) }/>
        {/* <Link to="/trail">
          <button className="homepage-show-more-button">
            Show more
          </button>
        </Link> */}
        <h2 className="homepage-list-heading">Popular Guides</h2>
        <List items={ guides.slice(0, 8) }/>
        {/* <Link to="/guide">
          <button className="homepage-show-more-button">
            Show more
          </button>
        </Link> */}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  trails: state.trail.trails,
  users: state.user.users,
});

const mapDispatchToProps = {
  loadTrails,
  loadUsers,
};
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);
