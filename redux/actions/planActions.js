import * as Plan from "../actionTypes/planActionType";
import * as PlaneApi from "../../services/plan";

export const PlaneList = () => async (dispatch) => {
  const res = await PlaneApi.Plan();
  dispatch({
    type: Plan.PLANE_LIST,
    payload: res.data.data,
  });
  return res.data;
};

export const addPlan = (data, token) => async (dispatch) => {
  const res = await PlaneApi.insertPlan(data, token);
  dispatch({
    type: Plan.ADD_PLAN,
    payload: res.data,
  });
  return res.data;
};

export const getSinglePlan = (id, token) => async (dispatch) => {
  const res = await PlaneApi.getPlan(id, token);
  dispatch({
    type: Plan.GET_PLAN,
    payload: res.data.data,
  });
  return res.data;
};

export const updatePlan = (id, data, token) => async (dispatch) => {
  const res = await PlaneApi.updatePlan(id, data, token);
  dispatch({
    type: Plan.UPDATE_PLAN,
    payload: res.data,
  });
  return res.data;
};

export const deletePlan = (id, token) => async (dispatch) => {
  const res = await PlaneApi.deletePlan(id, token);
  dispatch({
    type: Plan.DELETE_PLAN,
    payload: id,
  });
  return res.data;
};
