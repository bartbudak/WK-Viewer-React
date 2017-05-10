import React, {Component} from 'react';
import Nav from './Nav.js';
import './App.css';

export default class Header extends Component {
  render(){
    return(
      <div>
      <Nav />
        <div className="big-banner">
          <div className="callout large primary">
            <div className="row column text-center">
              <h1>Bartosz Budak</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
