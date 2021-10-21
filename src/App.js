import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Table from "./Components/Table";

const App = () => {
  return (
    <Router>
      <div className="Main-body">
        <Switch>
          <Route exact path="/">
            <Table />
          </Route>
          {/* <Route exact path="/Form">
          <Form/>
        </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
