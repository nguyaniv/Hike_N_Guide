import React from 'react';
import moment from 'moment';

export function CustomerOrder({ order }) {
  return (
    <aside className="customer-order">
      <header >
        <div className="row">
          <p className="title">Create at</p><p>{moment(order.createAt).format('L')}</p>
        </div>
        <div className="row">
          <p className="title">By</p>
          <p>{order.buyerUser.fullName}</p>
        </div>
      </header>
      <main>
        <div>
          <div className="row">
            <p className="title">Trail date</p>
            <p>{moment(order.trailAt).format('L')}</p>
          </div>
          <div className="row">
            <p className="title">People</p><p>{order.peopleCount}</p>
          </div>
          <div className="row">
            <p className="title">Price</p><p>{order.price}$</p>
          </div>
        </div>
        <div className="btn-panel">
          {order.isConfirmed
            ? <button className="btn">Cancel</button>
            : <button className="btn confirm">Confirm</button>
          }
          <button className="btn delete">Delete</button>
        </div>
      </main>
    </aside>
  );
}
