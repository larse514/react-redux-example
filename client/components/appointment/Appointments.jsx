import React from 'react';
import PropTypes from 'prop-types';

import Appointment from '../appointment/Appointment';

const Appointments = ({handleSubmit, user, appointments }) => (
  <div>
    {
      appointments.map((appt) => <Appointment handleSubmit={handleSubmit} user={user} key={appt.id} appt={appt} />)
    }
  </div>
);

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.object),
};

export default Appointments;
