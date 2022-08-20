import {combineReducers} from 'redux';
import authReducer from './authReducer';
import commonReducer from './commonReducer';
import productReducer from './productReducer';


const rootReducer = combineReducers({
  authReducer,
  commonReducer,
  productReducer
});

export default rootReducer;
