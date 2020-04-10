import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Member from "./pages/member"
import './login.css'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      isAuthenticated
      ? (
         <Component {...props} />
      )
      : (<Redirect to={{ pathname: '/login', state: { from: props.location} }} />)
    )}
  />
  );

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Home} />
        <Route  path="/signup" component={Signup} />
        <PrivateRoute  path="/member" component={Member} />
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
