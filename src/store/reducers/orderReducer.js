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


function getMiniUserObj(user) {
    const { _id, username, fullName } = user;
    const miniUser = {
        _id,
        username,
        fullName,
    };
    return miniUser;
}