import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import pink from 'material-ui/colors/pink';
import blue from 'material-ui/colors/blue';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Hind, sans-serif',
  },
  palette: {
    primary: pink,
    secondary: blue,
  },
});

import store from './store';

import Login from './components/login/Login';
import DoctorHome from './components/home/DoctorHome';
import PatientHomePage from './components/home/PatientHomePage';
import Patient from './components/home/DoctorPatient';
import Home from './components/home/Home';
import Navbar from './components/common/Navbar';
import NewApptRequest from './components/appointment/NewApptRequest';

// Load Global CSS
import '../assets/stylesheets/style.scss';
import '../node_modules/toastr/build/toastr.min.css';

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={DoctorHome} />
            <Route path="/patient/:id" component={Patient} />
            <Route path="/account/:id" component={PatientHomePage} />
            <Route path="/patients/:id/doctors/:id1/appointment" component={NewApptRequest} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main') // eslint-disable-line
);
