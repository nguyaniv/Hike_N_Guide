import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserService from '../services/user.service';
// import {  } from '../store/actions/user';


class _UserProfile extends Component {
    state = {
      user: '',
    }

    componentDidMount() {
      const { id } = this.props.match.params;
      const user = UserService.getById(id);
      console.log(user);

      if (!this.props.loggedInUser) {
        this.props.history.goBack();
      }
    }

    render() {
      const { user } = this.state;
      return (
        <main>
          {user
              && <img src={ user.imgUrl } alt={ user.fullName } />
              //   <p>Hello {user.fullName} </p>
          }
        </main>
      );
    }
}

const mapStateToProps = state => ({
  loggedInUser: state.user.loggedInUser,
});
const mapDispatchToProps = {

};

export const UserProfile = connect(mapStateToProps, mapDispatchToProps)(_UserProfile);
