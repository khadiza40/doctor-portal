
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

import Appointment from './Pages/Appointment/Appointment/Appointment';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
