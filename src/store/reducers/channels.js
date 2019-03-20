import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channels: []
  // loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS:
      return {
        ...state,
        channels: action.payload
        // loading: false
      };
    case actionTypes.ADD_CHANNEL:
      return {
        ...state,
        channels: state.channels.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
