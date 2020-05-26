import HttpService from './http.service';

export default {
  query,
  getById,
  remove,
  add,
  edit
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
  return addedTrail;
}

async function edit(trail) {
 trail.isEditMode =false
  const trailToEdit = await HttpService.put(`trails/${trail._id}`, trail)
  return trailToEdit
}

function makeId(length = 3) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}