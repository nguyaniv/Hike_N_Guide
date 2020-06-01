import React from 'react';
import moment from 'moment';

export function CustomerOrder({ order }) {
  return (
    <article className="order">
      <header className="order-header">
        <p className="order-row">
          <span className="order-title">Created at</span><span>{moment(order.createAt).format('L')}</span>
        </p>
        <p className="order-row">
          <span className="order-title">By</span>
          <span>{order.buyerUser.fullName}</span>
        </p>
      </header>
      <main className="order-main">
        <div>
          <p className="order-row">
            <span className="order-title">Trail date</span>
            <span>{moment(order.trailAt).format('L')}</span>
          </p>
          <p className="order-row">
            <span className="order-title">People</span><span>{order.peopleCount}</span>
          </p>
          <p className="order-row">
            <span className="order-title">Price</span><span>{order.price}$</span>
          </p>
        </div>
        <div className="order-btn-panel">
                  {order.isConfirmed
                    ? <button className="order-btn order-btn-cancel">Cancel</button>
                    : <button className="order-btn order-btn-confirm">Confirm</button>
                  }
                  <button className="order-btn order-btn-delete">Delete</button>
              </div>
      </main>
    </article>
  );
}
