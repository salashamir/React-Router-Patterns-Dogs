import React from "react";
import DogList from "./DogList";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import FilterDog from "./FilterDog";

const Routes = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <FilterDog dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;
