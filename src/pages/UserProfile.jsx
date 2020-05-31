import React, { Component } from 'react';
import { connect } from 'react-redux';


//Services
import UserService from '../services/user.service';
import OrderService from '../services/order.service';

//Pages/Components
import { ListCustomerOrders } from '../cmps/ListCustomerOrders';


class _UserProfile extends Component {
  state = {
    user: '',
    customersOrders: '',
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const user = await UserService.getById(id);
    this.setState({ user });
    const customersOrders = await OrderService.query({ guideId: user._id });
    this.setState({ customersOrders });
  }

  render() {
    const { user, customersOrders } = this.state;
    console.log('user', user);
    return (
      <main className="user-profile">
        {user
          && <React.Fragment>
            <section className="user-detail">
            <div className="box box-img">
                <img className="profile-img" src={ user.imgUrl } alt={ user.fullName } />
                <p className="title-name">{user.fullName}</p>
            </div>
            <div className="box box-detail">
              <div className="row flex space-between">
                <p className="title">Username</p><p>{user.userName}</p>
            </div>
            <div className="row flex space-between">
                <p className="title">Email</p><p>{user.email}</p>
              </div>
            </div>
              <div className="btns-panel">
              <button className="btn">My orders</button>
              <button className="btn">Customer orders</button>
              </div>
            </section>
            <section className="">
                {customersOrders && <ListCustomerOrders customersOrders={ customersOrders } />}
            </section>
          </React.Fragment>
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
