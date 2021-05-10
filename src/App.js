import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoaderSpinner from "./components/LoaderSpinner";
import Login from "./components/Login";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
