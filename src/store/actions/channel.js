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
      // console.log(message);
      // const res =
      await instance.post(`/channels/${channelID}/send/`, {
        message: message.message
      });
      // const newMessageD = res.data;
      // console.log("done", newMessageD);

      // dispatch({
      //   type: actionTypes.POST_MESSAGE,
      //   payload: newMessageD
      // });
    } catch (error) {
      setErrors(error);
    }
  };
};
