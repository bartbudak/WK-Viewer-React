import React, {Component} from 'react';
import './App.css';
import me from './me.jpg';

export default class About extends Component {
  render(){
    return(
      <div>
        <h1>Who am I?</h1>
        <div id='test'>
        <img id="me" src={me}></img>
        </div>
        <h2>My name is Bartosz Budak. Bart for short.</h2>
        <h2>I am a recent college graduate from Rutgers University where I studied Information Technology and Informatics
        along side a minor in Japanese. Post-graduation, I was able to pursue my career in my field of study by joining the
        Technology Development Program at Optum Tech.</h2>
      </div>
    );
  }
}
