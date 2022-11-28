import * as types from '../types';
import {showToast} from '../Api/HelperFunction';

export const addToCart = data => {
  return async dispatch => {
    try {
      dispatch({
        type: types.LOADING_START,
      });

      dispatch({
        type: types.ADD_TO_CART,
        payload: {
          product_id: data?.id,
          product_name: data?.title,
          quantity: data?.itemQuantity,
          product_price: data?.price,
          product_image: data?.image,
        },
      });

      dispatch({
        type: types.LOADING_END,
      });
    } catch (e) {
      dispatch({
        type: types.LOADING_END,
      });
      showToast(e);
    }
  };
};

export const UpdatetoCart = data => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_CART,
      ItemId: data?.id,
      ItemQuantity: data?.quantity,
    });
  };
};

export const removeFromCart = id => {
  return dispatch => {
    console.log('removeFromCartId2: ', id);
    dispatch({
      type: types.DELETE_FROM_CART,
      itemId: id,
    });
  };
};

export const deleteCart = () => {
  console.log('here');
  return dispatch => {
    dispatch({
      type: types.DELETE_CART,
    });
  };
};
