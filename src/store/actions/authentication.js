import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

const setAuthToken = token => {};

export const checkForExpiredToken = () => {};

export const login = userData => {};

export const signup = userData => {
  return async dispatch => {
    try {
      await instance.get("/signup", userData);
    } catch (error) {
      setErrors(error);
    }
    // dispatch(login(userData));
  };
};

export const logout = () => {};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
