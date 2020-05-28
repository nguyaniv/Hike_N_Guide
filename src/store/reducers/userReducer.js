let localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);

const initialState = {
  users: [],
  loggedInUser: localLoggedinUser,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.users };

    case 'SET_USER':
      console.log('SET_USER', action.user);

      return { ...state, loggedInUser: action.user };

    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user => (user._id === action.user._id ? action.user : user)),
      };

    case 'ADD_USER':
      return {
        ...state,
        users: [...state.user, action.user],
      };

    case 'USER_REMOVE':
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.userId),
      };

    default:
      return state;
  }
}
