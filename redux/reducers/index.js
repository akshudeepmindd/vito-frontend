import userReducer from "./userReducer"
import planReducer from "./planReducer"
import modalReducer from "./modalReducer"
import toastReducer from "./toastReducer"
import { combineReducers } from "redux"

export default combineReducers({
    user: userReducer,
    plan: planReducer,
    modal: modalReducer,
    toast: toastReducer
})