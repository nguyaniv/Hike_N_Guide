import React from 'react';

//Pages/Components
import { CustomerOrder } from './CustomerOrder';
import { UserOrder } from './UserOrder';

export function OrdersList({ orders, cmpToRend }) {
  switch (cmpToRend) {
    case 'customersOrders':
      return (
        <div className="orders-list">
          <p className="title">Customer orders</p>
          {orders && orders.map(order => <CustomerOrder key={order._id} order={order} />)}
        </div>
      );

    case 'userOrder':
      return (
        <div className="orders-list">
          <p className="title">My orders</p>
          {orders && orders.map(order => <UserOrder key={order._id} order={order} />)}
        </div>
      );

    default:
      return 'Sorry! We have some problem :(';
  }
}
