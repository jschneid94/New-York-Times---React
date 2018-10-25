import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Jumbotron from "./components/Jumbotron";

const App = () => (
  <Router>
    <div>
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
