import './App.css';
import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Authenticated from './Components/Authenticated';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Authenticated>
          <Dashboard/>
        </Authenticated>
      </Route>
      <Route exact path="/login">
        <Authenticated nonAuthenticated={true}>
          <Login/>
        </Authenticated>
      </Route>
      <Route path ="*" render={()=>"404 Not found!"} /> //Not found Err executing

    </Switch>
  );
}


export default App;
