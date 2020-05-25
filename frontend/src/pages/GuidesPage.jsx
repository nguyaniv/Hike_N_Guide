
import React from 'react';
import { connect } from 'react-redux';
import { List } from '../cmps/List';
import { loadUsers } from '../store/actions/userAction';
import { loadTrail } from '../store/actions/trailsActions';
import { TrailDetails } from '../cmps/TrailDetails';

class _GuidesPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadTrail(id);
    this.props.loadUsers();
  }

  // usersToShow = this.props.trail ?
  //   this.props.users.filter(user=> user.trails.some(trail => trail._id === this.props.trail._id)) :
  //   this.props.users;
  usersToShow = this.props.users;

  render() {
    // const { users } = this.props;
    const trailId = this.props.match.params.id;
    return (
      <main>
        {trailId &&

          <div>
            <TrailDetails id={ trailId } />
          </div>
        }
        <List items={ this.usersToShow } />
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
  loadTrail,
};
export const GuidesPage = connect(mapStateToProps, mapDispatchToProps)(_GuidesPage);
