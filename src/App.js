import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Nav from './Nav.js';


class App extends Component {
  render() {
    return (
      <div>
  
      <Nav />
     </div>
    );
  }
}

export default App;
