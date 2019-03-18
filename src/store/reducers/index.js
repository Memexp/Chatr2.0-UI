import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import channelReducer from "./channel";
import channelsReducer from "./channels";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  channelM: channelReducer,
  channels: channelsReducer
});
