import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateField } from 'react-date-picker';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as apptRequestActions from '../../actions/apptRequestActions';
import toastr from 'toastr';
import 'react-date-picker/index.css';
const purpose = "purpose";
const datetime= "datetime";

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 300,
  },
  formRow: {
    minWidth: 200,
    marginBottom: 20,
  },
  dateLabel: {
    fontSize: 12,
  },
};

class NewApptRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: {},
      dateMoment: {} // eslint-disable-line react/no-unused-state
    };
    this.updateApptState = this.updateApptState.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.submitAppointment = this.submitAppointment.bind(this);

  }

  componentDidMount() {
    const patientId = this.props.match.params.id;
    const doctorId = this.props.match.params.id1;
    this.setState({appointment: Object.assign({}, this.state.appointment, {patient_id: patientId, doctor_id: doctorId})});
  }

  updateApptState(event) {
    event.preventDefault();
    let appointment = this.state.appointment;

    appointment[purpose] = event.target.value;
    return this.setState({appointment: appointment});
  }

  handleChangeDate(date) {
    let appointment = this.state.appointment;
    appointment[datetime] = date;
    this.setState({
      appointment: appointment
    });
  }

  submitAppointment(event){
    event.preventDefault();
    this.props.actions.submitAppointment(this.state.appointment)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }
  
  redirect() {
    toastr.success('Appointment submitted successfully');
    this.context.router.history.push('/account/'+this.state.appointment.patient_id);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <div>
          <h2>Request an Appointment</h2>
        </div>
        <form className={classes.form}>
          <div className={classes.formRow}>
            <div className={classes.dateLabel}>Date</div>
            <DateField
              dateFormat="YYYY-MM-DD hh:mm a"
              onChange={this.handleChangeDate}
            />
          </div>
          <div className={classes.dateLabel}>Purpose</div>
          <input value={this.state.purpose} onChange={this.updateApptState}/>
          <br/>
          <Button
            variant="raised"
            color="primary"
            onClick={this.submitAppointment}
          >
            Submit Request
          </Button>
        </form>
      </div>
    );
  }
}

//Pull in the React Router context so router is available on this.context.router.
NewApptRequest.contextTypes = {
  router: PropTypes.object
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(apptRequestActions, dispatch)
  };
}

NewApptRequest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(() => ({}), mapDispatchToProps)(withStyles(styles)(NewApptRequest));
