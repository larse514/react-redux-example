import * as types from './actionTypes';
import axios from 'axios';

export function appointmentSubmitSucess(appointment) {
    return { type: types.NEW_APPT_REQUEST_SUCCESS, appointment};
}


export function submitAppointment(appointment) {
    return function(dispatch) {
        return axios.post('/api/appointments/', appointment).then(res => {
            dispatch(appointmentSubmitSucess(res.data));
        }).catch(error => {
            throw(error);
        });
    };
} 

