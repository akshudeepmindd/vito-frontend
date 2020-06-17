import * as Modal from '../actionTypes/modalActionType';


export const modalState = (name) => dispatch => {
    dispatch({
      type: Modal.MODAL_STATE,
      payload: { show: name !== null, name }
    });
}