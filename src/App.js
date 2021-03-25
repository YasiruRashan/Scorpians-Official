import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import login from "./Pages/login";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={login}/>
      <Route path ="*" render={()=>"404 Not found!"} /> //Not found Err executing

    </Switch>
    </BrowserRouter>
  );
}


export default App;
