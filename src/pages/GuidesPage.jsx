
import React from 'react';
import { connect } from 'react-redux';
import { List } from '../cmps/List';
import { loadUsers } from '../store/actions/userAction';

class _GuidesPage extends React.Component {
  state = {
    usersToShow: [],
  }

  componentDidMount() {
    this.props.loadUsers()
      .then(() => {
        this.setState(prevState => ({
          ...prevState,
          usersToShow: this.props.users
            .filter(user => user.trails)
            .sort((a, b) => b.rating - a.rating),
        }));
      });
  }

  render() {
    const { usersToShow } = this.state;
    return (
      <main>
        <List items={ usersToShow } />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users,
  trail: state.trail,
});
const mapDispatchToProps = {
  loadUsers,
};
export const GuidesPage = connect(mapStateToProps, mapDispatchToProps)(_GuidesPage);
