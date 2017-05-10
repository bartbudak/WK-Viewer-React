import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';



export default class Nav extends Component {
  render() {
    return (
      <Router>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li><Link id='lnk' to="/">Bart Budak</Link></li>
            <li><Link id='lnk' to="/About">About</Link></li>
            <li><Link id='lnk' to="/Projects">Projects</Link></li>
          </ul>
        </div>
        <Route exact path ="/" component = {Home} />
        <Route exact path ="/About" component = {About} />
        <Route exact path ="/Projects" component = {Projects} />
      </div>

    </ Router>
    );
  }
}
