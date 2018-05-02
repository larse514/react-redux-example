
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

import NewApptRequest from './NewApptRequest';
function setup() {
    const props = {
        appointment: {},
        dateMoment: {},
        match :{ params: {id: "PATIENTID", id2: "DOCTORID"}}
    }
  
    return mount(<NewApptRequest  {...props} store={mockStore({ runtime: {} })}/>);
  }
describe('NewApptRequest', () => {

    it('renders h2', () => {
        const wrapper = setup();
        expect(wrapper.find('h2').text()).toEqual('Request an Appointment');
    });
})