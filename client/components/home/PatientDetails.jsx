import React from 'react';
import PropTypes from 'prop-types';

import LabeledText from '../common/LabeledText';

const PatientDetails = ({ patient }) => (
  <div className="patient-details">
    <LabeledText label="DOB" value={patient.dateOfBirth} />
    <LabeledText label="Email address" value={patient.email} />
    <LabeledText label="Phone" value={patient.phoneNumber} />
    <LabeledText label="Address" value={patient.address} />
  </div>
);

PatientDetails.propTypes = {
  patient: PropTypes.object,
};

export default PatientDetails;
