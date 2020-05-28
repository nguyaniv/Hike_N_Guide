import { combineReducers } from 'redux';
import userReducer from './userReducer';
import trailReducer from './trailReducer';
import reviewReducer from './reviewReducer';
import loadingReducer from './loadingReducer';
// import orderReducer from './orderReducer';


const rootReducer = combineReducers({
  user: userReducer,
  trail: trailReducer,
  review: reviewReducer,
  loading: loadingReducer,
  // order: orderReducer,
});

export default rootReducer;
