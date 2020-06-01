import React from 'react';
import moment from 'moment';



export function Order({
  order, onDelete, isGuide, orderUpdate,
}) {
    moment.locale('il');

  function getStatus() {
    const status = {};

    status.style = {
      color: getColorStyle(),
    };
    status.msg = getMsg();
    status.isFinished = order.trailAt > Date.now();

    return status;
  }

  function getColorStyle() {
    if (order.isCanceled) return '#a10b00';
    if (order.isConfirmed || order.trailAt > Date.now()) return '#4CAF50';
    return '#eb8900';
  }

  function getMsg() {
    if (order.isCanceled) return 'Canceled';
    if (order.trailAt > Date.now()) return 'Finished';
    if (order.isConfirmed) return 'Confirmed';
    return 'Waiting for confirm';
  }

  function onCancel() {
    order.isCanceled = true;
    orderUpdate(order);
  }

  function onConfirm() {
    order.isConfirmed = true;
    orderUpdate(order);
  }

  const status = getStatus();
  return (
        <aside className="order">
            <header >
                <div className="row">
                  <p className="title">Create at</p><p>{moment(order.createAt).format('DD/MM/YY')}</p>
                </div>
                {!isGuide
                    && <div className="row">
                        <p className="title">Guide</p>
                        <p>{order.guide.fullName}</p>
                        <img className="avatar-img" src={ order.guide.imgUrl } />
                  </div>}

                {isGuide
                    && <div className="row">
                        <p className="title">By</p>
                        <p>{order.buyerUser.fullName}</p>
                        <img className="avatar-img" src={ order.buyerUser.imgUrl } />
                    </div>}
            </header>
            <main>
                <section className="order-details">
                    <div className="row row-order">
                        <p className="title">Trail date</p>
                      <p>{moment(order.trailAt).format('DD/MM/YY')}</p>
                    </div>
                    <div className="row">
                        <p className="title">People</p><p>{order.peopleCount}</p>
                    </div>
                    <div className="row">
                        <p className="title">Price</p><p>{order.price}$</p>
                    </div>
                </section>
                <section>
                    <div className="status">
                        <p className="title">Status</p>
                        <p className="status-msg" style={ status.style }>{status.msg}</p>
                        {isGuide
                            && <div className="btn-panel">
                                {!(order.isCanceled || status.isFinished) && (order.isConfirmed
                                  ? <button className="btn delete" onClick={ onCancel }>Cancel</button>
                                  : <button className="btn confirm" onClick={ onConfirm } >Confirm</button>
                                )}
                                {(order.isCanceled || status.isFinished)
                                    && <button className="btn delete" onClick={ () => { onDelete(order._id); } }>Delete</button>}
                          </div>}

                        {!isGuide
                            && <div className="btn-panel">
                                {(order.isCanceled || status.isFinished)
                                  ? <button className="btn delete" onClick={ () => { onDelete(order._id); } }>Delete</button>
                                  : <button className="btn delete" onClick={ onCancel }>Cancel</button>
                                }
                          </div>}

                    </div>
                </section>
            </main>
        </aside>
  );
}
