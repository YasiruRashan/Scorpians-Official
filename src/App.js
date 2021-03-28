import './App.css';
import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route exact path="/Login" component={Login} />
      <Route path ="*" render={()=>"404 Not found!"} /> //Not found Err executing

    </Switch>
  );
}


export default App;
