import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

const setAuthToken = token => {
  return dispatch => {
    if (token) {
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      dispatch(setCurrentUser(decodedUser));
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem("token");
      dispatch(setCurrentUser());
    }
  };
};

export const checkForExpiredToken = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        setAuthToken(token);
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = userData => {
  return async dispatch => {
    try {
      const res = await instance.post(`login/`, userData);
      const token = res.data.token;
      dispatch(setAuthToken(token));
      // history.push("//welcome");
    } catch (err) {
      setErrors(err);
    }
  };
};

export const signup = userData => {
  return async dispatch => {
    try {
      let response = await instance.post("signup/", userData);
      let user = response.data;
      dispatch(setAuthToken(user.token));
    } catch (error) {
      setErrors(error);
    }
    // dispatch(login(userData));
  };
};

export const logout = () => {
  return setAuthToken();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
