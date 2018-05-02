import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

import Appointments from '../appointment/Appointments';
import PatientDetails from './PatientDetails';
import Files from './Files';
import { withStyles } from 'material-ui/styles';

import { pendingAppts, pastAppts, files } from '../../dummyData';

const styles = {
  buttonWrapper: {
    marginTop: 30,
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    fontSize: 12,
  },
};

const PatientHome = ({ handleSubmit, classes, patient, pastAppointments, pendingAppointments, user }) => (
  <div className="container">
    <h2 className="welcome-header">Welcome back, {patient.firstName} {patient.lastName}</h2>
    <div className="profile">
      <div>
        <h3>Your Profile</h3>
        <PatientDetails patient={patient} />
      </div>
      <div className={classes.buttonWrapper}>
        <Button variant="raised" color="primary">
          <Link to={`/patients/${patient.id}/doctors/${patient.doctorId}/appointment`} className={classes.button}>Request Appointment</Link>
        </Button>
      </div>
    </div>
    <div>
      <h3>Upcoming Appointments</h3>
      <div>No upcoming appointments.</div>
      <h3>Pending Appointments</h3>
      <Appointments
        handleSubmit={handleSubmit}
        user={user}
        appointments={pendingAppointments}
        type="pending"
        viewer="patient"
      />
      <h3>Past Appointments</h3>
      <Appointments user={user} appointments={pastAppointments} type="past" viewer="patient" />
    </div>
    <div>
      {/* <h3>Your Files</h3> */}
      {/* <Files files={files} /> */}
    </div>
  </div>
);

PatientHome.propTypes = {
  classes: PropTypes.object.isRequired,
  patient: PropTypes.object.isRequired,
  pastAppointments: PropTypes.array.isRequired,
  pendingAppointments: PropTypes.array.isRequired,

};

export default withStyles(styles)(PatientHome);
