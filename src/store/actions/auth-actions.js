import * as TYPES from '../constants';
import axios from 'axios';
import {Config} from '../../../config';
import {endPoints} from '../endPoints';

//--------------------Signup--------------------
export const signupThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.SIGN_UP_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.singup,
        params,
      );
      if (response.status == 200) {
        console.log('SINGUP :', response);
        dispatch({
          type: TYPES.SIGN_UP_SUCCESS,
          response,
        });
      } else {
        dispatch({
          type: TYPES.SIGN_UP_FAILURE,
          response,
        });
      }
      return response;
    } catch (error) {
      dispatch({
        type: TYPES.SIGN_UP_FAILURE,
        error,
      });
      return error;
    }
  };
};

//--------------------Verify OTP--------------------
export const verifyOTPThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.OTP_VERIFY_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.verifyOTP,
        params,
      );
      if (response.status == 200) {
        console.log('VERIFY OTP :', response);
        dispatch({
          type: TYPES.OTP_VERIFY_SUCCESS,
          response,
        });
      } else {
        dispatch({
          type: TYPES.OTP_VERIFY_SUCCESS,
          response,
        });
      }
      return response;
    } catch (error) {
      dispatch({
        type: TYPES.OTP_VERIFY_FAILURE,
        error,
      });
      return error;
    }
  };
};

//--------------------Login--------------------
export const loginThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.LOGIN_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.login,
        params,
      );
      console.log('LOGIN :', response);
      if (response.status == 200) {
        dispatch({
          type: TYPES.LOGIN_SUCCESS,
          response,
        });
      } else {
        dispatch({
          type: TYPES.LOGIN_FAILURE,
          response,
        });
      }
      return response;
    } catch (error) {
      dispatch({
        type: TYPES.LOGIN_FAILURE,
        error,
      });
      return error;
    }
  };
};

//--------------------Forgot Password--------------------
export const forgotPassThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.OTP_VERIFY_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.forgotPassword,
        params,
      );
      if (response.status == 200) {
        console.log('FORGOT PASSWORD :', response);
        dispatch({
          type: TYPES.FORGOT_PASSWORD_REQUEST,
          response,
        });
      } else {
        dispatch({
          type: TYPES.FORGOT_PASSWORD_SUCCESS,
          response,
        });
      }
      return response;
    } catch (error) {
      dispatch({
        type: TYPES.FORGOT_PASSWORD_FAILURE,
        error,
      });
      return error;
    }
  };
};

//--------------------Reset Password--------------------
export const resetPassThunk = params => {
  return async dispatch => {
    dispatch({type: TYPES.OTP_VERIFY_REQUEST});
    try {
      let response = await axios.post(
        Config.BASE_URL + endPoints.resetPassword,
        params,
      );
      if (response.status == 200) {
        console.log('RESET PASSWORD :', response);
        dispatch({
          type: TYPES.RESET_PASSWORD_REQUEST,
          response,
        });
      } else {
        dispatch({
          type: TYPES.RESET_PASSWORD_SUCCESS,
          response,
        });
      }
      return response;
    } catch (error) {
      dispatch({
        type: TYPES.RESET_PASSWORD_FAILURE,
        error,
      });
      return error;
    }
  };
};
