
const users = [
    {
        "_id": "aRmDjhBd4b",
        "userName": "rogeliog",
        "fullName": "Rogelio Geisbauer",
        "password": "5zxjlm9A",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/men/29.jpg",
        "rating": 3,
        "reviewers_count": 4,
        "languages": ["he"],
        "trails": {}
    },
    {
        "_id": "ZfRlDUZwJB",
        "userName": "reneed",
        "fullName": "Renee Denard",
        "password": "EbxjfZaj",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/women/16.jpg",
        "rating": 2,
        "reviewers_count": 4,
        "languages": ["en"],
        "trails": {}
    },
    {
        "_id": "ECE1MhOgcP",
        "userName": "aisham",
        "fullName": "Aisha Magano",
        "password": "N4USCZ5B",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/women/23.jpg",
        "rating": 4,
        "reviewers_count": 5,
        "languages": ["he"],
        "trails": {}
    },
    {
        "_id": "K8JCRHqN21",
        "userName": "meerac",
        "fullName": "Meera Crewell",
        "password": "7MbgtkpJ",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/men/77.jpg",
        "rating": 5,
        "reviewers_count": 14,
        "languages": ["he"],
        "trails": {}
    },
    {
        "_id": "JyHAWrdfz1",
        "userName": "pennyc",
        "fullName": "Penny Curtis",
        "password": "b9At4B2f",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/men/62.jpg",
        "rating": 1,
        "reviewers_count": 10,
        "languages": ["en"],
        "trails": {}
    },
    {
        "_id": "wvahkUajdo",
        "userName": "sherryk",
        "fullName": "Sherry Kluger",
        "password": "8Z7vHGSa",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/men/59.jpg",
        "rating": 5,
        "reviewers_count": 11,
        "languages": ["en"],
        "trails": {}
    },
    {
        "_id": "nIa1jDhYo0",
        "userName": "jacquieh",
        "fullName": "Jacquie Hill",
        "password": "YEPQi3eU",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/men/58.jpg",
        "rating": 4,
        "reviewers_count": 10,
        "languages": ["en"],
        "trails": {}
    },
    {
        "_id": "ZmaX5EXPfv",
        "userName": "jessicag",
        "fullName": "Jessica Grigsby",
        "password": "Hmp9nhEy",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/women/93.jpg",
        "rating": 3,
        "reviewers_count": 8,
        "languages": ["he"],
        "trails": "{}"
    },
    {
        "_id": "nbQBvvXdIu",
        "userName": "melodyt",
        "fullName": "Melody Tubbytelly",
        "password": "HX238PyM",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/women/70.jpg",
        "rating": 5,
        "reviewers_count": 6,
        "languages": ["he"],
        "trails": {}
    },
    {
        "_id": "0NwTpQ2Iz5",
        "userName": "abdulf",
        "fullName": "Abdul Feldman",
        "password": "Y3OittiF",
        "isAdmin": false,
        "imgUrl": "http://randomuser.me/api/portraits/women/17.jpg",
        "rating": 4,
        "reviewers_count": 12,
        "languages": ["he"],
        "trails": {}
    }
]


export default {
    query,
    update,
    remove,
    createUser,
    getById
}

function query() {
    const userToSet = users.map(user => {
        user.password = null
        return user
    })
    return Promise.resolve(userToSet);
}

function update(user) {
    users.map(currUser => {
        if (currUser._id === user._id) {
            if (!user.password) user.password = currUser.password
            return user
        }
        return currUser
    })
    return Promise.resolve(user)
}

function remove(userID) {
    const userIdx = users.findIndex(user => user._id === userID)
    let userDeleted = users.splice(userIdx, 1)
    userDeleted.password = null
    return Promise.resolve(userDeleted)
}

function update(user) {
    users.map(currUser =>
        currUser._id === user._id ? user : currUser)
}


function createUser(user) {
    user._id = _makeId(10)
    users.push(user)
    user.password = null
    return Promise.resolve(user)
}

function getById(userId) {
    const user = users.map(user => user._id === userId)
    return Promise.resolve(user)
}



function _makeId(length = 3) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
