import * as User from "../actionTypes/userActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case User.REGISTER_USER:
      return {
        ...state,
        newUser: action.payload,
      };
    case User.LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case User.VERIFY_USER:
      return {
        ...state,
        emailCheck: action.payload,
      };
    case User.GET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};
