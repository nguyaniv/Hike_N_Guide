import HttpService from './http.service';


export default {
  query,
  getById,
  remove,
  add,
};

function query() {
  return HttpService.get('trails');
}


function getById(trailId) {
  return HttpService.get(`trails/${trailId}`);
}


function remove(id) {
  return HttpService.delete(`trails/${id}`);
}


async function add(trail) {
  trail._id = makeId();
  const addedTrail = await HttpService.post('trails', trail);
  console.log(addedTrail);

  return addedTrail;
}


function makeId(length = 3) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

//json-server --watch data.json --id=_id
