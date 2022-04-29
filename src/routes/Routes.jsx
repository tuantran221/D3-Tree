import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Chart from "../components/Chart";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path = "/Chart" component={Chart}/>
    
    </Switch>
  );
};

export default Routes;