import * as Plan from "../actionTypes/planActionType";

export default (state = {}, action) => {
  switch (action.type) {
    case Plan.PLANE_LIST:
      return {
        ...state,
        allPlan: action.payload,
      };
    case Plan.ADD_PLAN:
      return {
        ...state,
        newPlan: action.payload,
      };
    case Plan.GET_PLAN:
      return {
        singleplan: action.payload,
      };
    case Plan.UPDATE_PLAN:
      return {
        ...state,
        updateplan: action.payload,
      };
    case Plan.DELETE_PLAN: {
      return {
        ...state,
        allPlan: state.allPlan.filter((plan) => plan._id !== action.payload),
      };
    }
    default:
      return state;
  }
};
