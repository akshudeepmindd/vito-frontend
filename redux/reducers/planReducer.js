import * as Plan from "../actionTypes/planActionType"

export default (state ={}, action) =>{
    switch(action.type){
        case Plan.PLANE_LIST:
            return{
                ...state,
                allPlan : action.payload
            }
        default:
            return state
    }
}