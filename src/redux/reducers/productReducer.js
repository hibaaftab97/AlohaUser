import * as types from '../types';
import initialStates from './initialStates';
const initialState = initialStates.productReducer;


const productReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case types.GET_PRODUCTS:
      return {
        ...state,
        products:action.payload,
      
      };

      case types.GET_SERVICES:
        return {
          ...state,
          services:action.payload,
        
        };
  
    
  
    default:
      return state;
  }
};

export default productReducer;
