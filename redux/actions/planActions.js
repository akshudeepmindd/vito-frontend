import * as Plan from "../actionTypes/planActionType"
import * as PlaneApi from "../../services/plan"

export const PlaneList = ()=> async dispatch => {
    const res = await PlaneApi.Plan()
    dispatch({
        type: Plan.PLANE_LIST,
        payload: res.data.data
    })
    return res.data
}