import { combineReducers } from 'redux';
import userReducer from './userReducer';
import trailReducer from './trailReducer';
import reviewReducer from './reviewReducer';

const rootReducer = combineReducers({
  user: userReducer,
  trail: trailReducer,
  review: reviewReducer,
});

export default rootReducer;
