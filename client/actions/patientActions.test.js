import expect from 'expect';
import * as patientActions from './patientActions';
import * as types from './actionTypes';

// Test a sync action
describe('Patient Actions', () => {
    describe('patientDetailSuccess', () => {
      it('should create a PATIENT_DETAILS_SUCCESS action', () => {
        //arrange
        const patient = {id: 'patient0'};
        const expected = {
            type: types.PATIENT_DETAILS_SUCCESS,
            patient: patient
          };
        //act
        const actual = patientActions.patientDetailSuccess(patient);
  
        //assert
        expect(actual).toEqual(expected);
      });
    });
  });
  