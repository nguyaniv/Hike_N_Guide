import HttpService from './http.service';

const END_POINT = 'user';

export default {
  query,
  save,
  remove,
  getById,
};

function query(filter = null) {
  const users = HttpService.get(END_POINT, filter);
  return users;
}

function save(user) {
  if (user._id) {
    return HttpService.put(`${END_POINT}/${user._id}`, user);
  }
  return HttpService.post(`${END_POINT}`, user);
}

function remove(userID) {
  return HttpService.delete(`${END_POINT}/${userID}`);
}

function getById(userId) {
  return HttpService.get(`${END_POINT}/${userId}`);
}
