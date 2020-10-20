import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Users} />
      <Route path="/users/:id" component={UserDetails} />
    </Router>
  );
}

export default App;
