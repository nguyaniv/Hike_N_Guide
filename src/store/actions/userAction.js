import UserService from '../../services/user.service';
// import { loading, doneLoading } from './SystemActions';

export function loadUsers() {
  return async dispatch => {
    try {
      // dispatch(loading());
      const users = await UserService.query();
      dispatch(_setUsers(users));
    } catch (err) {
      console.log('UserActions: err in loadUsers', err);
    } finally {
      // dispatch(doneLoading());
    }
  };
}

export function removeUser(userId) {
  return async dispatch => {
    try {
      await UserService.remove(userId);
      dispatch(_removeUser(userId));
    } catch (err) {
      console.log('UserActions: err in removeUser', err);
    }
  };
}

export function addUser(user) {
  return async dispatch => {
    try {
      const addedUser = await UserService.createUser(user);
      dispatch(_addUser(addedUser));
    } catch (err) {
      console.log('UserActions: err in addUser', err);
    }
  };
}

export function updateUser(user) {
  return async dispatch => {
    try {
      await UserService.updateUser(user);
      dispatch(_updateUser(user));
    } catch (err) {
      console.log('UserActions: err in updateUser', err);
    }
  };
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

// export function login(userCreds) {
//     return async dispatch => {
//         const user = await UserService.login(userCreds);
//         dispatch(setUser(user));
//     };
// }
// export function signup(userCreds) {
//     return async dispatch => {
//         const user = await UserService.signup(userCreds);
//         dispatch(setUser(user));
//     };
// }
// export function logout() {
//     return async dispatch => {
//         await UserService.logout();
//         dispatch(setUser(null));
//     };
// }


function _setUsers(users) {
  return {
    type: 'SET_USERS',
    users,
  };
}

function _removeUser(userId) {
  return {
    type: 'USER_REMOVE',
    userId,
  };
}

function _addUser(user) {
  return {
    type: 'USER_ADD',
    user,
  };
}

function _updateUser(user) {
  return {
    type: 'UPDATE_USER',
    user,
  };
}
