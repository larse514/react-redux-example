import * as types from './actionTypes';
import axios from 'axios';

export function patientDetailSuccess(patient) {
    return { type: types.PATIENT_DETAILS_SUCCESS, patient};
}
export function patientAppointmentCancellationSucess(appointment) {
    return { type: types.APPT_CANCELLATION_SUCESS, appointment};
}
export function loadPatientDetails(user) {
    return function(dispatch) {
        return axios.get('/api/patients/' + user.id).then(res => {
            dispatch(patientDetailSuccess(res.data));
        }).catch(error => {
            throw(error);
        });
    };
} 
export function cancelPatientAppointment(appointmentId) {
    return function(dispatch) {
        return axios.delete('/api/appointments/'+appointmentId).then(res => {
            dispatch(patientAppointmentCancellationSucess(res.data));
        }).catch(error => {
            throw(error);
        });
    };
} 
