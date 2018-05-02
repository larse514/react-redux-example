import * as types from '../actions/actionTypes';

export default function patientReducer(state = {}, action) {
    switch (action.type) {
      case types.PATIENT_DETAILS_SUCCESS:
        return action.patient;
      default:
        return state;
    }
  }