import React, {Component} from 'react';
import './App.css';
import reactLogo from './reactlogo.png';
import wk from './wk.png';


export default class Projects extends Component {
  render(){
    return(
      <div>
        <h1>Projects</h1>
        <div id='test'>
        <img id="pic" src={reactLogo}></img>
        </div>
        <div>
        <h2>As I begin my career as a web developer, I wanted to perfect my fron-end development skills, and then further
        purse fullstack knowledge. Using the theory that I learned at Rutgers University, I am confident that I can create
        meaningful yet complex website for users of all ages.</h2>
        </div>
        <div id='test'>
        <img id="wk" src={wk}></img>
          <h2>As someone who studied Japanese in University, I want to react an React Native application that facilitates the
          study of the language through the use of the WaniKani web service. It is a project that involves fullstack so it
          will be a great learning curve for me and will propel my skills in web development.</h2>
        </div>
      </div>
    );
  }
}
