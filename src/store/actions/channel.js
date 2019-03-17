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

export const postMessage = (channel, authorID) => {
  //   book = {
  //     ...book,
  //     authors: [authorID]
  //   };
  //   return async dispatch => {
  //     try {
  //       const res = await instance.post(`/api/books/`, book);
  //       const newBook = res.data;
  //       dispatch({
  //         type: actionTypes.POST_BOOK,
  //         payload: newBook
  //       });
  //     } catch (error) {
  //       console.error(error.response.data);
  //     }
  //   };
};
