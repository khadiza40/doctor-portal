
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/about">
            <Home/>
          </Route>

         


          <Route path="/home">
            <Home>Home</Home>
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
