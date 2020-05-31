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
    return (
      <main>
        {user
          && <React.Fragment>
            <section>
              <img src={ user.imgUrl } alt={ user.fullName } />
              <p>{user.fullName}</p>
              <p>Email:</p><p>{user.email}</p>
            </section>
            <section>
              <div className="btns-panel">
                <button>My orders</button>
                <button>Customer orders</button>
              </div>
              <div>
              {customersOrders && <ListCustomerOrders customersOrders={ customersOrders } />}
              </div>
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
