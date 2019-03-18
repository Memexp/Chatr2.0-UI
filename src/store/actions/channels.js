import * as actionTypes from "./actionTypes";

import axios from "axios";
import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

export const fetchChannels = () => {
  return async dispatch => {
    try {
      const res = await instance.get("channels/");
      const channels = res.data;
      //
      dispatch({
        type: actionTypes.FETCH_CHANNELS,
        payload: channels
      });
    } catch (error) {
      setErrors(error);
    }
  };
};

// export const filterAuthors = query => {
//   return {
//     type: actionTypes.FILTER_AUTHORS,
//     payload: query
//   };
// };

export const addChannel = (channel, closeModel) => {
  let newChannelName = {
    name: [channel.name]
  };

  return async dispatch => {
    try {
      const res = await instance.post("channels/create/", channel);
      // const newChannel = res.data;
      dispatch({
        type: actionTypes.ADD_CHANNEL,
        payload: newChannelName
      });
      closeModel();
    } catch (error) {
      setErrors(error);
    }
  };
};
