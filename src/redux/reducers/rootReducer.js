import {combineReducers} from 'redux';
import authReducer from './authReducer';
import commonReducer from './commonReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
  authReducer,
  commonReducer,
  productReducer,
  cartReducer
});

export default rootReducer;
