import * as types from '../types';
import { endpoints } from '../config';
import { get,post  } from '../Api/index';
import { showToast } from '../Api/HelperFunction';

export const getAllShops = () => {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // dispatch({
          //   type: types.LOADING_START,
          // });
          const res = await get(endpoints.users.getallProducts);
          console.log('shops>>>',res);
          dispatch({
            type: types.LOADING_END,
          });
          dispatch({ type: types.GET_PRODUCTS, payload:  res?.data  });
          return resolve(res);
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
  export const getallServices = () => {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // dispatch({
          //   type: types.LOADING_START,
          // });
          const res = await get(endpoints.users.getallServices);
          dispatch({
            type: types.LOADING_END,
          });
          console.log('resres',res);
          dispatch({ type: types.GET_SERVICES, payload:  res?.data  });
          return resolve(res);
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

  export const getServiceDetail = (id) => {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // dispatch({
          //   type: types.LOADING_START,
          // });
          const res = await get(endpoints.users.getServiceByid+`/${id}`);
          dispatch({
            type: types.LOADING_END,
          });
          return resolve(res);
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


  export const getProductDetail = (id) => {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // dispatch({
          //   type: types.LOADING_START,
          // });
          const res = await get(endpoints.users.getProductDetail+`/${id}`);
          dispatch({
            type: types.LOADING_END,
          });
          return resolve(res);
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

  export const bookService = (data) => {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // dispatch({
          //   type: types.LOADING_START,
          // });
          const res = await post(endpoints.users.bookService,data,false);
          dispatch({
            type: types.LOADING_END,
          });
          return resolve(res);
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
