import React from 'react';

//Pages/Components
import { CustomerOrder } from './CustomerOrder';

export function ListCustomerOrders({ customersOrders }) {
  return (
    <div>
      {customersOrders.map(order => <CustomerOrder key={ order._id } order={ order } />)}
    </div>
  );
}
