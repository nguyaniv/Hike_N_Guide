import HttpService from './http.service';

const END_POINT = 'trail';

export default {
  query,
  getById,
  remove,
  add,
};

function query() {
  return HttpService.get(END_POINT);
}


function getById(trailId) {
  return HttpService.get(`${END_POINT}/${trailId}`);
}


function remove(id) {
  return HttpService.delete(`${END_POINT}/${id}`);
}


async function add(trail) {
  const addedTrail = await HttpService.post(END_POINT, trail);
  return addedTrail;
}
