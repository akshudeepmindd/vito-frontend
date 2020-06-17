import * as Toast from "../actionTypes/toastActionType";

export default (state = { path: "" }, action) => {
  switch (action.type) {
    case Toast.TOAST_STATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
