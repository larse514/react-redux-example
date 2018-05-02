import { Router } from 'express';
import Api from '../db/db-api';
import * as constants from '../db/db-constants';

export default Router()
  .get('/', async (req, res) => {
    const result = await Api.Appointment.get();
    res
      .status(result.error ? 200 : 500)
      .send(result);
  })

  .get('/:id', async (req, res) => {
    const result = await Api.Appointment.get({id:req.params.id});
    if(!result || result.length < 1){
      res.status(404).send({message: "not found"});
    }
    res
      .status(result.error ? 200 : 500)
      .send(result[0]);
  })

  .post('/', async (req, res) => {
    try {
      const result = await Api.Appointment.create(req.body);
      res
        .status(200)
        .send(result);
    }
    catch(error){
      res
      .status(500)
      .send({message: "Internal Error"});
    }
  })

  .put('/:id', async (req, res) => {
    const result = await Api.Appointment.update(req.params.id, req.body);
    res
      .status(result.error ? 200 : 500)
      .send(result);
  })

  .delete('/:id', async (req, res) => {
    try {
      const result = await Api.Appointment.destroy(req.params.id);
      //delete operation is idempotent so if no error is thrown return successfully
      res
        .status(200)
        .send({message:"ok"});
    }
    catch(error){
      res
      .status(500)
      .send({message: "Internal Error"});
    }
  });
