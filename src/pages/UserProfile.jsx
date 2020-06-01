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
    orderType: 'userOrder',
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const user = await UserService.getById(id);
    this.setState({ user });
    this.loadOrders();
  }

   loadOrders = async () => {
     const query = this.state.orderType === 'customerOrder'
       ? { guideId: this.state.user._id }
       : { userId: this.state.user._id };

     const orders = await OrderService.query(query);
     console.log('orders', orders);
     this.setState({ orders });
   }

   render() {
     const { user, orders, orderType } = this.state;
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
               <button className="btn" onClick={() => { this.setState({ orderType: 'userOrder' }, this.loadOrders); } }>My orders</button>
               <button className="btn" onClick={() => { this.setState({ orderType: 'customerOrder' }, this.loadOrders); } }>Customer orders</button>
              </div>
            </section>
            <section className="order-list">
             {orders && <OrdersList orders={orders} orderType={ orderType } loadOrders={ this.loadOrders } />}
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
