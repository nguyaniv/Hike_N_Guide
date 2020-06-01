import React, { Component } from 'react';
import { connect } from 'react-redux';

//Services
import UserService from '../services/user.service';
import OrderService from '../services/order.service';

//Pages/Components
import { OrdersList } from '../cmps/OrdersList';

class _UserProfile extends Component {
  state = {
    user: '',
    orders: '',
    userOrders: '',
    ordersType: 'customersOrders',
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const user = await UserService.getById(id);
    this.setState({ user });
    this.loadOrders();
  }

  async loadOrders() {
    const query = this.state.ordersToRender === 'customersOrders'
      ? { guideId: this.state.user._id }
      : { userId: this.state.user._id };

    const orders = await OrderService.query(query);
    this.setState({ orders });
  }

  render() {
    const { user, orders, ordersType } = this.state;
    // console.log('user', user);
    return user && (
      <main className="user-profile">
        <section className="user-details">
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
            <button className="btn" onClick={ () => { this.setState({ ordersType: 'userOrder' }, this.loadOrders); } }>My orders</button>
            <button className="btn" onClick={ () => { this.setState({ ordersType: 'customersOrders' }, this.loadOrders); } }>Customer orders</button>
          </div>
        </section>
        {/* <section className="order-list"> */}
          {orders && <OrdersList orders={ orders } cmpToRend={ ordersType } />}
        {/* </section> */}
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
