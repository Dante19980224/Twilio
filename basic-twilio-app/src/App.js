import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import {SendSMS, GetAllSMS} from './components'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><NavLink to={'./send'} activeClassName="active">send a message</NavLink></li>
          <li><NavLink to={'./getAll'} activeClassName="active">display all messages</NavLink></li>
        </ul>
        <Route path="/send" component={SendSMS} />
        <Route path="/getAll" component={GetAllSMS} />
      </div>
    </Router>
  );
}

export default App;
