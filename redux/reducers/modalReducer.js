import * as Modal from '../actionTypes/modalActionType';



export default (state={path:''}, action) => {
    switch(action.type){
        case Modal.MODAL_STATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
        return state;
    }
}