import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
};

export default Routes;
