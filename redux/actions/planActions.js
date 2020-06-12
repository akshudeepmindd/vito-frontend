import * as Plan from "../actionTypes/planActionType"
import * as PlaneApi from "../../services/plan"

export const PlaneList = (token)=> async dispatch => {
    console.log(token,"trokenen")
    const res = await PlaneApi.Plan(token)
    console.log(res.data.data,"resss")
    dispatch({
        type: Plan.PLANE_LIST,
        payload: res.data.data
    })
    return res.data
}