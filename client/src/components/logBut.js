import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import fakeAuth from '../utils/authContext'


  function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      fakeAuth.authenticate(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <button onClick={login} type="submit" className="btn btn-lg btn-primary btn-block">Log in</button>
      </div>
    );
  }

  export default LoginPage