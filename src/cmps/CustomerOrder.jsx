import React from 'react';

export function CustomerOrder({ order }) {
  return (
    <aside className="customerOrder">
      <div>
        <div className="row">
          <p className="title">Create at</p><p>{order.createdAt}</p>
        </div>
        <div className="row">
          <p className="title">Customer Name</p>
          <p>{order.buyerUser.fullName}</p>
        </div>
        <div className="row">
          <p className="title">Trail date</p>
          <p>{order.trailAt}</p>
        </div>
        <div className="row">
          <p className="title">People</p><p>{order.peopleCount}</p>
        </div>
        <div className="row">
          <p className="title">Price</p><p>{order.price}</p>
        </div>
      </div>
      <div>
        {order.isConfirmed
          ? <button>OK</button>
          : <button>Cancel</button>
        }
        <button>Delete</button>
      </div>
    </aside>
  );
}
