import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';

import './style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/login" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;