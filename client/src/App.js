import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home.js";
import Signup from "./pages/signup.js";
import Member from "./pages/member.js"
import './login.css'
import fakeAuth from './utils/authContext.js'


function App() {
function PrivateRoute({ children, ...rest }) {

  return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  return (
   
    <Router>
      <div>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route  path="/login">
          <Home />
        </Route>
        <Route  path="/sign">
          <Signup />
        </Route>
        <PrivateRoute  path="/member">
          <Member />
        </PrivateRoute>
        </Switch>
      </div>
    </Router>
 
  );
  
}

export default App;
