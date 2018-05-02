import expect from 'expect'
import patientReducer from './patientReducer'
import * as actions from '../actions/patientActions';

describe('Patient Reducer', () => {

    it('Type miss', () => {
        //arrange
        const initialState = {state:"state"};
        //act
        const action = {type:"MISS"}
        const actual = patientReducer(initialState, action);
        expect(actual).toEqual(initialState);
    });
    describe('PATIENT_DETAILS_SUCCESS', () => {

        it('Patient should be retrieved', () => {
            //arrange
            const initialState = {};
            const expected = {
                firstName: "Fred", 
                lastName: "Weasley", 
                role: "patient", 
                email: "fred@example.com", 
                id: "ab3e267e-a173-46db-9062-9fd8547d0b04"
            };
            //act
            const action = actions.patientDetailSuccess(expected);
            const actual = patientReducer(initialState, action);
            expect(actual).toEqual(expected);
        });
    });
});