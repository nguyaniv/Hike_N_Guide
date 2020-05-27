import HttpService from './http.service';

export default {
    query,
    getById,
    remove,
    add,
    edit
}

async function query(filter = null) {
    
    const reviews = await HttpService.get('reviews')
    if (!filter) return reviews
    return reviews.filter(review => {
        if (review.guide) {
            console.log('review:', review);
            return review.guide._id === filter.guideId
        } else {
            return review.trail._id === filter.trailId
        }
    })
}



function getById(reviewId) {
    return HttpService.get(`reviews/${reviewId}`);
}

function remove(id) {
    return HttpService.delete(`reviews/${id}`);
}

async function add(review) {
    review._id = makeId();
    const addedTrail = await HttpService.post('reviews', review);
    return addedTrail;
}

async function edit(review) {
    review.isEditMode = false
    const trailToEdit = await HttpService.put(`reviews/${review._id}`, review)
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