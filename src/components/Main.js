import React from "react";
import { Switch, Route } from "react-router-dom";
import WeekView from "./WeekView";
import DayView from "./DayView";

const Main = (props) => {
    return (
      <Switch>
        <Route path="/day/:date" component={DayView} />
        <Route path="/" render={(routeProps) => <WeekView {...routeProps} trainingsByDay={props.trainingsByDay} />} />
      </Switch>
    );
  };
  export default Main;