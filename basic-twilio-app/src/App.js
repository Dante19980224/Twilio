import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import {Home, SendSMS, GetAllSMS} from './components'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><NavLink to={'/'} activeClassName="active">home</NavLink></li>
          <li><NavLink to={'/send'} activeClassName="active">send a message</NavLink></li>
          <li><NavLink to={'/getAll'} activeClassName="active">display all messages</NavLink></li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/send" component={SendSMS} />
        <Route path="/getAll" component={GetAllSMS} />
      </div>
    </Router>
  );
}

export default App;
