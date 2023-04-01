import * as TYPES from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Config} from '../../../config';
import {endPoints} from '../endPoints';

export const profilePicThunk = async data => {
  const token = await AsyncStorage.getItem('token');
  return async dispatch => {
    dispatch({type: TYPES.LOGIN_REQUEST});
    try {
      // let result = await fetch(Config.BASE_URL + endPoints.profilePic, {
      //   method: 'POST',
      //   headers: {
      //     authorization: token,
      //   },
      //   body: params,
      // });
      let response = await axios(Config.BASE_URL + endPoints.profilePic, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(data),
      });

      // let response = await axios.post(
      //   Config.BASE_URL + endPoints.profilePic,
      //   params,
      //   {
      //     headers: {authorization: token},
      //   },
      // );
      console.log('PROFILE PIC :', result);
      if (response.status == 200) {
        dispatch({
          type: TYPES.PROFILE_PIC_REQUEST,
          response,
        });
      } else {
        dispatch({
          type: TYPES.PROFILE_PIC_SUCCESS,
          response,
        });
      }
      return response;
    } catch (error) {
      dispatch({
        type: TYPES.PROFILE_PIC_FAILURE,
        error,
      });
      return error;
    }
  };
};
