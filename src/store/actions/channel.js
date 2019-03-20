import * as actionTypes from "./actionTypes";
import { setErrors } from "./errors";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

// const setLoading = () => ({
//   type: actionTypes.SET_AUTHOR_LOADING
// });

export const fetchChannelDetail = channelID => {
  return async dispatch => {
    // dispatch(setLoading());
    try {
      const res = await instance.get(`/channels/${channelID}/`);
      const channel = res.data;

      dispatch({
        type: actionTypes.FETCH_CHANNEL_DETAIL,
        payload: channel
      });
    } catch (error) {
      setErrors(error);
    }
  };
};

export const postMessage = (message, channelID) => {
  return async dispatch => {
    try {
      // const res =
      await instance.post(`/channels/${channelID}/send/`, {
        message: message.message
      });
    } catch (error) {
      setErrors(error);
    }
  };
};

export const lastTimestamp = (id, timestamp) => {
  return async dispatch => {
    try {
      const res = await instance.get(`channels/${id}/?latest=${timestamp}`);
      const messages = res.data;

      dispatch({
        type: actionTypes.GET_MESSAGES,
        payload: messages
      });
    } catch (error) {
      setErrors(error);
    }
  };
};
