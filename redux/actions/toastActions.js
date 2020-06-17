import * as Toast from "../actionTypes/toastActionType";

export const toastState = (name, message) => dispatch => {
  dispatch({
    type: Toast.TOAST_STATE,
    payload: { toastOpen: name !== null, name, message }
  });
};
