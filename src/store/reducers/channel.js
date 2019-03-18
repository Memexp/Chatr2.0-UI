import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channel: null,
  message: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_DETAIL:
      return {
        ...state,
        channel: action.payload
        //loading: false
      };

    case actionTypes.POST_MESSAGE:
      return {
        ...state,
        channel: {
          ...state.channel,
          message: state.channel.message.concat(action.payload)
        }
      };

    // case actionTypes.SET_AUTHOR_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    default:
      return state;
  }
};

export default reducer;
