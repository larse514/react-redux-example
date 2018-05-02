import { combineReducers } from 'redux';

import user from './auth';
import patient from './patientReducer';

const rootReducer = combineReducers({ user, patient });

export default rootReducer;
