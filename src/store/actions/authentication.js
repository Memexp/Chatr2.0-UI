import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
    localStorage.removeItem("token");
  }
};

export const login = userData => {
  return async dispatch => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;

      setAuthToken(user.token);
      const decodedUser = jwt_decode(user.token);
      dispatch(setCurrentUser(decodedUser));
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
      setAuthToken(user.token);
      const decodedUser = jwt_decode(user.token);
      dispatch(setCurrentUser(decodedUser));
    } catch (error) {
      setErrors(error);
    }
    dispatch(login(userData));
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const checkForExpiredToken = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};
