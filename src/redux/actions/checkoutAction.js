import * as types from '../types';
import {endpoints} from '../config';
import {post, customPost} from '../Api/index';
import { showToast } from '../Api/HelperFunction';


export const createOrder = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      const response = await post(endpoints.checkout.createOrder, data, false);

      dispatch({
        type: types.LOADING_END,
      });
console.log('response checkout',response);
      if (response) {
      setTimeout(() => showToast(response.message), 500)  

        // dispatch({
        //   type: types.DELETE_CART,
        // });
      }

      dispatch({
        type: types.LOADING_END,
      });

      return Promise.resolve(response);
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      showToast(e);
    }
  };
};

