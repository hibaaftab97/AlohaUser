import * as types from '../types';
import { endpoints } from '../config';
import { get, post, put,  } from '../Api/index';
import { showToast } from '../Api/HelperFunction';


export const userLogin = data => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        // dispatch({
        //   type: types.LOADING_START,
        // });
        const res = await post(endpoints.auth.login, data, true);
        // dispatch({
        //   type: types.LOADING_END,
        // });
        console.log("res RESPONSE: ", res);
      setTimeout(() => showToast('Logged in Successfully'), 500)  
        resolve(res);
        dispatch({ type: types.LOGIN, payload:  res?.data  });
        
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const userSignup = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await post(endpoints.auth.register, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        
        // dispatch({ type: types.LOGIN, payload:  res?.data  });
        showToast('Registered Successfully');
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const userLogout = () => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await post(endpoints.auth.logout, );
        dispatch({
          type: types.LOADING_END,
        });
        
        dispatch({ type: types.LOGOUT, });
        showToast('Logged out Successfully');
        
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const updateProfile = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await put(endpoints.vendors.updateProfile, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        
        // dispatch({ type: types.LOGIN, payload:  res?.data  });
        // showToast('Profile in Successfully');
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const forgotpassword = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await post(endpoints.auth.forgotpassword, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const getOrders = () => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        // dispatch({
        //   type: types.LOADING_START,
        // });
        const res = await get(endpoints.users.getOrders,);
        dispatch({
          type: types.LOADING_END,
        });
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const getOrderDetails = (id) => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        // dispatch({
        //   type: types.LOADING_START,
        // });
        const res = await get(endpoints.users.getOrderDetail+`/${id}`);
        dispatch({
          type: types.LOADING_END,
        });
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const verifyCode = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await post(endpoints.auth.verifycode, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

export const resetpassword = data => {
  console.log(data, 'loginData');
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.LOADING_START,
        });
        const res = await post(endpoints.auth.resetpassword, data, true);
        dispatch({
          type: types.LOADING_END,
        });
        resolve(res);
      } catch (e) {
        dispatch({
          type: types.LOADING_END,
        });
        reject(e);
        showToast(e);
      }
    });
  };
};

