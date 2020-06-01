import React from 'react';

// Services
import OrderServer from '../services/order.service';

//Pages/Components
import { Order } from './Order';

export function OrdersList({ orders, orderType, loadOrders }) {
  async function onDelete(orderId) {
    await OrderServer.remove(orderId);
    loadOrders();
  }

  async function orderUpdate(orderUpdated) {
    await OrderServer.save(orderUpdated);
    loadOrders();
  }

  const isGuide = orderType === 'customerOrder';
  return (
    <section className="order-list">
      {orders && orders.map(order => <Order key={order._id} order={order} onDelete={onDelete} orderUpdate={ orderUpdate } isGuide={ isGuide } />)}
    </section>

  );
}
