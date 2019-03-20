import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channel: []
  // loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_DETAIL:
      return {
        ...state,
        channel: action.payload
        // loading: false
      };

    case actionTypes.POST_MESSAGE:
      return {
        ...state
        // channel: state.channel.concat(action.payload)
      };

    case actionTypes.GET_MESSAGES:
      return {
        ...state,
        channel: state.channel.concat(action.payload)
      };

    // case actionTypes.SET_CHANNEL_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };

    default:
      return state;
  }
};

export default reducer;
