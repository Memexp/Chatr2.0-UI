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
      console.log(channels);
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

// export const postAuthor = author => {
//   return async dispatch => {
//     try {
//       const res = await instance.post("/api/authors/", author);
//       const newAuthor = res.data;
//       dispatch({
//         type: actionTypes.POST_AUTHOR,
//         payload: newAuthor
//       });
//     } catch (error) {
//       console.error(error.response.data);
//     }
//   };
// };
