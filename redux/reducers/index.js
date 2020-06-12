import userReducer from "./userReducer"
import planReducer from "./planReducer"
import { combineReducers } from "redux"

export default combineReducers({
    user: userReducer,
    plan: planReducer
})