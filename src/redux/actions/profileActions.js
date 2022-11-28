import * as types from '../types';
import { endpoints } from '../config';
import { get,post  } from '../Api/index';
import { showToast } from '../Api/HelperFunction';

export const getProfile = () => {
    return async dispatch => {
      return new Promise(async (resolve, reject) => {
        try {
          // dispatch({
          //   type: types.LOADING_START,
          // });
          const res = await get(endpoints.users.getProfile);
         
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