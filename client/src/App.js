import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Member from "./pages/member"
import './login.css'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Home} />
        <Route  path="/signup" component={Signup} />
        <Route  path="/member" component={Member} />
      </div>
    </Router>
  );
  
}



export default App;
