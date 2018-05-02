import expect from 'expect';
import * as patientActions from './patientActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import axios from 'axios'
const _get = axios.get
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Patient Async Actions', () => {
    const expectedPatient = {
        firstName: "Fred", 
        lastName: "Weasley", 
        role: "patient", 
        email: "fred@example.com", 
        id: "ab3e267e-a173-46db-9062-9fd8547d0b04"
    };
    afterEach(() => {
        axios.get = _get;
    });
    beforeEach(() => {
        axios.get = expect.createSpy().andReturn(Promise.resolve({res:expectedPatient}));
    })
  
    // it('should create PATIENT_DETAILS_SUCCESS when loading courses', (done) => {

    //     //arrange
    //     const user = {id: "ab3e267e-a173-46db-9062-9fd8547d0b04"};

    //     const expectedActions = [{
    //         type: types.PATIENT_DETAILS_SUCCESS, 
    //         patient: expectedPatient
    //     }];
        
    //     const store = mockStore({patient: {}}, expectedActions);
    //     //act && assert
    //     store.dispatch(patientActions.loadPatientDetails(user)).then(() => {
    //         const actions = store.getActions();
    //         console.log(actions)
    //         expect(actions[0].type).toEqual(types.PATIENT_DETAILS_SUCCESS);
    //         expect(actions[0].patient).toEqual(expectedPatient);
    //         done();
    //     });
    // });
  });