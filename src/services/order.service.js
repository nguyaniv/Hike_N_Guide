import HttpService from './http.service';

const END_POINT = 'order';

export default {
  query,
  save,
  remove,
};

function query(filter = null) {
  return HttpService.get(END_POINT, filter);
}

function save(order) {
  if (order._id) {
    return HttpService.put(`${END_POINT}/${order._id}`, order);
  }
  return HttpService.post(`${END_POINT}`, order);
}

function remove(orderId) {
  return HttpService.delete(`${END_POINT}/${orderId}`);
}
