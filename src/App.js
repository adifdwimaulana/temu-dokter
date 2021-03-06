import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

import './style.scss';
import DoctorDetail from './pages/DoctorDetail';
import Example from './pages/Example';
import Profile from './pages/Profile';

import DoctorProfile from './pages/doctor/Profile';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/dokter/1" component={DoctorDetail}></Route>
        <Route path="/example" component={Example}></Route>
        <Route path="/user/profile/:id" component={Profile}></Route>
        <Route path="/doctor/profile/:id" component={DoctorProfile}></Route>
      </Router>
    </div>
  );
}

export default App;