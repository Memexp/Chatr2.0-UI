import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channel: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNEL_DETAIL:
      return {
        ...state,
        channel: action.payload
        //loading: false
      };

    // case actionTypes.POST_Messege:
    //   return {
    //     ...state,
    //     author: {
    //       ...state.author,
    //       books: state.author.books.concat(action.payload)
    //     }
    //   };

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
