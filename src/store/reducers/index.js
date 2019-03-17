import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import channelReducer from "./channel";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  channelM: channelReducer
});
