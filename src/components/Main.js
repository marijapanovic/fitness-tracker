import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import DayDetails from "../DayDetails";

const Main = () => {
    return (
      <Switch>
        <Route path="/day/:name" component={DayDetails} />
        <Route path="/" component={Home} />
      </Switch>
    );
  };
  export default Main;