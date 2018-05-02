import { Router } from 'express';
import db from '../db';
import { MODELS } from '../db/db-constants';
import Api from '../db/db-api';

const userProperties = ['firstName', 'lastName', 'email'];

function hydratePatientData(patient) {
  return {
    ...patient,
    ...db
    .get(MODELS.USER)
    .find({ id: patient.user_id })
    .pick(userProperties)
    .value(),
    appointments: Api.Appointment.get({ patient_id: patient.id }),
    address: Api.Address.get({ id: patient.address_id }),
  };
}

export default Router()
  .get('/', (req, res) => {
    try{
      const patients = Api.Patient.get();
      return res.status(200).send(patients.map(hydratePatientData));
    }
    catch(error){
      return res.status(500).send({message: "Internal Error"});
    }
  })
  .get('/:id', (req, res) => {
    const patient = Api.Patient.get({"user_id":req.params.id});

    if(!patient || patient.length <  1){
      res.status(404).send({message: "not found"});
    } else{
      res.status(200).send(hydratePatientData(patient[0]));
    }
  });
