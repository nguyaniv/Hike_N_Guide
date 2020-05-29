import HttpService from './http.service';

export default {
    query,
    getById,
    remove,
    add,
    edit
}

async function query(filter = null) {
    
    const reviews = await HttpService.get('review')
    if (!filter) return reviews
    return reviews.filter(review => {
        if (review.guide) {
            return review.guide._id === filter.guideId
        } else {
            return review.trail._id === filter.trailId
        }
    })
}



function getById(reviewId) {
    return HttpService.get(`review/${reviewId}`);
}

function remove(id) {
    return HttpService.delete(`review/${id}`);
}

async function add(review) {
    review.at = Date.now()
    const addedReview = await HttpService.post('review', review);
    return addedReview;
}

async function edit(review) {
    review.isEditMode = false
    const reviewToEdit = await HttpService.put(`review/${review._id}`, review)
    return reviewToEdit
}


function makeId(length = 3) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}