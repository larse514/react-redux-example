import React, { Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PatientHome from './PatientHome';
import * as patientActions from '../../actions/patientActions';
import toastr from 'toastr';

import {patientFormattedDetail, patientPastAppointments, patientPendingAppointments} from '../../selectors/selectors';

export class PatientHomePage extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            user: Object.assign({}, props.user),
            patient: Object.assign({}, props.patient),
            pastAppointments: [],
            pendingAppointments: [],
            classes: Object.assign({}, props.classes)
 
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        this.props.actions.loadPatientDetails(this.state.user);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            pastAppointments: nextProps.pastAppointments,
            pendingAppointments: nextProps.pendingAppointments
        });
    }
    handleSubmit(appointmentId){
        this.props.actions.cancelPatientAppointment(appointmentId).then((res)=>{
            toastr.success('Appointment successfully canceled');
            this.props.actions.loadPatientDetails(this.state.user);
        }).catch(error => {
            toastr.error('Failed to delete appointment');
        });
    }
    render() {
        return (
          <PatientHome
            user={this.props.user}
            classes={this.props.classes}
            patient={this.props.patient}
            pastAppointments={this.state.pastAppointments}
            pendingAppointments={this.state.pendingAppointments}
            handleSubmit={this.handleSubmit}
          />
        );
    }
}

PatientHomePage.propTypes = {
    patient: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(patientActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    const user = state.user;
    const patient = patientFormattedDetail(state.patient);
    const pastAppointments = patientPastAppointments(state.patient);
    const pendingAppointments = patientPendingAppointments(state.patient);

    return {
        user: user,
        patient: patient,
        pastAppointments: pastAppointments,
        pendingAppointments: pendingAppointments,
        classes: {}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientHomePage);
