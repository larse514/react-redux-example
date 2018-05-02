
import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import PatientHome from './PatientHome';
function setup() {
    const props = {
        classes: {},
        patient: {firstName: "RON", lastName: "WEASLEY"},
        pastAppointments: [],
        pendingAppointments: []
    }
  
    return shallow(<PatientHome {...props} />);
  }
describe('PatientHome', () => {

    it('renders h2', () => {
        const wrapper = setup().dive();
        expect(wrapper.find('h2').text()).toEqual('Welcome back, RON WEASLEY');
    });
})